# Portfolio Website

A modern, responsive portfolio website built with React.js for OJT internship showcase.

## Features

- 🏠 **Home** - Hero section with introduction and skills preview
- 👤 **About** - Personal information, education, and interests
- 💼 **Projects** - Showcase of projects and work samples
- 📧 **Contact** - Contact form and social media links

## Technologies Used

- React 18
- React Router DOM
- Vite (Build Tool)
- Modern CSS with CSS Variables
- Responsive Design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`):
   - Update name in the hero section
   - Modify skills and descriptions

2. **About Page** (`src/pages/About.jsx`):
   - Update education details
   - Modify interests and hobbies
   - Add your personal information

3. **Projects Page** (`src/pages/Projects.jsx`):
   - Update the projects array with your actual projects
   - Add project links and details

4. **Contact Page** (`src/pages/Contact.jsx`):
   - Update email, phone, and location
   - Add your social media links
   - Connect the contact form to a backend service

### Styling

All CSS files use CSS variables defined in `src/index.css`. You can customize colors, fonts, and other design elements by modifying these variables.

## License

This project is open source and available for personal use.
