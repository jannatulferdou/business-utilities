# D&A Business Utilities

A standalone Business Utilities page built with React, TypeScript and Vite. The reference design guides the colours, typography and imagery. The page contains the hero, three business energy service cards and FAQs, without the main website's header, footer, service-detail article or sidebar.

## Getting started

Use Node.js 22.12+ and npm. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Both `/` and `/business-utilities.html` show the page during development.

## Commands

| Command                | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | Start the development server with live updates     |
| `npm run typecheck`    | Check application and Vite configuration types     |
| `npm run build`        | Run TypeScript checks and create production output |
| `npm run preview`      | Preview the production build locally               |
| `npm run lint`         | Check TypeScript, JavaScript and React rules       |
| `npm run format`       | Format the source with Prettier                    |
| `npm run format:check` | Check formatting without editing files             |

## Project structure

- [src/App.tsx](src/App.tsx) composes the page sections.
- [src/components/](src/components/) contains the hero, energy service cards, FAQ and shared UI primitives.
- [src/data/site.ts](src/data/site.ts) holds typed service content, FAQ answers and the email contact destination.
- [src/styles/index.css](src/styles/index.css) contains design tokens, local fonts, component styles and responsive breakpoints.
- [public/images/](public/images/) and [public/fonts/](public/fonts/) contain local assets from the reference site and Google Fonts.

## Behaviour and accessibility

- Native FAQ disclosure controls support mouse, touch and keyboard input.
- A skip link, visible focus styles, semantic landmarks, descriptive image text and reduced-motion support are included.
- Images below the hero are lazy-loaded; the hero image receives high loading priority.
- Layouts adapt for desktop, tablet and mobile screens.

## Scope and deployment

The page has no links to other pages on the original website. Quote and contact buttons open the visitor's email application with the business contact address and an enquiry subject. No enquiry is submitted or stored by this frontend, and there is no backend or analytics integration.

Deploy the generated `dist` directory with an SPA fallback to `index.html` if you need the `/business-utilities.html` URL on a static host. The project has not been published by this task.

All headings stay readable without scroll-triggered animations. Original brand imagery and text remain attributable to D&A Business Solutions; Lato and Libre Franklin are distributed under the SIL Open Font License.
