import { Lang } from '../core/i18n';

/** A text in both languages, side by side, so a Khmer review sees each one next to the English. */
export interface T {
  km: string;
  en: string;
}

/** Who usually does it: the built-in roles of the web app. */
export type HelpRole = 'OWNER' | 'MANAGER' | 'CASHIER' | 'STOCK_KEEPER';

export const HELP_ROLES: readonly HelpRole[] = ['OWNER', 'MANAGER', 'CASHIER', 'STOCK_KEEPER'];

export interface HelpTopic {
  slug: string;
  /** PrimeIcons name, without "pi-". */
  icon: string;
  title: T;
  summary: T;
}

export interface HelpStep {
  title: T;
  text: T;
}

/** One stage of a workflow, drawn as a row of boxes with arrows. */
export interface HelpStage {
  label: T;
  note?: T;
  /** The end of a side path (lost, rejected, voided), drawn in a quieter color. */
  side?: boolean;
}

export interface HelpArticle {
  slug: string;
  topic: string;
  roles: HelpRole[];
  title: T;
  summary: T;
  /** Where it is in the web app, as the menu reads: "Inventory › Transfers". */
  where?: T;
  /** The web app page to open, e.g. "inventory/transfers". */
  app?: string;
  /** The life of a document, shown at the top and in the Workflows section of the Help Center. */
  flow?: HelpStage[];
  steps: HelpStep[];
  tips?: T[];
  /** Something that can't be undone, or that people often get wrong. */
  warning?: T;
  related?: string[];
  /** Extra words people may search with. */
  keywords?: T;
}

export function t(text: T, lang: Lang): string {
  return text[lang];
}
