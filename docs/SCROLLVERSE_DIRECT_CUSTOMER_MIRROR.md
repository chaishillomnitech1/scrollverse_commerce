# ScrollVerse Direct Customer Mirror — Build Record

**Repository:** `chaishillomnitech1/scrollverse_commerce`  
**Branch:** `scrollverse-direct-customer-mirror-2026-11-14`  
**Purpose:** An independent customer-facing companion to ScrollVerse.co, connected to the existing GitHub source and preserving the primary site's identity and history.

## Preservation and source boundaries

- This is an additive customer-facing presentation layer in the existing commerce repository.
- Existing Shopify product, collection, cart, API, and commerce routes remain in place.
- The primary ScrollVerse.co site and `scrollverse-web-app` remain the source for the existing ecosystem routes.
- Original artwork and media are not copied, recompressed, renamed, or overwritten by this change.
- The current hero image uses the already-published ScrollVerse Trinity Empire asset referenced by the core repository README.
- The customer mirror links to the original site's routes for Exchange, Crypto, Staking, Currency Exchange, Payment Options, Evolution Lookbook, Omniland, Books & Media, Sovereign Codex, Site Map, and Direct-to-Fan Catalog. The local `/search` route remains the commerce catalog entry.

## Customer experience

The new home page introduces:
- ScrollVerse identity and a responsive customer-facing hero.
- Discover pathways for lookbooks, motion studies, immersive worlds, books, media, and the Codex.
- Direct links to the existing Exchange, Crypto, Staking, and payment-option routes.
- A public payment-choice panel with explicit operating states.
- An evidence-led footer and navigation to the original site.

## Payment destination evidence

The existing Phase 415 visitor-choice audit records:
- Cash App: owner-stated public handoff for `$chaisthegreat28`; visitors independently verify the provider destination; ScrollVerse does not process or confirm the external transfer.
- PayPal: no confirmed public destination; owner release required.
- Chime: no confirmed public destination; owner release required.
- GoCard, SoFi, and Ouro: no confirmed public destinations; owner release required.
- Stripe/card checkout: item-specific checkout requires a release packet, provider-side configuration, test review, and explicit owner release.
- Shopify: a prior recorded storefront address was password protected; visitor-open checkout was not verified.

The mirror therefore displays Cash App as an external handoff and labels PayPal, Chime, and Stripe/card checkout as not yet released. It does not collect payment details or claim live checkout.

## Exchange and Web3 boundaries

The primary `scrollverse-web-app` contains routes for `/exchange`, `/exchange/crypto`, `/exchange/stocks`, `/exchange/defi`, `/exchange/portfolio`, `/exchange/heatmap`, `/exchange/governance`, `/exchange/currencies`, `/crypto`, and `/staking`. The customer mirror links to the verified route entry points. Route existence does not establish active exchange execution, brokerage, custody, token issuance, wallet connection, or settlement. Those capabilities remain independently gated by contract, provider, custody, regulatory, and transaction evidence.

## Asset and media intake

The source manifest in `scrollverse-web-app` records 450 visual files, 337 unique content hashes, and 35 named Evolution Lookbook accessions at the recorded scan. The lookbook evidence includes motion GIF accessions. This is an inventory, not blanket public-display permission. The customer mirror links to the existing lookbook rather than copying all source files into the commerce repository. Meta AI motion masterpieces and any additional external media should be attached only after the exact source files, creator/rights context, public-display decision, and accessibility descriptions are linked to their records.

Dropbox search in this session returned no matching Meta AI motion or lookbook files; no Dropbox assets were imported.

## Verification checklist

- [ ] Install locked dependencies.
- [ ] Run Prettier check.
- [ ] Run Next.js production build.
- [ ] Verify responsive layout and all external route targets.
- [ ] Verify the public hero asset resolves.
- [ ] Verify the Shopify product/cart paths still work.
- [ ] Link the repository to a dedicated Vercel project and verify a preview deployment.
- [ ] Confirm domain ownership and attach the customer-facing domain only after owner selection.
- [ ] Attach approved source assets and motion files with per-item provenance and accessibility metadata.
- [ ] Verify every payment destination and every Web3 transaction path independently before activation.

## Explicit non-actions

This build record does not claim production deployment, payment processing, a completed Stripe or PayPal checkout, Cash App transaction settlement, Chime integration, an active exchange, custody, token minting, a live wallet connection, or public release of every source asset.
