# Shared Node.js/pnpm Setup — Security and E2E Follow-up

**Date:** 2026-11-16  
**Base:** `main`  
**Branch:** `ops/extend-shared-node-pnpm-setup-security-e2e-2026-11-16`  
**Status:** Isolated PR proposal; not merged.

## Prior implementation verified

Commerce PR #76 was merged at `9d63533098e91086061dea9f703de4a0fa319904`. It introduced `.github/actions/setup-node-pnpm/action.yml` and migrated four workflows: CI, build, deploy, and Vercel deploy.

The shared action accepts explicit Node and pnpm versions, installs pnpm, configures Node.js, and uses setup-node's pnpm cache. Frozen-lockfile installs remain in each caller.

## Remaining duplicate setup found

A source review of the current `main` branch found two additional workflows still defining Node/pnpm setup independently:

- `.github/workflows/security.yml` — the dependency-scan job installed pnpm 9 and Node 20 with a pnpm cache.
- `.github/workflows/e2e.yml` — the E2E job installed Node 20 and pnpm 9 separately, without setup-node's pnpm cache.

The CodeQL and TruffleHog jobs in the security workflow do not perform this pnpm preparation and are intentionally unchanged.

## Follow-up implemented on this branch

Both remaining workflows now call the existing local composite action with the same explicit versions:

- Security dependency scan: Node `20.x`, pnpm `9`.
- E2E job: Node `20`, pnpm `9`.

The frozen `pnpm install --frozen-lockfile` commands remain in their original jobs.

## Measurable source-level result

- One shared Node/pnpm preparation action is now referenced by six workflows: CI, build, deploy, Vercel deploy, Security Scan (dependency-scan job), and E2E.
- Two remaining duplicated Node/pnpm setup blocks are replaced by two calls to that shared action.
- The security-specific CodeQL and TruffleHog jobs remain independent.
- Workflow triggers, permissions, environment scopes, audit steps, artifact handling, deployment actions, and production/preview conditions are unchanged by this follow-up.
- This is a source-maintenance consolidation. It does not establish fewer GitHub Actions minutes, lower runner costs, faster workflows, or production runtime changes.

## Validation and evidence boundaries

The merged PR #76 already demonstrated the local action loading successfully in the Build workflow on Node 18 and Node 20, and in the Security Scan dependency job. Its recorded CI run was mixed: Build passed on both Node versions and Security Scan passed; CI stopped at an existing Prettier check failure, and the Vercel preview step failed because the Vercel token was unavailable. The production deploy step was skipped.

This follow-up requires its own PR-triggered workflow evidence. The E2E workflow has only manual and scheduled triggers, so it will not run merely because this PR is opened. Its current E2E command is a placeholder, not an implemented browser test suite. No E2E test pass should be claimed until real tests exist and are run.

## Safety

- Isolated branch from `main`; no direct default-branch writes.
- No application source, package manifest, dependency lockfile, secrets, DNS, infrastructure, or production settings changed.
- No workflow triggers, deployment conditions, or production actions changed.
- No production deployment is initiated by this change.
- The PR's existing Vercel preview workflow may run under its pre-existing pull-request trigger and requires its already-configured credentials; no credentials are added or changed here.
- Merge remains subject to review and passing/understood checks.

## Rollback

Revert the two workflow edits to restore their former inline setup steps. The shared composite action and the four workflows migrated by PR #76 remain untouched.


## PR #77 validation results

Head commit: `fb5cda7aabbad413f65c54cbb07df4e6bd9d3ecd`.

- **Security Scan — PASS:** [run #41](https://github.com/chaishillomnitech1/scrollverse_commerce/actions/runs/43903424571). Dependency Security Scan, CodeQL Analysis, and Secret Scanning all completed successfully. The dependency-scan job loaded the shared composite action and installed frozen dependencies successfully.
- **Build — PASS:** [run #56](https://github.com/chaishillomnitech1/scrollverse_commerce/actions/runs/43903424414). Build completed successfully on Node 18 and Node 20; both jobs loaded the shared action and installed frozen dependencies.
- **CI — FAIL / pre-existing formatting gate:** [run #56](https://github.com/chaishillomnitech1/scrollverse_commerce/actions/runs/43903424610). The shared setup action and frozen dependency install succeeded. The formatter check failed on `components/scrollverse-home.tsx` and `docs/SCROLLVERSE_DIRECT_CUSTOMER_MIRROR.md`; unit tests were skipped after that failure. Those files are outside this PR's changes and were not modified here.
- **Vercel preview — FAIL / external provider block:** [run #58](https://github.com/chaishillomnitech1/scrollverse_commerce/actions/runs/43903424366). Build and dependency installation succeeded; the preview deployment step failed with the existing Vercel account/deployment-blocked response. The production deployment step was skipped. This PR did not initiate a production release.
- **E2E — NOT RUN:** the workflow is configured for manual dispatch and schedule, not pull requests. Its current browser-test command remains a placeholder, so no E2E test result is claimed.

The checks establish that the shared setup action works in the Security dependency-scan job and the Node 18/20 Build jobs on this PR head. They do not establish a clean full CI suite, a working Vercel preview, a browser E2E suite, or production runtime behavior.
