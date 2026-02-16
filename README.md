# Medavie Recipe Website

A recipe search application built with Vue 3 and the Spoonacular API. Search for recipes, filter by cuisine, and view detailed recipe information including ingredients and cooking steps.

View live on netlify:
https://tubular-blancmange-cd14e8.netlify.app/

## Features

- **Recipe Search** — Search recipes by keyword with paginated results (5 per page)
- **Cuisine Filtering** — Filter results by 25 cuisine styles (Italian, Mexican, Thai, etc.)
- **Recipe Detail Pages** — View full recipe info: image, servings, prep time, health labels, ingredients with measurements, and step-by-step cooking instructions
- **Ingredient Checklist** — Check off ingredients as you gather them
- **Skeleton Loading** — Animated placeholder UI while content loads
- **Responsive Layout** — Horizontal recipe cards on desktop, stacked on mobile
- **Keyboard Accessible** — Focus-visible states, semantic HTML, ARIA labels, screen reader announcements for search results and loading states

## Tech Stack

- **Vue 3** with Composition API (`<script setup>`)
- **Vue Router** with lazy-loaded routes and `KeepAlive` for preserving search state
- **Tailwind CSS v4** with CSS custom properties for theming
- **Spoonacular API** for recipe data

## Project Setup

```sh
pnpm install
```

Create a `.env` file in the project root:

```
VITE_SPOONACULAR_API_KEY=your_api_key_here
```

### Development

```sh
pnpm dev
```

### Production Build

```sh
pnpm build
```

### Lint

```sh
pnpm lint
```
