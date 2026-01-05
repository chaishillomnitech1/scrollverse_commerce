# Branch Protection Recommendations 🔒

**ALL IS LOVE. ALL IS LAW. ALL IS FLUID. KUN FAYAKŪN!** 🕋♾️✨

This document provides recommended branch protection rules for Scrollverse Commerce repository.

## 🎯 Overview

Branch protection rules help maintain code quality and prevent accidental changes to important branches.

## 🛡️ Main Branch Protection

### Recommended Settings for `main` Branch

Configure these settings in: **Settings → Branches → Branch protection rules**

#### Required Reviews

- ✅ **Require pull request reviews before merging**
  - Required approving reviews: **1**
  - Dismiss stale pull request approvals when new commits are pushed: **Yes**
  - Require review from Code Owners: **Yes** (@chaishillomnitech1)
  - Restrict who can dismiss pull request reviews: **Yes** (Repository admins only)

#### Status Checks

- ✅ **Require status checks to pass before merging**
  - Require branches to be up to date before merging: **Yes**
  - Required status checks:
    - `Install Dependencies and Run Tests (18.x)`
    - `Install Dependencies and Run Tests (20.x)`
    - `Build Application (18.x)`
    - `Build Application (20.x)`

#### Additional Protections

- ✅ **Require conversation resolution before merging**: Yes
- ✅ **Require signed commits**: Yes (recommended for security)
- ✅ **Require linear history**: Yes (prevents merge commits)
- ✅ **Include administrators**: No (allows admins to bypass in emergencies)
- ❌ **Allow force pushes**: No
- ❌ **Allow deletions**: No

#### Merge Options

- ✅ **Allow squash merging**: Yes (recommended)
- ❌ **Allow merge commits**: No
- ❌ **Allow rebase merging**: No

## 🌱 Develop Branch Protection (Optional)

If using a `develop` branch for integration:

### Recommended Settings for `develop` Branch

- ✅ **Require pull request reviews before merging**: 1 approval
- ✅ **Require status checks to pass before merging**: Same as main
- ✅ **Require conversation resolution before merging**: Yes
- ❌ **Require review from Code Owners**: No (less strict than main)
- ✅ **Require branches to be up to date**: Yes

## 📋 Implementation Checklist

To implement these protections:

### Step 1: Navigate to Settings

```
Repository → Settings → Branches → Add branch protection rule
```

### Step 2: Configure Main Branch

- [ ] Add rule for `main` branch
- [ ] Enable "Require pull request reviews before merging"
- [ ] Set required approving reviews to 1
- [ ] Enable "Require review from Code Owners"
- [ ] Enable "Dismiss stale pull request approvals when new commits are pushed"
- [ ] Enable "Require status checks to pass before merging"
- [ ] Add all CI/Build workflows as required checks
- [ ] Enable "Require branches to be up to date before merging"
- [ ] Enable "Require conversation resolution before merging"
- [ ] Disable "Allow force pushes"
- [ ] Disable "Allow deletions"

### Step 3: Configure Merge Options

- [ ] Navigate to Settings → General → Pull Requests
- [ ] Enable "Allow squash merging"
- [ ] Disable "Allow merge commits"
- [ ] Disable "Allow rebase merging"
- [ ] Enable "Automatically delete head branches"

### Step 4: Additional Security (Optional)

- [ ] Navigate to Settings → General → Security
- [ ] Enable "Private vulnerability reporting"
- [ ] Enable Dependabot alerts
- [ ] Enable Dependabot security updates
- [ ] Enable CodeQL scanning

## 🔐 Required Secrets for CI/CD

Configure these secrets in: **Settings → Secrets and variables → Actions**

### Repository Secrets

- [ ] `SHOPIFY_STORE_DOMAIN` - Your Shopify store domain
- [ ] `SHOPIFY_STOREFRONT_ACCESS_TOKEN` - Storefront API token
- [ ] `SHOPIFY_REVALIDATION_SECRET` - Secret for webhook validation
- [ ] `COMPANY_NAME` - Your company name
- [ ] `SITE_NAME` - Your site name
- [ ] `VERCEL_TOKEN` - Vercel deployment token (for deploy workflow)
- [ ] `VERCEL_ORG_ID` - Vercel organization ID (for deploy workflow)
- [ ] `VERCEL_PROJECT_ID` - Vercel project ID (for deploy workflow)

## 🎯 Rulesets (GitHub Rulesets - New Feature)

For enhanced control, consider using GitHub Rulesets:

### Create a Ruleset for Main

1. Go to **Settings → Rules → Rulesets → New ruleset**
2. Name: "Main Branch Protection"
3. Enforcement status: Active
4. Target branches: `main`
5. Rules:
   - Require pull request
   - Require approvals (1)
   - Require status checks
   - Block force pushes
   - Restrict deletions

### Benefits of Rulesets

- More granular control
- Better visibility
- Easier to manage multiple branches
- JSON export/import support

## 📊 Monitoring and Compliance

### Regular Checks

- [ ] Weekly: Review open PRs
- [ ] Monthly: Audit branch protection settings
- [ ] Quarterly: Review and update required status checks
- [ ] As needed: Update code owners

### Metrics to Track

- Average PR review time
- Number of bypassed checks
- Failed CI/CD runs
- Security vulnerability count

## 🚨 Emergency Procedures

### Hotfix Process

For critical production issues:

1. Create hotfix branch from `main`
2. Make minimal fix
3. Fast-track review with code owner
4. Admin can bypass if absolutely necessary (logged)
5. Merge to `main`
6. Create post-mortem issue

### When to Bypass Protection

Only in extreme cases:

- Critical security vulnerability
- Production down scenario
- Data loss prevention

**Always document why protection was bypassed.**

## 📚 Best Practices

### For Contributors

- ✅ Keep PRs small and focused
- ✅ Ensure CI passes before requesting review
- ✅ Respond promptly to review comments
- ✅ Keep branch up to date with main
- ✅ Resolve all conversations

### For Reviewers

- ✅ Review within 24-48 hours
- ✅ Provide constructive feedback
- ✅ Test changes locally when needed
- ✅ Check for security issues
- ✅ Verify documentation updates

### For Admins

- ✅ Document any bypass actions
- ✅ Regularly update protection rules
- ✅ Monitor security alerts
- ✅ Keep secrets up to date
- ✅ Review and update CODEOWNERS

## 🔄 Updating Branch Protection

When to update rules:

- **New CI/CD workflows**: Add to required checks
- **Team growth**: Update reviewer requirements
- **Security incidents**: Strengthen protections
- **Workflow changes**: Adjust merge strategies

## 📖 References

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [GitHub Rulesets Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets)
- [Code Owners Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)

## ✅ Verification

After implementing branch protection, verify:

- [ ] Cannot push directly to main
- [ ] Cannot merge without approval
- [ ] CI must pass before merge
- [ ] Cannot delete protected branches
- [ ] Code owners automatically tagged for review

### Test Commands

```bash
# This should fail
git push origin main

# This should fail
git push origin :main

# This should succeed only with proper PR
git push origin feature/test-branch
# Then create PR through GitHub UI
```

## 🎉 Summary

Implementing these branch protection rules will:

- ✨ Improve code quality
- 🔒 Enhance security
- 🤝 Encourage collaboration
- 📈 Reduce bugs in production
- 🛡️ Protect critical branches

---

**ALL IS LOVE. ALL IS LAW. ALL IS FLUID. KUN FAYAKŪN!** 🕋♾️✨

For questions about branch protection, contact @chaishillomnitech1
