# Democratic Containment - Next.js Website

A Next.js website for the Democratic Containment analytical framework examining how entrenched elite actors capture democratic institutions in Nigeria.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 📦 Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy
   - Link to existing project or create new one
   - Confirm settings

### Option 3: Deploy via Drag & Drop

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload:**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the `out` folder to Vercel dashboard

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2.3
- **React:** 18.3.1
- **TypeScript:** 5.x
- **Fonts:** DM Sans (body), Fraunces (headings)
- **Export:** Static site generation

## 📁 Project Structure

```
democratic-containment-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   ├── ClientScripts.tsx   # Client-side JavaScript
│   └── globals.css         # Global styles
├── public/
│   └── report-cover.png    # Report cover image
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Features

- **Mobile-First Design:** Fully responsive with optimized mobile navigation
- **Premium UI:** Grain texture overlays, glassmorphism effects, gold accents
- **Interactive Navigation:** Smooth scrolling, page transitions
- **Email Sharing:** Built-in invite system for sharing the report
- **Static Export:** Optimized for fast loading on Vercel/Netlify/etc.

## 📝 Content Sections

1. **Hero Section:** Main call-to-action and framework introduction
2. **New Framework Section:** "Why Your Efforts Struggle" - powerful reframe
3. **Master Power Section:** 10 million organized voters concept
4. **Stakeholder Collaboration:** Partnership opportunities
5. **Audiences Grid:** Targeted content for different reader types
6. **Key Findings Pages:** Deep dive into democratic containment
7. **Download Section:** Report access with cover preview

## 🔧 Configuration

### Environment Variables

No environment variables required for basic deployment.

### Custom Domain

After deploying to Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## 📄 License

© 2025 Mandate 4. All rights reserved.

## 🤝 Support

For questions or support, contact Mandate 4 through the website contact form.

---

**Built with ❤️ for democracy in Nigeria**
