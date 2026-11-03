import { Routes } from '@angular/router';

import { LANGS } from './core/i18n';
import { SiteLayout } from './layout/site-layout/site-layout';

/** The same pages under /km and /en (PLAIN.md 12.1). */
const pages: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'features', loadComponent: () => import('./pages/features-page/features-page').then((m) => m.FeaturesPage) },
  { path: 'pricing', loadComponent: () => import('./pages/pricing-page/pricing-page').then((m) => m.PricingPage) },
  { path: 'faq', loadComponent: () => import('./pages/faq-page/faq-page').then((m) => m.FaqPage) },
  { path: 'about', loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact-page/contact-page').then((m) => m.ContactPage) },
  {
    path: 'terms',
    data: { page: 'terms' },
    loadComponent: () => import('./pages/legal-page/legal-page').then((m) => m.LegalPage),
  },
  {
    path: 'privacy',
    data: { page: 'privacy' },
    loadComponent: () => import('./pages/legal-page/legal-page').then((m) => m.LegalPage),
  },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound) },
];

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'km' },
  ...LANGS.map((lang) => ({ path: lang, component: SiteLayout, data: { lang }, children: pages })),
  {
    path: '**',
    component: SiteLayout,
    data: { lang: 'km' },
    children: [{ path: '', loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound) }],
  },
];
