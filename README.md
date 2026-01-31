# Nonthachai Phosri Portfolio

Personal portfolio website built with Nuxt 3, featuring a bilingual (EN/TH) UI, responsive sections for Home, Skills, Projects, and About, plus contact links and a downloadable CV.

## Tech Stack

- Nuxt 3 + Vue 3
- Vuetify + Tailwind CSS
- vue-i18n for localization (EN/TH)
- animate.css for subtle motion

## Requirements

- Node.js 20.11.0 (see `.node-version` / `.nvmrc`)

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Scripts

- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run preview` - preview production build
- `npm run generate` - generate static output
- `npm run format` - run Prettier

## Project Structure

- `pages/index.vue` - main single-page layout (Home, Skills, Projects, About)
- `components/` - section components and layout pieces
- `locales/` - i18n message files (EN/TH)
- `assets/` - images, styles, and CV PDF

## Deployment

Netlify is configured in `netlify.toml` to run `npm run build` and publish `dist`.
