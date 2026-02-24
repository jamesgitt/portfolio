# Portfolio - Bun + React + TypeScript + shadcn/ui

A modern, one-page portfolio built with Bun, React, TypeScript, and shadcn/ui components. Features a sticky navigation bar, introduction section, skills carousel, projects showcase, and contact form.

## Tech Stack

- **Bun** - Runtime and package manager with built-in bundler
- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - High-quality React components
- **Embla Carousel** - Skills carousel component

## Features

- Sticky navigation bar with smooth scrolling
- Introduction section with profile image and bio
- Interactive skills carousel with navigation controls
- Projects showcase with descriptions and links
- Contact form with validation and social media links
- Custom maroon, cream, and black color scheme
- Fully responsive design
- Dark mode support

## Installation

Ensure you have [Bun](https://bun.sh) installed on your system.

```bash
# Install dependencies
bun install
```

## Development

```bash
# Start development server with hot reload
bun run dev
```

The dev server runs on `http://localhost:3000` by default.

## Building

```bash
# Build for production
bun run build

# The bundled output will be in the dist/ directory
```

## Deployment

The `dist/` directory contains the bundled application ready for deployment. You can deploy it to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drop the dist folder or connect via Git
- **Traditional hosting**: Upload the dist folder to your server

## Project Structure

```
src/
├── components/
│   ├── navigation-bar.tsx          # Sticky navigation
│   ├── introduction-section.tsx    # About section with image
│   ├── skills-section.tsx          # Skills carousel
│   ├── projects-section.tsx        # Projects showcase
│   └── contacts-section.tsx        # Contact form & links
├── lib/
│   └── utils.ts                    # Utility functions
├── App.tsx                         # Main app component
├── main.tsx                        # React entry point
└── index.css                       # Tailwind CSS styles
```

## Customization

### Colors

Edit the color variables in `src/index.css`:

```css
:root {
  --background: oklch(0.98 0.002 70);    /* Cream */
  --primary: oklch(0.35 0.15 25);         /* Maroon */
  --accent: oklch(0.15 0 0);              /* Black */
}
```

### Content

Update the portfolio content in each component file:
- `introduction-section.tsx` - Your bio and introduction
- `skills-section.tsx` - Your skills and categories
- `projects-section.tsx` - Your projects and links
- `contacts-section.tsx` - Contact information and social links

## Configuration

### bunfig.toml

The `bunfig.toml` file contains Bun-specific configuration:

```toml
[dev]
port = 3000
reload = true

[build]
outdir = "dist"
```

Modify these settings to customize the dev server behavior.

## License

MIT
