# Build Toolchain Consolidation — Reusable Node.js and pnpm Setup

**Status:** Isolated implementation proposal; awaiting pull-request CI and review.
**Date:** 2026-11-16
**Base:** `main`
**Branch:** `ops/reusable-node-pnpm-setup-2026-11-16`

## Evidence that motivated the change

The existing `.github/workflows/ci.yml`, `build.yml`, `deploy.yml`, and `vercel-deploy.yml` each repeated Node.js/pnpm installation and cache setup. The first two use a Node 18/20 matrix; the deploy workflows use Node 20. The package uses pnpm with a committed `pnpm-lock.yaml`.

The prior `vercel-deploy.yml` separately installed Node, pnpm, resolved the pnpm store, configured a cache, and then installed dependencies. The other workflows repeated the setup actions directly.

## Consolidation implemented on this branch

Added one local composite action:

`.github/actions/setup-node-pnpm/action.yml`

It accepts explicit `node-version` and optional `pnpm-version` inputs, installs pnpm, then configures Node.js with the built-in pnpm lockfile cache.

The four workflows now call that shared action. Their project-specific duties remain in their original workflow files:

- CI still installs frozen dependencies, runs formatting checks and tests, and uploads test results.
- Build still installs frozen dependencies, builds, and uploads build artifacts.
- Deploy still builds and uses its existing production deployment action and secrets.
- Vercel deploy still retains its existing production-on-main and preview-on-PR conditions.

## Measurable source consolidation

- One shared setup implementation now defines Node/pnpm setup and pnpm cache behavior.
- Four workflows consume that one implementation.
- The manually maintained pnpm store cache steps in `vercel-deploy.yml` are removed in favor of setup-node's pnpm cache.
- Node version and pnpm version remain explicit per workflow; matrix behavior is preserved.

This reduces duplicated workflow configuration. It does **not** claim fewer GitHub Actions minutes or lower runner cost yet; runtime evidence is required to measure that.

## Safety and non-goals

- No application source code, package dependencies, lockfile, Shopify secrets, Vercel secrets, deployment triggers, environment names, or deployment actions were changed.
- No production deployment was initiated by this branch.
- The existing deployment workflows remain vendor-specific; this change does not establish vendor independence.
- The PR workflow may run the repository's existing pull-request CI/build and preview workflow. Production deploy conditions remain tied to pushes to `main`.
- No files on `main` were changed.

## Validation required

1. GitHub Actions must load the local composite action successfully.
2. CI must pass on the existing Node 18 and 20 matrix.
3. Build must pass on the existing Node 18 and 20 matrix.
4. Verify the pnpm cache is restored/saved by setup-node.
5. Confirm preview deployment behavior remains as configured and no production deployment occurs from a pull request.
6. Compare workflow durations and cache-hit results against the pre-change runs before claiming runtime or cost savings.

## Rollback

Revert this PR to restore the four original workflow definitions and remove the local composite action. No application runtime or data migration is involved.
