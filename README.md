# Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my experience as a full-stack software engineer with expertise in React, Next.js, Node.js, and various other technologies.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Smooth scrolling navigation
- 📱 Fully responsive for all devices
- 🌙 Dark mode support (via Tailwind)
- 🚀 Optimized for performance
- 📄 All sections from resume included:
  - Hero section
  - About/Career Summary
  - Work Experience
  - Technical Skills
  - Projects/Applications
  - Education
  - Certifications
  - Contact/Footer

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sj-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

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

Follow the prompts to complete the deployment.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/sj-portfolio)

## Customization

### Update Personal Information

1. **Contact Links**: Update social media and email links in:
   - `components/Hero.tsx` (line ~40-60)
   - `components/Footer.tsx` (line ~20-40)

2. **Resume Data**: Update experience, skills, projects, etc. in:
   - `components/Experience.tsx`
   - `components/Skills.tsx`
   - `components/Projects.tsx`
   - `components/Education.tsx`
   - `components/Certifications.tsx`

3. **Metadata**: Update site metadata in `app/layout.tsx`

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Project Structure

```
sj-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please reach out through the contact links in the portfolio.

