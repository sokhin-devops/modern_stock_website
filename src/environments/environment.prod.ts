// Production (main branch → www.sokhin.site). See doc/plain/DevSecOps.md.
export const environment = {
  production: true,
  siteUrl: 'https://www.sokhin.site',
  apiUrl: 'https://api.sokhin.site/api/v1',
  appUrl: 'https://app.sokhin.site',
  // Contact details on the website. null = not shown (no account yet); the site falls back to the Contact page.
  telegramUrl: 'https://t.me/sokhinsing' as string | null,
  facebookUrl: null as string | null,
  /** A Google Maps link to the office; null shows the address without a map link. */
  mapUrl: null as string | null,
  phone: '010 895 335',
  email: 'sokhinsing04@gmail.com',
};
