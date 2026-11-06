// Development. The dev server proxies /api to the API (see proxy.conf.mjs).
export const environment = {
  production: false,
  siteUrl: 'http://localhost:4200',
  apiUrl: '/api/v1',
  appUrl: 'http://localhost:4201',
  // Contact details on the website. null = not shown (no account yet); the site falls back to the Contact page.
  telegramUrl: 'https://t.me/sokhinsing' as string | null,
  facebookUrl: null as string | null,
  /** A Google Maps link to the office; null shows the address without a map link. */
  mapUrl: null as string | null,
  phone: '010 895 335',
  email: 'sokhinsing04@gmail.com',
};
