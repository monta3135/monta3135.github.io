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
  badge-juice-bg: "#f8e5ed"
  badge-juice-border: "#3f1730"
  badge-juice-dark: "#8b365e"
  badge-juice-text: "#551739"
  badge-juice-accent: "#d74478"
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
    structure: "editorial two-column introduction with a ruled favorite-books list"
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

- Profile content is a single editorial flow: introduction, portrait, links, then a ruled favorite-books list.
- The introduction states the author's interest in machine learning and robotics. Favorite books are a one-column list whose entries need only a title and URL so more can be added without changing the layout.
- Links remain text links with visible underlines and keyboard focus states.

## Durable web badge rules

- The profile ends with one 104×37px KMC badge and two 88×31px classic web
  banners with no visible section title. They are ordinary same-tab links and
  never become cards.
- The banners intentionally feel historically out of place beside the quiet
  profile: crisp pixel edges, hard bevels, dense small type, and era-specific
  color. KMC uses the supplied mini logo. YouTube is a red 2011–2013-logo
  inspired banner; Juice=Juice is a blush and burgundy banner labeled with
  盛れ！ミ・アモーレ. Hover brightens the image; active moves down 1px; keyboard
  focus is visible.
- IBM Plex Sans JP is locally bundled. The official Fontsource Latin WOFF2
  subsets are loaded through a Latin `unicode-range`; the existing full IBM
  files are restricted to Japanese ranges. Only the Latin Regular face is
  preloaded. Badge detail labels use the local OS Japanese sans stack so the
  profile's small labels do not trigger a full IBM JP face.
