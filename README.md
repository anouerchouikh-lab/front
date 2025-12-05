# Nuit de l'Info - React Glassomorphic Brutalism Prototype

A high-performance, instantly themeable React prototype designed for the "Nuit de l'Info" hackathon. This starter kit combines the raw aesthetic of Neo-Brutalism with the modern feel of Glassmorphism.

## 🚀 Quick Start

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the dev server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Customization

### Theming
The entire design system is driven by CSS variables and a JSON configuration.
Edit `src/config/theme.json` to instantly change the color palette and typography.

Key colors:
- `primary`: Main brand color (borders, buttons)
- `accent`: Highlight color (gradients, hovers)
- `surface`: Glass background color

### Content
- **Pages**: Located in `src/pages/`.
- **Components**: Located in `src/components/`.
- **Navigation**: Update `src/components/layout/Navbar.tsx`.

## 🧩 Component Library

- **Button**: `variant="solid-brutal" | "glass" | "outline"`
- **Card**: `variant="glass" | "brutal"`
- **Input**: Styled with floating labels and validation states.
- **Hero**: Animated landing section.
- **CardGrid**: Responsive grid for listings.

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion
- **State**: Zustand
- **Icons**: Lucide React

## 📱 Mobile First
The layout is fully responsive and optimized for all device sizes.
