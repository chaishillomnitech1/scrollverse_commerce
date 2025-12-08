# Phase 2 Deployment Guide

This guide provides complete setup instructions for the Phase 2 enhancements to the Scrollverse Commerce repository. These workflows enhance operational velocity, collaboration efficiency, and reward transparency while maintaining strict security standards.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Workflow Descriptions](#workflow-descriptions)
4. [Required Secrets](#required-secrets)
5. [Setup Instructions](#setup-instructions)
6. [Security Considerations](#security-considerations)
7. [Testing and Validation](#testing-and-validation)
8. [Troubleshooting](#troubleshooting)
9. [Maintenance](#maintenance)

---

## Overview

Phase 2 introduces three automated workflows:

1. **AI-Powered PR Assistant**: Automatically generates PR summaries, suggests labels, and creates changelog entries using OpenAI
2. **Reward Allocation**: Integrates with the OmniRewards testnet contract to mint tokens when PRs are merged
3. **Repo-Sync Action**: Enables centralized management of workflows and documentation through template repository synchronization

These workflows are designed with robust guardrails and staging configurations to protect production integrity.

---

## Prerequisites

Before deploying Phase 2, ensure you have:

- [ ] GitHub repository admin access
- [ ] Access to add repository secrets
- [ ] OpenAI API account (for AI PR Assistant)
- [ ] Alchemy account with Mumbai testnet access (for Rewards)
- [ ] Ethereum wallet with private key (for Rewards)
- [ ] OmniRewards smart contract deployed on Mumbai testnet (for Rewards)
- [ ] (Optional) Personal Access Token for repo sync across organizations

---

## Workflow Descriptions

### 1. AI-Powered PR Assistant

**File**: `.github/workflows/ai-pr-assistant.yml`

**Triggers**: When a PR is opened, synchronized, or reopened

**Features**:
- Analyzes PR diffs using GPT-4
- Generates concise summaries
- Suggests relevant labels
- Creates changelog entries in standardized format
- Handles large diffs with truncation
- Posts results as PR comments

**Benefits**:
- Reduces manual PR review overhead
- Ensures consistent PR documentation
- Improves changelog accuracy
- Accelerates PR processing

### 2. Reward Allocation for Merged PRs

**File**: `.github/workflows/reward-allocation.yml`

**Triggers**: When a PR is closed (only executes if merged)

**Features**:
- Calculates rewards based on PR complexity (lines changed, files modified)
- Mints OMNI tokens on Polygon Mumbai testnet
- Posts transaction details in PR comments
- Supports staging and production modes
- Validates configuration before execution
- Graceful error handling with notifications

**Reward Calculation**:
```
Base Reward: 1 OMNI token
Complexity Score: (additions + deletions) / 100 + changed_files
Complexity Cap: 50 (for fairness)
Final Reward: base + (base * complexity / 100)
```

**Benefits**:
- Incentivizes quality contributions
- Transparent reward system
- Automated token distribution
- Blockchain-verified transactions

### 3. Repo-Sync Action

**File**: `.github/workflows/repo-sync.yml`

**Triggers**:
- Manual workflow dispatch (pull or push)
- Automatic push on main branch updates (specific paths)
- Weekly scheduled pull (Sundays at midnight UTC)

**Features**:
- Bidirectional sync (pull from or push to template repository)
- Selective file/directory synchronization
- Automatic PR creation for pulled changes
- Prevents accidental overwrites
- Supports private template repositories

**Synced Files**:
- Workflow files (`.github/workflows/`)
- Deployment documentation (`DEPLOYMENT.md`)
- Security documentation (`SECURITY.md`)

**Benefits**:
- Centralized workflow management
- Consistent standards across repositories
- Easy rollout of updates
- Reduced maintenance overhead

---

## Required Secrets

Configure the following secrets in your repository settings (`Settings > Secrets and variables > Actions > New repository secret`):

### AI-Powered PR Assistant

| Secret Name | Description | Required | Example |
|------------|-------------|----------|---------|
| `OPENAI_API_KEY` | OpenAI API key for GPT-4 access | ✅ Yes | `sk-...` |

### Reward Allocation

| Secret Name | Description | Required | Example |
|------------|-------------|----------|---------|
| `ALCHEMY_MUMBAI_URL` | Alchemy RPC URL for Polygon Mumbai | ✅ Yes | `https://polygon-mumbai.g.alchemy.com/v2/...` |
| `REWARDS_PRIVATE_KEY` | Private key for reward distribution wallet | ✅ Yes | `0x...` (64 hex chars) |
| `OMNIREWARDS_CONTRACT_ADDRESS` | Deployed OmniRewards contract address | ✅ Yes | `0x...` (40 hex chars) |
| `DEFAULT_REWARDS_ADDRESS` | Fallback address for rewards | ⚠️ Recommended | `0x...` |
| `DEPLOYMENT_STAGE` | Deployment environment (`staging` or `production`) | ⚠️ Recommended | `staging` |

### Repo-Sync Action

| Secret Name | Description | Required | Example |
|------------|-------------|----------|---------|
| `REPO_SYNC_TOKEN` | Personal Access Token with repo scope | ⚠️ For private repos | `ghp_...` |

---

## Setup Instructions

### Step 1: Deploy the Workflows

The workflow files are already in place in `.github/workflows/`. No action needed.

### Step 2: Configure AI PR Assistant

1. **Obtain OpenAI API Key**:
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Navigate to API Keys section
   - Create new secret key
   - Copy the key (starts with `sk-`)

2. **Add to Repository Secrets**:
   ```
   Name: OPENAI_API_KEY
   Value: sk-your-actual-key-here
   ```

3. **Verify Setup**:
   - Open a test PR
   - Check for AI-generated comment within 2-3 minutes
   - Verify labels are suggested
   - Review changelog entry format

### Step 3: Configure Reward Allocation

#### 3.1 Setup Alchemy Account

1. Visit [Alchemy](https://www.alchemy.com/)
2. Create account and new app
3. Select chain: Polygon
4. Select network: Mumbai (testnet)
5. Copy the HTTPS URL

#### 3.2 Deploy or Locate OmniRewards Contract

**Option A: Use Existing Contract**
- If already deployed, obtain the contract address from your team

**Option B: Deploy New Contract**
- Use the OmniRewards smart contract from omnitech-templates
- Deploy to Polygon Mumbai testnet
- Verify on PolygonScan Mumbai

**Minimal Contract Interface Required**:
```solidity
interface IOmniRewards {
    function mint(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}
```

#### 3.3 Setup Rewards Wallet

1. **Create or Use Existing Wallet**:
   - Use MetaMask or similar
   - Ensure it has Mumbai testnet MATIC for gas
   - Grant this wallet `MINTER_ROLE` on the OmniRewards contract

2. **Export Private Key**:
   - ⚠️ **CRITICAL**: Never share or commit this key
   - Export from wallet (64 hexadecimal characters)
   - May or may not include `0x` prefix

3. **Get Test MATIC**:
   - Visit [Mumbai Faucet](https://faucet.polygon.technology/)
   - Request test MATIC for gas fees

#### 3.4 Add Secrets to Repository

```
Name: ALCHEMY_MUMBAI_URL
Value: https://polygon-mumbai.g.alchemy.com/v2/YOUR_KEY

Name: REWARDS_PRIVATE_KEY
Value: 0x1234...your-private-key

Name: OMNIREWARDS_CONTRACT_ADDRESS
Value: 0xABCD...contract-address

Name: DEFAULT_REWARDS_ADDRESS
Value: 0xEF12...fallback-address

Name: DEPLOYMENT_STAGE
Value: staging
```

#### 3.5 Verify Setup

1. Merge a test PR
2. Check PR comments for reward notification
3. Verify transaction on [Mumbai PolygonScan](https://mumbai.polygonscan.com/)
4. Confirm token balance increased

### Step 4: Configure Repo-Sync (Optional)

The repo-sync workflow works out of the box for public template repositories. For additional features:

1. **For Private Template Repositories**:
   - Create GitHub Personal Access Token
   - Grant `repo` scope
   - Add as `REPO_SYNC_TOKEN` secret

2. **Configure Template Repository**:
   - Edit `.github/workflows/repo-sync.yml`
   - Update `TEMPLATE_REPO` variable (line ~67)
   - Update `SYNC_PATHS` array (line ~72-77)

3. **Test Sync**:
   - Navigate to Actions tab
   - Select "Repo Sync" workflow
   - Click "Run workflow"
   - Choose "pull" direction
   - Review created PR

---

## Security Considerations

### API Keys and Secrets

- ✅ **DO**: Store all sensitive data in GitHub Secrets
- ✅ **DO**: Rotate keys periodically (quarterly recommended)
- ✅ **DO**: Use separate keys for staging and production
- ✅ **DO**: Limit API key permissions to minimum required
- ❌ **DON'T**: Commit secrets to repository
- ❌ **DON'T**: Share secrets via insecure channels
- ❌ **DON'T**: Use production keys for testing

### Private Keys

- ✅ **DO**: Use dedicated wallet for rewards distribution
- ✅ **DO**: Limit wallet balance (refill as needed)
- ✅ **DO**: Monitor wallet activity regularly
- ✅ **DO**: Use hardware wallet for production (when possible)
- ❌ **DON'T**: Use personal wallet with significant funds
- ❌ **DON'T**: Reuse keys across environments

### Workflow Permissions

All workflows follow the principle of least privilege:

- **AI PR Assistant**: `pull-requests: write`, `contents: read`
- **Reward Allocation**: `pull-requests: write`, `issues: write`, `contents: read`
- **Repo-Sync**: `contents: write`, `pull-requests: write`

### Guardrails

1. **Staging Mode**: Default deployment stage prevents accidental production transactions
2. **Validation Checks**: Workflows validate configuration before execution
3. **Error Handling**: Graceful failures with notifications
4. **Rate Limiting**: OpenAI API calls are throttled naturally by PR frequency
5. **Transaction Limits**: Reward calculation caps prevent excessive payouts

---

## Testing and Validation

### Pre-Production Checklist

- [ ] All secrets configured correctly
- [ ] Test OpenAI API key with sample request
- [ ] Verify Mumbai testnet connectivity
- [ ] Confirm contract address is correct
- [ ] Test wallet has sufficient MATIC
- [ ] Review workflow YAML syntax
- [ ] Check GitHub Actions are enabled

### Test Scenarios

#### AI PR Assistant Test
1. Create a small test PR (e.g., update README)
2. Verify comment appears within 3 minutes
3. Check summary accuracy
4. Validate label suggestions
5. Review changelog format

#### Reward Allocation Test
1. Create and merge a small test PR
2. Verify reward calculation comment
3. Check transaction hash in comment
4. Verify transaction on Mumbai PolygonScan
5. Confirm token balance update

#### Repo-Sync Test
1. Trigger manual workflow run
2. Select "pull" direction
3. Verify PR is created (if changes exist)
4. Review synced files
5. Merge sync PR

---

## Troubleshooting

### AI PR Assistant Issues

**Problem**: No comment appears on PR

**Solutions**:
- Verify `OPENAI_API_KEY` is set correctly
- Check OpenAI API quota/billing
- Review workflow run logs in Actions tab
- Ensure PR has changes (not empty)
- Check if API request was rate-limited

**Problem**: Generic or incorrect summary

**Solutions**:
- Verify PR description is clear
- Check if diff was truncated (noted in comment)
- Review token limits in workflow
- Consider updating GPT model version

### Reward Allocation Issues

**Problem**: Configuration warning appears

**Solutions**:
- Verify all required secrets are set
- Check secret names match exactly (case-sensitive)
- Ensure no extra spaces in secret values
- Re-add secrets if recently updated

**Problem**: Transaction fails

**Solutions**:
- Verify wallet has Mumbai MATIC for gas
- Check wallet has MINTER_ROLE on contract
- Verify contract address is correct
- Check Alchemy URL is valid
- Review private key format (with/without 0x prefix)
- Verify Mumbai testnet is operational

**Problem**: Wrong reward amount

**Solutions**:
- Review reward calculation logic
- Check PR metrics (additions, deletions, files)
- Verify complexity cap is applied
- Test calculation manually

### Repo-Sync Issues

**Problem**: Sync fails with permission error

**Solutions**:
- Verify `REPO_SYNC_TOKEN` has `repo` scope
- Check token hasn't expired
- Ensure token has access to template repository
- Verify template repository exists

**Problem**: No changes detected

**Solutions**:
- Verify template repository has updates
- Check `SYNC_PATHS` configuration
- Ensure branch names match
- Review template repository structure

---

## Maintenance

### Regular Tasks

**Weekly**:
- Review workflow execution logs
- Monitor OpenAI API usage and costs
- Check reward wallet balance (refill if needed)

**Monthly**:
- Audit successful/failed workflow runs
- Review reward distribution fairness
- Update reward calculation if needed
- Verify all secrets are still valid

**Quarterly**:
- Rotate API keys and secrets
- Review and update guardrails
- Assess workflow performance metrics
- Update documentation as needed

### Upgrading to Production

When ready to move from staging to production:

1. **Deploy Production Contract**:
   - Deploy OmniRewards to Polygon mainnet
   - Verify contract on PolygonScan
   - Grant MINTER_ROLE to production wallet

2. **Update Secrets**:
   ```
   ALCHEMY_MUMBAI_URL → ALCHEMY_POLYGON_URL
   OMNIREWARDS_CONTRACT_ADDRESS → Production address
   REWARDS_PRIVATE_KEY → Production wallet key
   DEPLOYMENT_STAGE → production
   ```

3. **Update Workflow**:
   - Edit `reward-allocation.yml`
   - Update network references (Mumbai → Polygon)
   - Increase reward amounts if desired
   - Test thoroughly before enabling

4. **Monitor Closely**:
   - Watch first 10 production transactions
   - Verify gas costs are acceptable
   - Monitor for any errors
   - Keep wallet funded

### Monitoring and Alerts

Consider setting up:

- GitHub Actions notifications in Slack/Discord
- Wallet balance alerts (below threshold)
- Failed workflow notifications
- Monthly spend reports (OpenAI, gas fees)

---

## Support and Resources

### Documentation
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [Polygon Developer Docs](https://docs.polygon.technology/)
- [Ethers.js Documentation](https://docs.ethers.org/v6/)

### Getting Help

- **Workflow Issues**: Check GitHub Actions logs first
- **Contract Issues**: Review on PolygonScan, check events
- **Security Concerns**: Report immediately to security team
- **Feature Requests**: Open issue in repository

---

## Changelog

### Phase 2.0 (Current)
- Initial deployment of three core workflows
- AI-powered PR assistant with OpenAI integration
- Testnet reward allocation system
- Bidirectional repository synchronization
- Comprehensive documentation and setup guide

---

## License

This deployment guide and associated workflows are part of the Scrollverse Commerce project and subject to the project license.

---

**Last Updated**: December 2025  
**Version**: 2.0.0  
**Status**: Pilot Deployment (Staging)
