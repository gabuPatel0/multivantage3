# MULTIVANTAGE - Professional Corporation Website

A modern, responsive website for MULTIVANTAGE, a leading professional corporation specializing in IT & AI services, financial advisory, trading, and comprehensive business solutions across multiple industries.

## Features

- ✨ Modern, beautiful design with gradient themes
- 📱 Fully responsive for all devices
- 🎨 Smooth animations and transitions
- 📧 Contact form with email notifications
- 🚀 Optimized for performance
- 🔍 SEO friendly

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Deployment**: Vercel

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

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Deployment to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard**
   - Go to your project settings
   - Add `RESEND_API_KEY` with your Resend API key

## Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up for a free Resend account
2. Get your API key from the dashboard
3. Add the API key to your environment variables
4. Update the email addresses in `api/contact.ts` if needed

## Project Structure

```
├── api/                    # Vercel serverless functions
│   └── contact.ts         # Contact form API endpoint
├── src/
│   └── react-app/
│       ├── components/    # React components
│       ├── pages/         # Page components
│       └── main.tsx       # App entry point
├── public/                # Static assets
└── index.html            # HTML template
```

## Customization

### Colors
The website uses a custom orange-green gradient theme. Update colors in:
- `tailwind.config.js` - Color palette
- `src/react-app/index.css` - CSS custom properties

### Content
Update company information in:
- `index.html` - Meta tags and title
- Component files - Text content and descriptions

### Contact Information
Update contact details in:
- `src/react-app/components/Contact.tsx`
- `src/react-app/components/Header.tsx`
- `src/react-app/components/Footer.tsx`

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
