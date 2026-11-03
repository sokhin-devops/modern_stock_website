# modern_stock_website

The public website of **ModernStock** (PLAIN.md 12.1). It is built with Angular 22 and prerendered to static HTML in Khmer and English, so it loads fast, works for search engines and link previews, and needs no Node server in production.

| | |
|---|---|
| Pages | Home, Features, Pricing, FAQ, About us, Contact, Terms of use, Privacy policy, under `/km/...` and `/en/...`. `/` goes to `/km` |
| Stack | Angular 22 (standalone, signals, zoneless), Tailwind CSS v4, SCSS, ngx-translate, prerendering with `@angular/ssr` |
| Design | The approved prototype ([doc/plain/UX_UI/prototype/website.html](../doc/plain/UX_UI/prototype/website.html)), ported 1:1 |
| API | `GET /public/plans` (Pricing) and `POST /public/contact` (Contact form), from [modern_stock_api](../modern_stock_api) |

## Run it

```bash
npm install
npm start                                   # http://localhost:4200/km
```

- **Port 4200 taken:** use `npx ng serve --port 4300`.
- **API proxy:** during development, `/api` is forwarded to the API ([proxy.conf.mjs](proxy.conf.mjs)), whose default address is `http://localhost:8080`. If the API printed another port at start-up, tell the proxy:

  ```bash
  API_URL=http://localhost:8082 npm start                       # Git Bash
  $env:API_URL="http://localhost:8082"; npm start               # PowerShell
  ```

- **Without the API:** the site still works. Pricing shows the built-in plans, and the contact form shows a friendly error.

## Build

```bash
npm run build      # → dist/modern_stock_website/browser: one index.html per page and language
```

Upload `dist/modern_stock_website/browser` to any static host, for example the Nginx `www` server block in PLAIN.md section 18. Unknown addresses should fall back to `km/index.html`, where the "page not found" screen shows.

Before going live, put the real domains, phone number and social links in [src/environments/environment.prod.ts](src/environments/environment.prod.ts): `siteUrl`, `apiUrl`, `appUrl`, `telegramUrl`, `facebookUrl` and `phone`.

## Project layout

Every component has three files: `.ts`, `.html` and `.scss`.

```
src/
├── i18n/                 en.json, km.json: all website text (bundled, not fetched, so prerendering has it)
├── styles/_prototype.scss  tokens, buttons, inputs and website sections copied from the prototype
├── styles.scss           global styles (imports the prototype styles)
├── tailwind.css          Tailwind v4 setup and layer order
├── environments/         siteUrl, apiUrl, appUrl, contact details
└── app/
    ├── core/             i18n loader, SiteService (language and links), SeoService (title, Open Graph,
    │                     hreflang), ThemeModeService (dark mode), PlansService, ContactService
    ├── layout/           site-layout (sets the language), site-header, site-footer
    ├── sections/         hero, why, features, cambodia, how, pricing-plans, faq-list, cta-band, page-hero
    ├── pages/            home, features-page, pricing-page, faq-page, about-page, contact-page,
    │                     legal-page (terms and privacy), not-found
    └── shared/           flag (language flag), reveal (fade-in on scroll)
```

## Notes

- **Language:**
  - Every page exists twice, once under `/km` and once under `/en`.
  - The flag button switches to the same page in the other language.
  - **Log in** and **Start free** open the web app with `?lang=km` or `?lang=en`.
- **Text:** all of it lives in `src/i18n/*.json`. Khmer text that isn't from the prototype (About, Contact, legal pages, the longer Features page) needs a review by a native speaker.
- **Placeholders:** the team names on About us, and the legal texts, are drafts the team must replace before launch.
- **Dark mode:** the choice is saved per browser (`ms-theme`), and a small script in `index.html` applies it before the page appears.
- **No PrimeNG:** the website doesn't use it. PrimeNG 22 is now under the commercial PrimeUI License, which needs a license key; the website's few form controls use the prototype's own `.input` and `.btn` styles instead.
