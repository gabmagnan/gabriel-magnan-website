# Gabriel Magnan's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](/public/assets/profile_picture.webp)

## Features

- 🌓 Dark mode by default
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🔄 Smooth page transitions and animations with Framer Motion
- 🎯 SEO optimized with Next.js metadata
- 📄 Dynamic content sections (About, Portfolio, Resume, Contact)
- 🎨 Beautiful, production-ready design
- 🚀 Static site export for optimal performance

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: JetBrains Mono
- **Deployment**: Static Export

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The static output will be generated in the `out` directory.

## Project Structure

```
├── app/                # Next.js 15 app directory
│   ├── contact/       # Contact page
│   ├── portfolio/     # Portfolio page
│   ├── resume/        # Resume page
│   └── layout.tsx     # Root layout
├── components/        # React components
│   ├── ui/           # UI components
│   ├── navigation.tsx # Navigation component
│   └── footer.tsx    # Footer component
├── lib/              # Utility functions
├── public/           # Static assets
└── styles/           # Global styles
```

## Customization

1. **Personal Information**: Update your personal information in `src/strings.json`
2. **Theme**: Modify the theme in `app/globals.css` and `tailwind.config.ts`
3. **Projects**: Add your projects in the `portfolio/page.tsx` file
4. **Resume**: Update your experience and education in `resume/page.tsx`

## Performance

- Optimized images with Next.js Image component
- Static site generation for fast page loads
- Responsive images with appropriate sizes
- Efficient animations with Framer Motion

## SEO

- Meta tags for social sharing
- Structured data with Schema.org
- Sitemap generation
- Robots.txt configuration

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Gabriel Magnan - [gabriel@magnan.com](mailto:gabriel@magnan.com)

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
