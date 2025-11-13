# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A bilingual (English/Spanish) psychiatric services website built with React, Vite, and Tailwind CSS. The site provides information about Velez Psychiatric Services, including medication management and ketamine-assisted psychotherapy. Users can submit patient consultation requests and provider referrals through integrated forms.

## Development Commands

### Development Server
```bash
npm run dev
```
Starts Vite development server with HMR at http://localhost:5173

### Build
```bash
npm run build
```
Builds production-ready static files to `dist/` directory

### Lint
```bash
npm run lint
```
Runs ESLint on all .js and .jsx files

### Preview
```bash
npm run preview
```
Preview production build locally

### Deploy
```bash
npm run deploy
```
Builds and deploys to GitHub Pages (runs predeploy and gh-pages)

## Architecture

### Routing Strategy
- Uses **HashRouter** (not BrowserRouter) from `react-router-dom` configured in `src/main.jsx`
- This is critical for GitHub Pages deployment (homepage: "https://b-crites/vps2")
- Routes are defined in `src/App.jsx`: Home (/), Services, Insurance, Contact

### Internationalization (i18n)
- **Custom implementation** using React Context API, NOT i18next library (despite it being installed)
- `LanguageProvider` in `src/Components/LanguageProvider.jsx` manages language state (en/es)
- Translation objects are defined inline within each component that needs them
- Language toggle button in Header component switches between English and Spanish
- Pattern: Components define `translations` object with `en` and `es` keys, then access via `translations[language].key`

### Modal System
- Global modals rendered in `Header.jsx` using absolute positioning and z-index layering
- Two modals: PatientModal (patient consultation requests) and RefModal (provider referrals)
- Modal state managed in Header, controls body scroll overflow to prevent background scrolling
- Backdrop click closes modal

### Form Handling
- Uses Formspree.io for form submissions (axios POST requests)
- Patient form: `https://formspree.io/xeqbozql`
- Referral form: `https://formspree.io/moqovldl`
- Forms use controlled components pattern with useState for form data
- Note: ReferralForm has a bug on line 27 (`console.err` should be `console.error`)

### Styling
- Tailwind CSS for utility classes
- Custom CSS in `src/Css/` for specific components (Header.css, Home.css, App.css)
- Uses custom Tailwind color `teal` (defined in components, should be in tailwind.config.js)
- Form inputs use custom `.form__group`, `.form__field`, `.form__label` classes with floating label pattern

### Component Structure
- **Pages**: Top-level route components in `src/Pages/` (Home, Services, Insurance, Contact)
- **Components**: Reusable components in `src/Components/`
  - Header: Navigation, modals, language switcher
  - Footer: Site footer
  - PatientForm/ReferralForm: Form components used in modals and pages
  - ScrollToTop: Scrolls to top on route change
  - LanguageProvider: Context provider for i18n
  - About, Card, Butterfly: Content components

### Key Dependencies
- React 18.2 with React Router 6
- Vite 4 for build tooling
- Tailwind CSS for styling
- Axios for HTTP requests
- @formspree/react for form handling (installed but not actively used)
- i18next libraries (installed but not used - custom i18n implementation)

## Common Patterns

### Adding Translations
When adding text to components, define both English and Spanish:
```javascript
const translations = {
  en: { key: "English text" },
  es: { key: "Spanish text" }
};
const { language } = useLanguage();
// Use: translations[language].key
```

### Creating Forms
Follow the Formspree pattern with controlled components and axios POST. Use the `.form__group` CSS pattern for consistent styling.

### Navigation Links
Use `<Link>` from react-router-dom, not `<a href>`, for internal navigation to work with HashRouter.

## Deployment Notes
- Built for GitHub Pages deployment with HashRouter
- Base path configured as `"./"` in `vite.config.js`
- Deploy script uses gh-pages package to publish `dist/` folder
