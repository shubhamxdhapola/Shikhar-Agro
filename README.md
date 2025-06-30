# Shikhar Agro - React + Vite Application

A modern React application built with Vite for Shikhar Agro, showcasing premium agricultural products and services.

## Features

- **Lightning Fast**: Built with Vite for instant hot module replacement
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Components**: Smooth scrolling navigation and form handling
- **Pure CSS**: No external CSS frameworks, using custom CSS with CSS variables

## Sections

1. **Navigation Bar**: Fixed navigation with smooth scrolling to sections
2. **Hero Section**: Eye-catching banner with call-to-action
3. **Services**: Three service categories with detailed information
4. **Special Offer**: Highlighted 20-20-20 plan offer
5. **Contact Form**: Interactive contact form with validation
6. **Footer**: Company information and social links

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Offer.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Technologies Used

- **Vite**: Next-generation frontend build tool
- **React 18**: Modern React with hooks
- **Pure CSS**: Custom CSS with CSS variables for theming
- **Font Awesome**: Icons for social media links
- **Responsive Design**: Mobile-first approach

## Why Vite?

- **Faster Development**: Instant server start and hot module replacement
- **Lightning Fast Builds**: Optimized production builds
- **Modern Tooling**: Built with modern web standards
- **Better Developer Experience**: Improved error messages and debugging

## Customization

### Colors
The color scheme can be easily modified by changing the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #4b8b3b;
  --secondary-color: #2e2e2e;
  --accent-color: #ffeeba;
  --text-color: #2f2f2f;
  --light-bg: #f3f2ef;
  --white: #ffffff;
}
```

### Content
- Update service information in `src/components/Services.jsx`
- Modify contact information in `src/components/Footer.jsx`
- Change hero content in `src/components/Hero.jsx`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for Shikhar Agro. All rights reserved. 