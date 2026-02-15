# Tanishq Mahra - Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and Vite.

## Features

- 🎨 Dark/Light theme support with pitch black dark mode
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- ♿ Accessibility compliant (WCAG AA)
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS with CSS Variables

## Project Structure

```
src/
├── components/     # React components
├── context/        # React context providers
├── data/          # Static portfolio data
├── hooks/         # Custom React hooks
├── styles/        # Global styles and animations
├── types/         # TypeScript type definitions
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The project follows a component-based architecture with:

- **Theme Management:** Context-based theme switching with localStorage persistence
- **Animation System:** Intersection Observer-based animations with reduced motion support
- **Responsive Design:** Mobile-first approach with breakpoints at 768px and 1024px
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation, and color contrast compliance

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
