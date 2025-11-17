# Nick's Auto Repair Website

A modern, responsive website for Nick's Auto Repair in Boulder, CO. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI**: Clean, professional design with dark blue and orange color scheme
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessible**: ARIA labels and keyboard navigation support

## Pages

- **Home**: Landing page with hero section, about section, services preview, and contact information
- **Services**: Complete list of automotive services offered
- **About Us**: Information about the business, history, and why customers trust Nick's Auto Repair
- **Contact Us**: Contact form and business information

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about-us/          # About page
│   └── contact-us/        # Contact page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Footer.tsx         # Footer component
│   ├── ServicesGrid.tsx   # Services grid
│   ├── AboutSection.tsx   # About section
│   ├── ContactSection.tsx # Contact section
│   └── CTA.tsx            # Call-to-action banner
└── public/                # Static assets
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:
- Dark Blue: `#1A365D`
- Orange: `#FF8C00`
- Light Blue: `#F0F7FF`
- Text Gray: `#4A5568`

### Content

Update business information in:
- `components/Header.tsx` - Phone number and navigation
- `components/Footer.tsx` - Contact information and links
- Individual page components for page-specific content

## Deployment

This site can be deployed to:
- **Vercel** (recommended): Connect your GitHub repository
- **Netlify**: Connect your repository or use the CLI
- **Any static hosting**: Run `npm run build` and deploy the `out` directory

## License

All rights reserved - Nick's Auto Repair
