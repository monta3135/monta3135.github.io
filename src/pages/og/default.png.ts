import fs from "node:fs/promises";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";
import { loadDefaultJapaneseParser } from "budoux";
import satori from "satori";

const parser = loadDefaultJapaneseParser();

const fontPath = path.resolve(process.cwd(), "src/assets/fonts/NotoSansJP-Bold.ttf");
const fontData = await fs.readFile(fontPath);

export async function GET() {
  const words = parser.parse("monta's blog");

  const markup = {
    type: "div",
    props: {
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        fontFamily: "'Noto Sans JP'",
        padding: "40px 80px",
        border: "16px solid #2563eb",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
              fontSize: "80px",
              fontWeight: 700,
              color: "#1c1917",
              textAlign: "center",
              lineHeight: 1.3,
            },
            children: words.map((word) => ({
              type: "span",
              props: {
                style: { display: "flex" },
                children: word,
              },
            })),
          },
        },
      ],
    },
  };

  const svg = await satori(markup as any, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Noto Sans JP",
        data: fontData,
        weight: 700,
        style: "normal",
      },
    ],
  });

  const resvg = new Resvg(svg, {
    background: "#ffffff",
    fitTo: {
      mode: "width",
      value: 1200,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(new Uint8Array(pngBuffer), {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
