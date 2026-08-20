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
typography:
  body:
    fontFamily: "Noto Sans JP Variable, Hiragino Sans, Yu Gothic, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  heading:
    fontFamily: "Noto Sans JP Variable, Hiragino Sans, Yu Gothic, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.02em"
  mono:
    fontFamily: "JetBrains Mono, Fira Code, Cascadia Code, monospace"
  profile-title:
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
  blog-title:
    fontSize: "clamp(var(--text-2xl), 5vw, var(--text-3xl))"
rounded:
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
components:
  profile-card:
    backgroundColor: "color-mix(in srgb, var(--bg) 40%, transparent)"
    borderColor: "var(--border)"
    rounded: "0.75rem"
    padding: "var(--spacing-xl)"
  skill-tag:
    backgroundColor: "rgb(250 250 249 / 0.6)"
    borderColor: "var(--border)"
    rounded: "999px"
---

# Design System: monta's blog

## Visual direction

Warm paper-like neutrals and dark brown-black text create a calm reading surface. Blue is the single interactive accent; content cards keep a translucent surface over the plain background with no decorative layer.

## Layout rules

- Keep the content column within the existing `--content-width` and use the shared `.container`.
- Keep the sticky header and footer behavior unchanged.
- Use the existing spacing tokens instead of page-specific arbitrary values when possible.
- Avoid adding another card layer around existing content.

## Component rules

- Profile content uses a single bordered card with a translucent surface and `backdrop-filter`.
- Skills are grouped in one translucent section; tags are compact pills with readable text.
- Buttons use the existing dark/light pair and keep visible hover states.
