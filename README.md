# Koushik M — Portfolio Website

A modern, premium portfolio website for **Koushik M**, Co-Founder of [Grow AI Tech](https://growaitech.com).

Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body)

---

## Features

- Hero section with animated gradient heading and tech stack marquee
- About section with animated stats and profile card
- Experience section showcasing Grow AI Tech
- Projects showcase with filter system (Web / Mobile / All)
- Animated skills section with progress bars
- Contact form with validation
- Mouse glow effect
- Scroll progress indicator
- Loading screen animation
- Floating navbar with active section tracking
- Fully responsive (mobile-first)
- SEO optimized with Open Graph and structured data
- Fast page transitions

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/koushik-portfolio.git
cd koushik-portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```env
NEXT_PUBLIC_SITE_URL=https://koushikm.dev
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add environment variables in the Vercel dashboard
4. Deploy — Vercel auto-detects Next.js

```bash
# Or deploy via Vercel CLI
npm i -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
koushik-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata & SEO
│   └── page.tsx            # Main page
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── ScrollProgress.tsx
│   │   ├── MouseGlow.tsx
│   │   └── LoadingScreen.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── resume.pdf
├── .env.example
├── vercel.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Customization

### Update Personal Info

Edit the content in each section component under `components/sections/`.

### Add Your Resume

Place your `resume.pdf` in the `public/` folder.

### Update Contact

Replace the WhatsApp number (`919XXXXXXXXX`) in `ContactSection.tsx` and `Footer.tsx` with your actual number.

### Update Social Links

Update LinkedIn and GitHub URLs in `ContactSection.tsx` and `Footer.tsx`.

### Add Real Email

Integrate [EmailJS](https://emailjs.com), [Resend](https://resend.com), or [Formspree](https://formspree.io) in `ContactSection.tsx` for the contact form.

---

## SEO Configuration

Update the following in `app/layout.tsx`:

- `title` and `description`
- `openGraph.url` with your domain
- `verification.google` with your Search Console verification code
- Structured data (JSON-LD) with your actual URLs

---

## License

MIT — feel free to use and adapt for your own portfolio.

---

Built with precision by **Koushik M** · [growaitech.com](https://growaitech.com)
"# koushik_portfolio" 
