# Evening Lucy

A fork of [oh-lucy-vscode-theme](https://github.com/Hermitter/oh-lucy-vscode-theme), stripped to a single theme built on the lucy-evening palette.

## Changes from the original

**Backgrounds** — Darkened and fully desaturated to neutral grays for cleaner contrast.

**Foreground hierarchy** — Main foreground brightened and warmed; secondary foreground levels tuned to match Cursor's contrast ratios. Strings use a desaturated gold to avoid dominating the eye.

**Translucent UI** — Git decorations, diagnostics, minimap highlights, and bracket guides use alpha-based colors to tint rather than dominate.

**Selection & highlights** — Active list selections use alpha-white overlays (matching Cursor's approach) with bright white foreground. Word and find highlights are properly weighted.

**Current line & indent guides** — Line highlight is a solid visible step above the editor background. Indent guides use alpha-white so they appear correctly on any background.

**Bracket matching** — Bracket pairs get a visible background rather than relying solely on a dim border.

**Token adjustments** — Operators are neutral (near-foreground); expression operators (`typeof`, `instanceof`, etc.) are teal. Property access gets its own lavender color distinct from plain variables. Python decorators are not bold.

**Swapped git colors** — Modified files show as orange, untracked as green.

**Status bar** — 85% opacity background; warning and error items blend into the bar at low opacity.

## Installation

1. Clone this repository
2. Run `npm install && npm run build`
3. Symlink or copy the folder into your editor's extensions directory

## Customization

Edit `src/evening-lucy/colors.mjs`, then run `npm run build` to regenerate into `dist/`.

## Credits

Based on [oh-lucy-vscode-theme](https://github.com/Hermitter/oh-lucy-vscode-theme) by Hermitter, itself based on [lucy-vscode-theme](https://github.com/jul-sh/lucy-vscode-theme).
