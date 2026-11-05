# modern_stock_website

The public website of **ModernStock** (PLAIN.md 12.1). It is built with Angular 19 and PrimeNG 19 (Material preset), and prerendered to static HTML in Khmer and English, so it loads fast, works for search engines and link previews, and needs no Node server in production.

| | |
|---|---|
| Pages | Home, Features, Pricing, FAQ, About us, Contact, Terms of use, Privacy policy, under `/km/...` and `/en/...`. `/` goes to `/km` |
| Stack | Angular 19.2 (standalone, signals), PrimeNG 19.1.4 with the Material preset + PrimeIcons, Tailwind CSS v4, SCSS, ngx-translate, prerendering with `@angular/ssr` |
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

The build first writes `public/sitemap.xml` and `public/robots.txt` from `siteUrl` and the pages in `app.routes.ts` ([scripts/seo-files.mjs](scripts/seo-files.mjs)). The link preview image is `public/og-image.png`; its source is [scripts/og-image.html](scripts/og-image.html).

Upload `dist/modern_stock_website/browser` to any static host, for example the Nginx `www` server block in PLAIN.md section 18. Unknown addresses should fall back to `km/index.html`, where the "page not found" screen shows.

Before going live, put the real domains, phone number and social links in [src/environments/environment.prod.ts](src/environments/environment.prod.ts): `siteUrl`, `apiUrl`, `appUrl`, `telegramUrl`, `facebookUrl` and `phone`.

## Project layout

Every component has three files: `.ts`, `.html` and `.scss`.

```
src/
├── i18n/                 en.json, km.json: all website text (bundled, not fetched, so prerendering has it)
├── styles/_prototype.scss  tokens, buttons, inputs and website sections copied from the prototype
├── styles.scss           global styles: the prototype styles, the PrimeIcons box, PrimeNG button and field sizes
├── tailwind.css          Tailwind v4 setup and layer order
├── environments/         siteUrl, apiUrl, appUrl, contact details
└── app/
    ├── core/             i18n loader, SiteService (language and links), SeoService (title, Open Graph,
    │                     hreflang), ThemeModeService (dark mode), PlansService, ContactService,
    │                     theme/modern-stock-preset.ts (PrimeNG theme, the same file as in the web app)
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
- **Splash screen:** it is plain HTML and CSS in [src/index.html](src/index.html), so it shows before any JavaScript runs.
  - [SplashService](src/app/core/splash.service.ts) fades it out once Angular has rendered and the fonts have loaded, which means no unstyled text and no empty icon boxes.
  - It stays up at least 0.45 s, and waits at most 1.5 s for fonts.
  - If JavaScript never runs, CSS hides it after 4 s.
  - It follows dark mode and "reduce motion".
- **PrimeNG:** the website uses the same PrimeNG theme as the web app ([modern-stock-preset.ts](src/app/core/theme/modern-stock-preset.ts), keep the two copies the same):
  - buttons (`pButton`), the phone menu (`p-drawer`, loaded the first time it opens), the FAQ (`p-accordion`), the Monthly / Yearly switch on the plans (`p-selectbutton`), the contact form fields (`p-floatlabel`, `pInputText`, `pTextarea`, `p-message`), the back-to-top button (`p-scrolltop`) and PrimeIcons;
  - PrimeNG's styles are in the `primeng` CSS layer and are written into the prerendered pages, so a page looks right before any JavaScript runs;
  - the FAQ answers are part of every prerendered page, closed ones only hidden, so search engines read them.
- **PrimeNG 19.1.4, no license key:** it is the last MIT release of PrimeNG 19; later 19.x releases end in `-lts` and need a paid key, and so does PrimeNG for newer Angular. That is why `primeng` and `@primeng/themes` are pinned to exactly `19.1.4` and the website runs on Angular 19. Don't upgrade either one to an `-lts` version.
- **Angular 19:** it runs with zone.js. The server render needs the `BootstrapContext` argument in [main.server.ts](src/main.server.ts) (a fix Angular back-ported to 19.2). There is no built-in unit-test runner, so there is no `npm test` yet.
