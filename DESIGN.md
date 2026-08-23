---
name: monta's blog
description: Quiet technical personal blog with warm neutral surfaces and restrained blue accents.
colors:
  bg: "#fafaf9"
  bg-secondary: "#f5f5f4"
  text: "#1c1917"
  text-muted: "#78716c"
  accent: "#2563eb"
  accent-hover: "#1d4ed8"
  border: "#e7e5e4"
  code-bg: "#f8f8f8"
  tag-bg: "#e7e5e4"
  tag-text: "#44403c"
  badge-kmc-bg: "#151813"
  badge-kmc-border: "#87917c"
  badge-kmc-dark: "#080a07"
  badge-kmc-hover: "#30392a"
  badge-kmc-hover-border: "#d8e2cf"
  badge-kmc-hover-text: "#f0f5ec"
  badge-kmc-light: "#444d3e"
  badge-kmc-text: "#e4ebdf"
  badge-crt-bg: "#7d5b38"
  badge-crt-border: "#4c321f"
  badge-crt-dark: "#3b281b"
  badge-crt-hover: "#906d46"
  badge-crt-hover-border: "#c9ad83"
  badge-crt-text: "#fff6dc"
  badge-crt-light: "#b28b5f"
  crt-frame-border: "#432d1d"
  crt-frame: "#a27c50"
  crt-frame-highlight: "#d4b78d"
  crt-frame-shadow: "#5a3d25"
  crt-screen-border: "#2e3328"
  crt-screen: "#8d9b7d"
  crt-screen-line: "rgb(35 43 33 / 18%)"
  crt-screen-shadow: "#35402f"
  crt-screen-glow: "#f3e6bd"
  crt-screen-glow-soft: "#e7d8a9"
  crt-dial-border: "#3f2c1c"
  crt-dial-shadow: "#765334"
  crt-feet: "#422d1e"
  badge-aozora-bg: "#e8e0cd"
  badge-aozora-border: "#5a7084"
  badge-aozora-dark: "#a4afaf"
  badge-aozora-hover: "#2a5c87"
  badge-aozora-hover-border: "#b8d7ee"
  badge-aozora-text: "#fffdf4"
  badge-aozora-ink: "#194d7a"
typography:
  body:
    fontFamily: "IBM Plex Sans JP, Hiragino Sans, Yu Gothic, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  heading:
    fontFamily: "IBM Plex Sans JP, Hiragino Sans, Yu Gothic, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.02em"
  mono:
    fontFamily: "IBM Plex Mono, Fira Code, Cascadia Code, monospace"
  badge-detail:
    fontFamily: "Hiragino Sans, Yu Gothic UI, Yu Gothic, sans-serif"
    fontSize: "var(--text-badge-detail)"
  profile-title:
    fontSize: "clamp(var(--text-3xl), 9vw, var(--text-display))"
  profile-title-compact:
    fontSize: "clamp(var(--text-3xl), 14vw, var(--text-display-compact))"
  badge-label:
    fontSize: "var(--text-badge-label)"
  kmc-mark:
    fontSize: "var(--text-kmc-mark)"
  kmc-caption:
    fontSize: "var(--text-kmc-caption)"
  blog-title:
    fontSize: "clamp(var(--text-2xl), 5vw, var(--text-3xl))"
rounded:
  hairline: "1px"
  xs: "0.25rem"
  crt-screen: "6px"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1.5rem"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  4xl: "7rem"
components:
  profile-layout:
    structure: "editorial two-column introduction with a ruled interests list"
    border: "1px solid var(--border) used for section rules only"
---

# Design System: monta's blog

## Visual direction

Warm paper-like neutrals and dark brown-black text create a calm reading surface. Blue is the single interactive accent. The profile uses an editorial, text-led composition with a small unframed portrait and rules for structure instead of containers.

## Layout rules

- Keep the content column within the existing `--content-width` and use the shared `.container`.
- Keep the sticky header and footer behavior unchanged.
- Use the existing spacing tokens instead of page-specific arbitrary values when possible.
- Avoid card shells, pills, glass, backdrop blur, and lift-on-hover treatments on the profile.
- Let section rules, type scale, and generous whitespace carry hierarchy.

## Component rules

- Profile content is a single editorial flow: introduction, portrait, links, then a ruled interests list.
- Interests use a two-column desktop list and a one-column mobile list: Machine Learning, NLP, Networking, and HPC.
- Links remain text links with visible underlines and keyboard focus states.

## Durable web badge rules

- The profile ends with three 104×37px classic web badges and no visible section
  title. They are ordinary same-tab links and never become cards.
- Badges use crisp square corners, a 1px beveled/inset border, compact type,
  and CSS/SVG geometry only. KMC borrows the official logo's dense overlapping
  letters and arrow-ended C. YouTube is a brown CRT with a green scanline screen,
  two physical dials, and no playlist title. Aozora remains paper/blue. Hover
  changes color and border; active moves down 1px; keyboard focus is visible.
- IBM Plex Sans JP is locally bundled. The official Fontsource Latin WOFF2
  subsets are loaded through a Latin `unicode-range`; the existing full IBM
  files are restricted to Japanese ranges. Only the Latin Regular face is
  preloaded. Badge detail labels use the local OS Japanese sans stack so the
  profile's small labels do not trigger a full IBM JP face.
