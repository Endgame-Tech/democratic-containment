# 🚀 Quick Deployment Guide

## Step 1: Extract the ZIP
Unzip `democratic-containment-nextjs.zip` to your desired location.

## Step 2: Push to GitHub

```bash
cd democratic-containment-nextjs

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Democratic Containment website"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Connect GitHub Repo (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. **Import** your GitHub repository
4. Vercel auto-detects Next.js
5. Click **"Deploy"**
6. Done! Your site is live in ~2 minutes

### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project
cd democratic-containment-nextjs

# Install dependencies first
npm install

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new? → Create new
# - Project name? → democratic-containment (or your choice)
# - Confirm settings
```

### Option C: Drag & Drop (No Git Required)

```bash
# Build the project first
cd democratic-containment-nextjs
npm install
npm run build

# Then:
# 1. Go to vercel.com
# 2. Drag the 'out' folder to the upload area
# 3. Done!
```

## Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `democratic-containment.org`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

## ✅ Checklist

- [ ] Unzipped the project
- [ ] Installed dependencies (`npm install`)
- [ ] Tested locally (`npm run dev`)
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] (Optional) Added custom domain

## 🐛 Troubleshooting

**Build fails?**
- Make sure you ran `npm install` first
- Check Node.js version (need v18 or higher)

**Images not showing?**
- Report cover is in `/public/report-cover.png`
- Logo is embedded as base64 in the code

**Functions not working?**
- Client-side JavaScript is in `ClientScripts.tsx`
- Make sure it's being imported in `page.tsx`

## 📞 Need Help?

Check the full README.md in the project root for detailed instructions.

---

**Deployment should take less than 5 minutes!** 🎉
