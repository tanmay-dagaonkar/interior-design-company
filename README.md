# Karigrah Interiors

Website for Karigrah, a boutique interior design studio. Built with Angular 19 and
server-side rendering (SSR).

All content is currently **placeholder** — copy, contact details, and imagery need to be
swapped for the real business content before launch.

## Pages

- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Gallery (`/gallery`)
- Contact (`/contact`)

## Development server

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The app reloads automatically on file changes.

## Building

```bash
npm run build
```

Build output (browser + server bundles) is written to `dist/interior-design-company/`.

## Running with SSR

After building, run the Node server:

```bash
node dist/interior-design-company/server/server.mjs
```

Serves the SSR app at `http://localhost:4000/` by default.

## Running unit tests

```bash
npm test
```

Uses Karma + Jasmine with a headless, no-sandbox Chrome launcher (see `karma.conf.js`) so
tests run in containerized environments.

## Content to replace

- Business name, tagline, and about/story copy
- Real photography for hero, gallery, and section backgrounds (currently gradient placeholders)
- Contact details (email, phone, address) and the contact form's submit handler (currently local-only)
- Social links (Instagram, Pinterest)
