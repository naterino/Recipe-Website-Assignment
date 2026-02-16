# Medavie Recipe Website

A recipe search application built with Vue 3 and the Spoonacular API. Search for recipes, filter by cuisine, and view detailed recipe information including ingredients and cooking steps.

## Features

- **Recipe Search** — Search recipes by keyword with paginated results (5 per page)
- **Cuisine Filtering** — Filter results by 25 cuisine styles (Italian, Mexican, Thai, etc.)
- **Recipe Detail Pages** — View full recipe info: image, servings, prep time, health labels, ingredients with measurements, and step-by-step cooking instructions
- **Ingredient Checklist** — Check off ingredients as you gather them
- **Shareable URLs** — Search state (query, cuisine, page) syncs to URL query params for bookmarking and sharing
- **Skeleton Loading** — Animated placeholder UI while content loads
- **Responsive Layout** — Horizontal recipe cards on desktop, stacked on mobile
- **Keyboard Accessible** — Focus-visible states, semantic HTML, ARIA labels, screen reader announcements for search results and loading states

## Tech Stack

- **Vue 3** with Composition API (`<script setup>`)
- **Vue Router** with lazy-loaded routes and `KeepAlive` for preserving search state
- **Tailwind CSS v4** with CSS custom properties for theming
- **Vite** for build tooling
- **Spoonacular API** for recipe data

## Architecture Decisions

- **Composables for business logic** — `useRecipeSearch` and `useRecipeDetail` encapsulate API calls, state management, and URL sync. Components stay focused on presentation.
- **Centralized API service** — All Spoonacular requests go through `src/services/api.js` with a shared `request()` function handling URL construction and auth headers.
- **`@layer base` for global styles** — Global typography and element styles are wrapped in Tailwind's `@layer base` so utility classes can always override them without `!important`.
- **`@utility container`** — Custom Tailwind v4 utility for consistent max-width and padding across layout sections.
- **`stripLinks` utility** — Removes `<a>` tags from API HTML while preserving other formatting (bold, italic). Used in recipe cards where links would conflict with the overlay navigation link.
- **`analyzedInstructions` over `instructions`** — The structured JSON from the API provides consistent step rendering vs. the raw HTML `instructions` field which varies between recipes.
- **`KeepAlive` on HomePage** — Preserves search results and scroll position when navigating to a recipe detail and back.

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
