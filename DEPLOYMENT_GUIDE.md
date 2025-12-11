# Deployment Guide: Git to Vercel

This guide will walk you through deploying your portfolio to Vercel step by step.

## Prerequisites
- GitHub account (create one at https://github.com if you don't have it)
- Vercel account (create one at https://vercel.com if you don't have it)

## Step 1: Initialize Git Repository

1. Open your terminal in the project directory
2. Initialize Git:
   ```bash
   git init
   ```

## Step 2: Add All Files to Git

```bash
git add .
```

## Step 3: Create Your First Commit

```bash
git commit -m "Initial commit: Portfolio website"
```

## Step 4: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `sj-portfolio` (or any name you prefer)
5. Description: "Software Engineer Portfolio"
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

## Step 5: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/sj-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 6: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in (use GitHub to sign in for easier integration)
2. Click "Add New..." → "Project"
3. Import your GitHub repository:
   - Find `sj-portfolio` in the list
   - Click "Import"
4. Configure Project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `.next` (should auto-detect)
   - **Install Command**: `npm install` (should auto-detect)
5. Click "Deploy"
6. Wait for deployment (usually 1-2 minutes)
7. Your site will be live at: `https://sj-portfolio.vercel.app` (or similar)

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose default settings for most questions

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Step 7: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain if you have one

## Step 8: Environment Variables (If Needed)

If you add environment variables later:
1. Go to Vercel dashboard → Your project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## Updating Your Portfolio

After making changes:

1. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

2. Push to GitHub:
   ```bash
   git push
   ```

3. Vercel will automatically redeploy (if connected to GitHub)

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Ensure `npm run build` works locally first

### Missing Files
- Make sure all files are committed to Git
- Check `.gitignore` isn't excluding important files

### Deployment Issues
- Verify Next.js version compatibility
- Check Node.js version in Vercel settings (should be 18+)

## Quick Commands Reference

```bash
# Initialize Git
git init

# Add files
git add .

# Commit
git commit -m "Your message"

# Add remote (first time only)
git remote add origin https://github.com/YOUR_USERNAME/sj-portfolio.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Update message"
git push
```

## Your Live Portfolio URL

After deployment, your portfolio will be available at:
- `https://sj-portfolio.vercel.app` (or similar)
- You can customize this in Vercel settings

---

**Note**: Make sure your `resume.docx` file is in the `public` folder before deploying!

