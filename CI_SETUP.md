# CI/CD Pipeline Setup Guide

## 📋 Overview

This repository includes automated CI/CD pipelines that ensure code quality and build integrity before merging.

## 🚀 Available Workflows

### 1. **Full CI Pipeline** (`.github/workflows/ci.yml`)

Comprehensive checks including build, lint, and TypeScript validation.

**Triggers:**

- Push to: `main`, `SEO`, `develop`, `feature/**`
- Pull requests to: `main`, `SEO`, `develop`

**Jobs:**

- ✅ Build Check (Node 18.x & 20.x)
- ✅ Lint Check
- ✅ TypeScript Check
- ✅ Status Summary

### 2. **Simple Build Check** (`.github/workflows/build-check.yml`)

Lightweight build validation only.

**Triggers:**

- Push to: `main`, `SEO`
- Pull requests to: `main`

**Jobs:**

- ✅ Build Check (Node 20.x)

## 🔒 Branch Protection Setup

To enforce build checks before merging, configure branch protection rules:

### Step 1: Go to Repository Settings

```
GitHub Repository → Settings → Branches → Branch protection rules
```

### Step 2: Add Rule for `main` Branch

**Required settings:**

- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging

**Status checks to require:**

- `Build Check` (from build-check.yml)
- `Build Check / build` (from ci.yml)
- `TypeScript Check` (from ci.yml)
- `All Checks Passed` (from ci.yml)

**Optional (Recommended):**

- ✅ Require a pull request before merging
- ✅ Require approvals: 1
- ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require linear history

### Step 3: Add Rule for `SEO` Branch

Apply same settings as `main` branch.

### Step 4: Add Rule for `develop` Branch (if using)

Apply same settings or adjust based on your workflow.

## 🎯 How It Works

### On Push to Branch

```
1. Developer pushes code
2. GitHub Actions triggered
3. Workflow runs:
   - Install dependencies
   - Run npm run build
4. If build succeeds ✅
   - Push is accepted
   - Code is on branch
5. If build fails ❌
   - Workflow fails
   - Developer notified
   - Must fix and push again
```

### On Pull Request

```
1. Developer opens PR
2. GitHub Actions triggered
3. Workflow runs all checks
4. Status checks appear on PR
5. If all pass ✅
   - "Merge" button enabled
   - Safe to merge
6. If any fail ❌
   - "Merge" button disabled
   - Must fix before merging
```

## 📊 Workflow Status

View workflow status:

- **Actions Tab**: `https://github.com/PariharAditya/OnlyScrews/actions`
- **PR Page**: Status checks at bottom
- **Branch Protection**: Settings → Branches

## 🔧 Customization

### Change Triggers

Edit `.github/workflows/ci.yml`:

```yaml
on:
  push:
    branches:
      - main
      - your-branch
  pull_request:
    branches:
      - main
```

### Add More Node Versions

```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x]
```

### Add Environment Variables

```yaml
- name: Run build
  run: npm run build
  env:
    CI: true
    DATABASE_URL: ${{ secrets.DATABASE_URL }}
    NEXT_PUBLIC_API_URL: ${{ secrets.API_URL }}
```

### Skip CI for Specific Commits

Add to commit message:

```bash
git commit -m "docs: update README [skip ci]"
```

## 🎨 Workflow Features

### 1. **Caching**

- Caches `node_modules` and `.next/cache`
- Speeds up subsequent runs
- Reduces build time by 50-70%

### 2. **Matrix Testing**

- Tests on multiple Node versions
- Ensures compatibility
- Catches version-specific issues

### 3. **Parallel Jobs**

- Build, Lint, and TypeScript run simultaneously
- Faster feedback (3-5 minutes total)
- Efficient resource usage

### 4. **Status Reporting**

- Clear success/failure messages
- Shows branch and commit info
- Easy to diagnose issues

## 📝 Local Testing

Before pushing, test locally:

```bash
# Install dependencies
npm ci

# Run build
npm run build

# Run lint
npm run lint

# Run type check
npx tsc --noEmit
```

## 🚨 Troubleshooting

### Build Fails in CI but Works Locally

**Check:**

1. Environment variables missing in CI
2. Different Node versions
3. Platform-specific dependencies
4. Missing `.env` file (add to GitHub Secrets)

**Fix:**

```yaml
env:
  DATABASE_URL: ${{ secrets.DATABASE_URL }}
  NEXTAUTH_SECRET: ${{ secrets.NEXTAUTH_SECRET }}
```

### Workflow Not Triggering

**Check:**

1. File location: Must be in `.github/workflows/`
2. File extension: Must be `.yml` or `.yaml`
3. Syntax errors: Use YAML validator
4. Branch protection: Ensure enabled

### Status Checks Not Required

**Fix:**

1. Go to: Settings → Branches → Edit rule
2. Check "Require status checks to pass"
3. Search for workflow names
4. Select all required checks
5. Save changes

## 🔐 Secrets Management

For sensitive data, use GitHub Secrets:

```
Settings → Secrets and variables → Actions → New repository secret
```

**Common secrets:**

- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

Access in workflow:

```yaml
env:
  DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

## 📈 Best Practices

1. **Always run locally first**

   - Saves CI minutes
   - Faster iteration

2. **Use `npm ci` instead of `npm install`**

   - Faster
   - More reliable
   - Uses package-lock.json exactly

3. **Cache dependencies**

   - Reduces build time
   - Saves bandwidth

4. **Keep workflows simple**

   - Easier to debug
   - Faster execution

5. **Monitor workflow usage**
   - GitHub free tier: 2,000 minutes/month
   - Optimize for efficiency

## 🎯 Workflow Execution Time

| Workflow             | Avg Time | Description                |
| -------------------- | -------- | -------------------------- |
| Build Check (Simple) | 2-3 min  | Basic build validation     |
| Full CI Pipeline     | 4-6 min  | Complete checks (parallel) |
| With cache hit       | 1-2 min  | Using cached dependencies  |

## 📚 Additional Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)

## ✅ Quick Setup Checklist

- [ ] Commit workflow files to repository
- [ ] Push to GitHub
- [ ] Go to Actions tab to verify workflows appear
- [ ] Make a test commit to trigger workflow
- [ ] Verify workflow runs successfully
- [ ] Enable branch protection on `main`
- [ ] Add required status checks
- [ ] Test with a pull request
- [ ] Verify merge button behavior

---

**Status**: ✅ Ready to use

**Last Updated**: December 9, 2025
