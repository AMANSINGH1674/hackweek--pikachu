# ⚡ Pure CSS Pikachu

A stunning recreation of Pikachu, the beloved Electric Mouse Pokémon, built entirely with HTML and CSS. No images, SVGs, or external assets required!

https://hackweek-pikachu.netlify.app/
<img width="1800" alt="Screenshot 2025-06-28 at 6 24 13 PM" src="https://github.com/user-attachments/assets/6940ffd1-89e7-407b-88fb-5e0346651782" />



## ✨ Features

- **100% Pure CSS**: Created using only HTML and CSS - no images or SVG files
- **Responsive Design**: Looks great on all screen sizes
- **Smooth Animations**: 
  - Gentle floating animation for Pikachu
  - Electric glow effects on cheeks
  - Animated Pokéball with rotation
  - Electric background with lightning bolts and sparks
- **Electric Theme**: Dynamic yellow/amber background with animated electric effects
- **Production Ready**: Fully optimized and deployed

## 🎨 Design Details

### Character Features
- Authentic Pikachu proportions and colors
- Detailed facial features including eyes, nose, and mouth
- Signature red cheeks with electric glow animation
- Pointed ears with black tips
- Expressive eye highlights

### Background Effects
- Electric field with animated lightning bolts
- Floating electric orbs and sparks
- Gradient yellow/amber background
- Animated Pokéball floating in the corner

## 🚀 Live Demo

Visit the live demo: [https://celebrated-cranachan-7b05e6.netlify.app](https://celebrated-cranachan-7b05e6.netlify.app)

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Netlify** - Deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pikachu-css
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify
The project is configured for easy deployment to Netlify. Simply connect your repository to Netlify and it will automatically build and deploy.

## 📁 Project Structure

```
src/
├── App.tsx          # Main component with Pikachu and animations
├── main.tsx         # React entry point
├── index.css        # Tailwind CSS imports
└── vite-env.d.ts    # Vite type definitions

public/
└── vite.svg         # Vite favicon

config files:
├── package.json     # Dependencies and scripts
├── vite.config.ts   # Vite configuration
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json    # TypeScript configuration
└── README.md        # This file
```

## 🎯 CSS Techniques Used

- **CSS Custom Properties**: For consistent color theming
- **Advanced Border Radius**: Creating organic shapes
- **CSS Transforms**: Positioning and rotating elements
- **Keyframe Animations**: Smooth floating and electric effects
- **Pseudo-elements**: Adding details without extra HTML
- **Z-index Layering**: Proper element stacking
- **CSS Gradients**: Background effects
- **Box Shadows**: Depth and glow effects

## 🎨 Color Palette

```css
--pikachu-yellow: #fed823
--pikachu-red: #ff0000
--pikachu-dark-brown: #231815
--bordercolor: #0A0A0A
```

Background gradients use yellow-200 to amber-400 for the electric theme.

## 🔧 Customization

### Changing Colors
Modify the CSS custom properties in the `<style>` tag within `App.tsx`:

```css
:root {
  --pikachu-yellow: #your-color;
  --pikachu-red: #your-color;
  /* ... other colors */
}
```

### Adjusting Animations
Animation durations and effects can be modified in the keyframe definitions:

```css
@keyframes gentle-sway {
  /* Modify timing and transforms */
}
```

### Background Effects
Add or remove electric effects by modifying the background elements in the JSX.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Modern browsers with CSS3 support required for animations and advanced styling.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the original Pokémon character design
- Built as a demonstration of advanced CSS techniques
- Created for educational and artistic purposes

## 📞 Contact

For questions or suggestions, please open an issue on GitHub.

---

**⚡ Gotta style 'em all! ⚡**
