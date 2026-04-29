# James Hardware — Shopify Website

The online store for **James Hardware**, an architectural-hardware brand based in Suzhou: cabinet handles, coat hooks, door accessories, house numbers, and glass clips, designed in-house and shipped from the workshop.

This repository holds the Shopify theme — a customised fork of Shopify's *Trade* (v15.2.0) — wired to the live store at **jameshardwarecn.myshopify.com** / **jameshardwarecn.com**.

## Stack

- **Theme base:** Shopify *Trade* v15.2.0 (Online Store 2.0, JSON templates, sections-everywhere)
- **Templating:** Liquid + JSON section templates (`templates/*.json`)
- **Styles:** vanilla CSS modules per component (`assets/component-*.css`) + a `luxury.css` overlay for the brand pass
- **Scripts:** plain ES modules (`assets/*.js`) — no build step

## Layout

```
assets/        # Per-component CSS + JS, fonts, vendored images
config/        # Theme settings schema + data
layout/        # theme.liquid (base layout), password.liquid
locales/       # Translations + schema strings
sections/      # Reusable sections referenced by templates
snippets/      # Liquid partials
templates/     # Page templates (index.json drives the homepage)
```

## Homepage composition

`templates/index.json` is the single source of truth for the homepage layout. Sections, in order:

1. Hero / image banner
2. Featured collection rails (Bestsellers, Catalogue tiles)
3. Chapter divider II — *On modular hookracks*
4. **Lookbook rail** (`multicolumn`) — 6-image, 3-column desktop / 2-column mobile, non-clickable mood strip ("From the Workshop")
5. Chapter divider IV — *Specified by architects*
6. Newsletter (currently hidden on home — footer signup remains)

Editing the homepage is mostly editing `templates/index.json` block settings; visual tweaks live in `assets/luxury.css` and the relevant `component-*.css`.

## Local development

```bash
# Install Shopify CLI once
brew tap shopify/shopify
brew install shopify-cli

# Authenticate to the store and start the dev server
shopify theme dev --store jameshardwarecn.myshopify.com
```

The dev server reverse-proxies the live store data (products, customers, cart) and watches local theme files for hot reload.

## Deployment

The repository is connected to Shopify via the GitHub theme integration. Pushing to `main` deploys the linked theme on the store automatically — no manual upload, no build step.

For one-off pushes from CLI:

```bash
shopify theme push --store jameshardwarecn.myshopify.com --theme <THEME_ID>
```

Always preview with `theme dev` before pushing to a published theme.

## Companion mobile app

A React Native / Expo prototype that connects to the same Shopify Storefront API lives in [reatured/james-hardware-mobile](https://github.com/reatured/james-hardware-mobile) (private). It shares no code with this theme — only the store data.

## Conventions

- **No build step.** Vanilla CSS/JS only; do not introduce Webpack/Vite/etc.
- **Editing JSON templates** — keep block IDs stable when possible; renaming a block ID resets the merchant's saved settings on that block.
- **Image refs** use `shopify://shop_images/<filename>` for assets uploaded via Shopify Admin → Content → Files; local files in `assets/` are referenced by filename only.
- Commit messages: imperative summary, optional body. Avoid noisy refactors mixed with feature work.
