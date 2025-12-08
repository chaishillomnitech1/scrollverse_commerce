# Deployment Guide

## Overview

This document provides instructions for deploying the scrollverse_commerce application to Vercel with GitHub integration and Phase 2 automation features.

## Prerequisites

- GitHub account with admin access to the repository
- Vercel account linked to your GitHub account
- Required secrets configured in GitHub repository settings
- Node.js 20.x or higher for local development

## Required Secrets

Before running the automated workflows, configure the following secrets in GitHub repository settings (Settings > Secrets and variables > Actions):

### Vercel Deployment
- `VERCEL_TOKEN` - Vercel API token for deployment automation
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

### AI PR Bot
- `OPENAI_API_KEY` - OpenAI API key for AI-powered PR reviews

### Rewards & NFT Minting
- `REWARDS_PRIVATE_KEY` - Private key for test wallet (Mumbai testnet)
- `ALCHEMY_MUMBAI_URL` - Alchemy API URL for Mumbai testnet
- `REWARDS_API_KEY` - API key for rewards service
- `REWARDS_CONTRACT_ADDRESS` - Smart contract address for rewards
- `PILOT_TEST_WALLET` - Test wallet address for pilot program

### Repository Sync
- `GITHUB_PAT` - GitHub Personal Access Token with repo access for cross-repo sync

## Vercel Setup

### 1. Link Repository to Vercel

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import the `chaishillomnitech1/scrollverse_commerce` repository
4. Configure the following settings:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
   - Node Version: 20.x

### 2. Configure Environment Variables

In Vercel project settings, add the following environment variables:

```
COMPANY_NAME=Your Company Name
SITE_NAME=Your Site Name
SHOPIFY_REVALIDATION_SECRET=your_secret
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
```

**Note on `.vercel.json` environment references:** The `.vercel.json` file uses the `@variable_name` syntax to reference environment variables that should be configured in the Vercel dashboard. These are not literal values but references to environment variables you must set up in your Vercel project settings. For example, `"@company_name"` refers to a Vercel environment variable named `COMPANY_NAME`.

Add any additional Phase 2 environment variables as needed:
- `REWARDS_CONTRACT_ADDRESS`
- `ALCHEMY_MUMBAI_URL` (or production URL)
- `REWARDS_API_KEY`

### 3. Enable GitHub Integration

1. In Vercel project settings, go to Git
2. Ensure "Production Branch" is set correctly
3. Enable automatic deployments for pull requests
4. Configure deployment protection rules as needed

## Automated Workflows

### Vercel Deploy Workflow

Automatically deploys to Vercel on push to main branch and pull requests.

**Trigger**: Push to main, pull request to main
**File**: `.github/workflows/vercel-deploy.yml`

### E2E Testing Workflow

Runs end-to-end tests on deployment preview URLs.

**Trigger**: Workflow dispatch, scheduled
**File**: `.github/workflows/e2e.yml`

### AI PR Bot Workflow

Reviews pull requests using OpenAI and posts feedback as comments.

**Trigger**: Pull request opened/synchronize
**File**: `.github/workflows/ai-pr-bot.yml`
**Settings**: Conservative prompts, no auto-merge

### Reward and Mint Workflow

Handles NFT minting and reward distribution for contributors (pilot program).

**Trigger**: Pull request merged, manual dispatch
**File**: `.github/workflows/reward-and-mint.yml`
**Network**: Mumbai testnet (pilot)

### Repository Sync Workflow

Syncs changes across related repositories in the organization.

**Trigger**: Push to main, manual dispatch
**File**: `.github/workflows/repo-sync.yml`

## Deployment Process

### Production Deployment

1. Merge approved PR to main branch
2. Vercel automatically deploys to production
3. Monitor deployment in Vercel dashboard
4. Verify deployment at production URL

### Preview Deployment

1. Create a pull request
2. Vercel automatically creates a preview deployment
3. Preview URL is posted as a comment on the PR
4. Test changes on preview deployment
5. Merge when ready

## Troubleshooting

### Deployment Fails

- Check Vercel deployment logs in dashboard
- Verify all environment variables are set correctly
- Ensure build command completes successfully locally
- Check Node.js version compatibility

### Workflow Failures

- Review GitHub Actions logs for specific error messages
- Verify all required secrets are configured
- Check workflow permissions in repository settings
- Ensure token permissions are sufficient

### Environment Variable Issues

- Verify secrets are not exposed in logs
- Check that `.env.example` is updated with new variables
- Ensure production vs. development values are correct
- Use Vercel environment variable scoping (Production/Preview/Development)

## Best Practices

1. **Never commit secrets** - Use environment variables and GitHub Secrets
2. **Test in preview** - Always test changes in preview deployments before merging
3. **Monitor deployments** - Keep an eye on deployment status and logs
4. **Use semantic versioning** - Tag releases appropriately
5. **Document changes** - Update this guide when adding new workflows or deployment steps

## Support

For issues or questions:
- Create an issue using `.github/ISSUE_TEMPLATE/vercel-setup.md`
- Contact @chaishillomnitech1
- Check Vercel documentation: https://vercel.com/docs

## Next Steps After Initial Setup

1. ✅ Merge this PR to add Phase 2 baseline files
2. ✅ Configure all required secrets in GitHub repository settings
3. ✅ Verify Vercel environment variables are set
4. ✅ Run a manual test deployment via Vercel dashboard
5. ✅ Test AI PR bot by creating a test PR
6. ✅ Validate rewards workflow on Mumbai testnet
7. ✅ Monitor first automated deployment
8. ✅ Update this document with any environment-specific details
