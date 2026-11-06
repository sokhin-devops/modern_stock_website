// The dev environment in the cloud (dev branch → dev-www.sokhin.site). `ng serve` on your PC uses environment.ts.
export const environment = {
  production: true,
  siteUrl: 'https://dev-www.sokhin.site',
  apiUrl: 'https://dev-api.sokhin.site/api/v1',
  appUrl: 'https://dev-app.sokhin.site',
  // Contact details on the website. null = not shown (no account yet); the site falls back to the Contact page.
  telegramUrl: 'https://t.me/sokhinsing' as string | null,
  facebookUrl: null as string | null,
  /** A Google Maps link to the office; null shows the address without a map link. */
  mapUrl: null as string | null,
  phone: '010 895 335',
  email: 'sokhinsing04@gmail.com',
};
