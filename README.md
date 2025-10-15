# MULTIVANTAGE - Professional Corporation Website

A modern, responsive website for MULTIVANTAGE, a leading professional corporation specializing in IT & AI services, financial advisory, trading, and comprehensive business solutions across multiple industries.

## Features

- ✨ Modern, beautiful design with gradient themes
- 📱 Fully responsive for all devices
- 🎨 Smooth animations and transitions
- 📧 Contact form 
- 🚀 Optimized for performance
- 🔍 SEO friendly

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Inter (body)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multivantage-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   └── main.tsx       # App entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Customization

### Colors
The website uses a custom orange-green gradient theme. Update colors in:
- `tailwind.config.js` - Color palette
- `src/index.css` - CSS custom properties

### Content
Update company information in:
- `index.html` - Meta tags and title
- Component files - Text content and descriptions

### Contact Information
Update contact details in:
- `src/components/Contact.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

## Performance

- Optimized bundle splitting
- Lazy loading of components
- Compressed images
- Minified CSS and JS
- Fast loading fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 MULTIVANTAGE. All Rights Reserved.