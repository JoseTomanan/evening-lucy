# Evening Lucy

A fork of [oh-lucy-vscode-theme](https://github.com/Hermitter/oh-lucy-vscode-theme), stripped down to a single theme built on the lucy-evening palette with the following opinionated changes:

## Changes from the original

**Darker backgrounds** — All background surfaces are darkened to 70% of their original brightness, giving the editor a deeper, more receded feel.

**Translucent UI elements** — Many workbench colors that were fully opaque in the original are now semi-transparent:
- Git decorations (modified, deleted, untracked) use 40–55% opacity instead of solid colors, so they tint rather than dominate the file tree
- Diagnostic squiggles (errors, warnings, info) are 50–60% opacity for softer inline feedback
- Minimap highlights sit at 30–40% opacity to stay visible without drawing the eye
- Bracket pair guides use 35% opacity so they fade into the background when not needed
- Selection and word-highlight backgrounds are 20–25% opacity for subtle, non-distracting emphasis

**More opaque status bar** — The status bar background uses 85% opacity, with warning and error items at 25–30% opacity so they blend into the bar rather than flash.

**Swapped git colors** — Modified files show as orange and untracked files as green (the original had these reversed).

**Editor widgets** — Suggest, hover, and other popup widgets use a slightly lighter background than the editor, rather than matching the panel color.

**Reduced font styling** — The original theme italicized many token types (attributes, parameters, storage types, CSS variables, etc.). Most of these have been removed for a cleaner look. Only comments and `self`/`this` remain italic. Function declarations are bold.

## Installation

1. Clone or download this repository
2. Run `npm install && npm run build`
3. Symlink or copy the folder into your editor's extensions directory

## Customization

Edit the colors in `src/lucy/colors.mjs`, then run `npm run build` to regenerate the theme into `dist/`.

## Credits

Based on [oh-lucy-vscode-theme](https://github.com/Hermitter/oh-lucy-vscode-theme) by Hermitter, which is itself based on the original [lucy-vscode-theme](https://github.com/jul-sh/lucy-vscode-theme).
God bless you for this amazing color scheme.
