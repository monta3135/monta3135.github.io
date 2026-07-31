import fs from "node:fs/promises";
import path from "node:path";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { Resvg } from "@resvg/resvg-js";
import { loadDefaultJapaneseParser } from "budoux";
import type { ReactNode } from "react";
import satori from "satori";

type MarkupElement = {
  type: string;
  props: {
    style: Record<string, string | number>;
    children?: MarkupElement | string | Array<MarkupElement | string>;
  };
};

// BudouX parser for Japanese word wrapping
const parser = loadDefaultJapaneseParser();

// Read font file
const fontPath = path.resolve(
  process.cwd(),
  "src/assets/fonts/NotoSansJP-Bold.ttf",
);
const fontData = await fs.readFile(fontPath);

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post,
  }));
}

export async function GET({ props }: { props: CollectionEntry<"blog"> }) {
  const { title } = props.data;

  // Process title with BudouX into an array of words
  const words = parser.parse(title);

  // Create markup for Satori using React-elements-like syntax directly
  const markup: MarkupElement = {
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
              fontSize: "64px",
              fontWeight: 700,
              color: "#1c1917",
              textAlign: "center",
              lineHeight: 1.4,
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
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              position: "absolute",
              bottom: "40px",
              right: "80px",
              fontSize: "32px",
              color: "#78716c",
            },
            children: "monta's blog",
          },
        },
      ],
    },
  };

  // Generate SVG with Satori
  const svg = await satori(markup as unknown as ReactNode, {
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

  // Convert SVG to PNG with Resvg
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
