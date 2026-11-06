import { Lang } from '../core/i18n';
import { CUSTOMERS_AND_BUYING } from './articles/customers-and-buying';
import { MANAGE } from './articles/manage';
import { START_AND_SELLING } from './articles/start-and-selling';
import { STOCK_AND_PRODUCTS } from './articles/stock-and-products';
import { HelpArticle, HelpRole, HelpTopic } from './help-types';
import { HELP_TOPICS } from './help-topics';

/** Every Help Center article, in topic order. */
export const HELP_ARTICLES: HelpArticle[] = [...START_AND_SELLING, ...CUSTOMERS_AND_BUYING, ...STOCK_AND_PRODUCTS, ...MANAGE];

/** The path after /km/help/ of each article, for prerendering and the sitemap. */
export const HELP_SLUGS: string[] = HELP_ARTICLES.map((a) => a.slug);

/** "Start here" on the Help Center: the first hour with ModernStock, in order. */
export const START_HERE = ['create-account', 'set-up-business', 'first-day', 'pos-sale', 'invite-staff'];

export function helpArticle(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}

export function helpTopic(slug: string): HelpTopic | undefined {
  return HELP_TOPICS.find((t) => t.slug === slug);
}

export function topicArticles(topic: string): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.topic === topic);
}

/** The articles a role usually needs, the ones meant only for that role first. */
export function roleArticles(role: HelpRole): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.roles.includes(role)).sort((a, b) => a.roles.length - b.roles.length);
}

/** Articles with a workflow diagram. */
export function workflowArticles(): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.flow?.length);
}

/**
 * Search in one language: every word must appear somewhere in the article; a word in the title counts most, then the
 * summary and the search words, then the steps. Khmer has no spaces between words, so a Khmer query is matched as is.
 */
export function searchHelp(query: string, lang: Lang): HelpArticle[] {
  const words = normalize(query).split(' ').filter(Boolean);
  if (!words.length) {
    return [];
  }
  const scored = HELP_ARTICLES.map((a) => {
    const title = normalize(a.title[lang]);
    const summary = normalize(`${a.summary[lang]} ${a.keywords?.[lang] ?? ''} ${a.where?.[lang] ?? ''}`);
    const body = normalize(a.steps.map((s) => `${s.title[lang]} ${s.text[lang]}`).join(' ') + ' ' + (a.tips ?? []).map((t) => t[lang]).join(' '));
    let score = 0;
    for (const w of words) {
      const s = (title.includes(w) ? 10 : 0) + (summary.includes(w) ? 4 : 0) + (body.includes(w) ? 1 : 0);
      if (!s) {
        return { a, score: 0 };
      }
      score += s;
    }
    return { a, score };
  });
  return scored.filter((s) => s.score > 0).sort((x, y) => y.score - x.score).map((s) => s.a);
}

function normalize(text: string): string {
  return text.toLocaleLowerCase().replace(/[.,;:!?"'()›…/-]+/g, ' ').replace(/\s+/g, ' ').trim();
}
