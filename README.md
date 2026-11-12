# Blork Studios Website

A modern, responsive, multi-page static website for **Blork Studios**, founded by solo indie developer **Philip Gonzales**, showcasing the flagship sci-fi FPS MMORPG **Art of War: Setting Sun**.

## Visual Design & Theme
Locked into a signature **Retro Sci-Fi CRT** aesthetic:
- **Color Palette**: Bright Cyan (`#00f0ff`) and Bright Hot Pink (`#ff2a85`) with deep obsidian backgrounds (`#05070c`).
- **Typography**: Cosmic fonts (*Orbitron*, *Space Grotesk*, *JetBrains Mono*).
- **Atmosphere**: Staticy octopus backdrop with subtle CRT scanlines, film grain, and glowing terminal borders.

## Pages & Hubs
- `index.html` — Studio and game hub featuring:
  - Official 1920x600 banner showcase.
  - **Where to Play & Follow**: Active link to the Itch.io development log (`https://blork-studios.itch.io/art-of-war-setting-sun`) with coming-soon badges for Steam and Google Play.
  - **Outlaw System vs. Galactic Marshal System**: Choose between the shadow economy (illicit chemistry, fences, The Don) or galactic law enforcement (Marshal Rook, official badges, evidence lockers).
  - **The Living Starship**: The Setting Sun with atmospheric takeoff sequences (loading screen transition) before entering deep spaceflight.
  - **Field Dispatches Gallery**: 9 real in-game screenshots with interactive category filtering (All, Spaceflight, FPS Combat, Worlds & Life) and keyboard-accessible lightbox modal.
  - **Characters & Masters**: Meet Blorbo, Seer Ixa, Ramick, and BURP Neural AI dialogue.
  - **The 17-World Galaxy Map** & Studio Manifesto.
- `games/art-of-war.html` — Dedicated game showcase with platform links, gameplay pillars, and screenshot gallery.
- `about.html` — Studio origins, mission statement, and core development values.
- `contact.html` — Studio communications array with 1-click email copy.
- `privacy.html` — Privacy policy matching the studio design system.
- `terms.html` — Terms of service matching the studio design system.

## Assets
- `images/blork-logo.png` — Clean high-resolution transparent mascot logo.
- `images/blork-logo-dark.png` — Dark variation of the mascot logo.
- `images/favicon.png` / `favicon-32.png` — Transparent browser favicons.
- `images/screenshots/` — 9 organized in-game captures (spaceflight, FPS combat, planets, hubs).
- `images/blork games/` — Studio banner and staticy octopus backdrop.

## Publishing
Optimized for zero-build static hosting (GitHub Pages, Cloudflare Pages, Netlify):
- Repository Settings → Pages → Deploy from branch `main` at `/` (root).