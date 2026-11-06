import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { SeoService } from '../../core/seo.service';
import { SiteService } from '../../core/site.service';
import { HelpFlow } from '../../help/help-flow/help-flow';
import { START_HERE, helpArticle, helpTopic, roleArticles, searchHelp, topicArticles, workflowArticles } from '../../help/help-content';
import { HELP_TOPICS } from '../../help/help-topics';
import { HELP_ROLES, HelpArticle, HelpRole } from '../../help/help-types';

/**
 * Help Center (PLAIN.md 12.1): search, "Start here", topics, guides by role and the workflows, in Khmer and English.
 * Prerendered with everything listed; the search filters in the browser.
 */
@Component({
  selector: 'ms-help-page',
  imports: [RouterLink, TranslatePipe, HelpFlow],
  templateUrl: './help-page.html',
  styleUrl: './help-page.scss',
})
export class HelpPage {
  protected readonly site = inject(SiteService);
  protected readonly lang = this.site.lang;
  protected readonly topics = HELP_TOPICS;
  protected readonly roles = HELP_ROLES;
  protected readonly start = START_HERE.map((slug) => helpArticle(slug)!);
  protected readonly popular = ['pos-sale', 'dollars-and-riel', 'transfers', 'stock-count', 'invite-staff'].map((slug) => helpArticle(slug)!);
  protected readonly workflows = workflowArticles();

  protected readonly query = signal('');
  protected readonly results = computed(() => searchHelp(this.query(), this.lang()));
  protected readonly role = signal<HelpRole>('OWNER');
  protected readonly forRole = computed(() => roleArticles(this.role()).slice(0, 9));

  constructor() {
    inject(SeoService).set('helpTitle', 'helpDescription', 'help');
  }

  protected articlesOf(topic: string): HelpArticle[] {
    return topicArticles(topic);
  }

  protected topicTitle(slug: string): string {
    return helpTopic(slug)?.title[this.lang()] ?? '';
  }

  protected link(article: HelpArticle): string[] {
    return [...this.site.link('help'), article.slug];
  }
}
