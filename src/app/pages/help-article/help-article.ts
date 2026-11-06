import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';

import { SeoService } from '../../core/seo.service';
import { SiteService } from '../../core/site.service';
import { HelpFlow } from '../../help/help-flow/help-flow';
import { helpArticle, helpTopic, topicArticles } from '../../help/help-content';
import { HELP_TOPICS } from '../../help/help-topics';
import { HelpArticle } from '../../help/help-types';
import { NotFound } from '../not-found/not-found';

/** One Help Center guide (/km/help/<slug>): who does it, where it is in the app, the workflow and the steps. */
@Component({
  selector: 'ms-help-article',
  imports: [RouterLink, TranslatePipe, HelpFlow, NotFound],
  templateUrl: './help-article.html',
  styleUrl: './help-article.scss',
})
export class HelpArticlePage {
  protected readonly site = inject(SiteService);
  private readonly seo = inject(SeoService);
  protected readonly lang = this.site.lang;
  protected readonly topics = HELP_TOPICS;

  private readonly slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((p) => p.get('slug') ?? '')), { initialValue: '' });
  protected readonly article = computed(() => helpArticle(this.slug()));
  protected readonly topic = computed(() => helpTopic(this.article()?.topic ?? ''));
  protected readonly siblings = computed(() => topicArticles(this.article()?.topic ?? ''));
  protected readonly previous = computed(() => this.neighbour(-1));
  protected readonly next = computed(() => this.neighbour(1));
  protected readonly related = computed(() =>
    (this.article()?.related ?? []).map((slug) => helpArticle(slug)).filter((a): a is HelpArticle => !!a),
  );

  constructor() {
    // An unknown address shows the not-found page, which sets its own title.
    effect(() => {
      const a = this.article();
      if (a) {
        this.seo.setText(a.title[this.lang()], a.summary[this.lang()], `help/${a.slug}`);
      }
    });
  }

  protected link(article: HelpArticle): string[] {
    return [...this.site.link('help'), article.slug];
  }

  /** The page in the web app, opened in the visitor's language. */
  protected appLink(path: string): string {
    return `${this.site.env.appUrl}/${path}${path.includes('?') ? '&' : '?'}lang=${this.lang()}`;
  }

  protected articlesOf(topic: string): HelpArticle[] {
    return topicArticles(topic);
  }

  private neighbour(step: number): HelpArticle | undefined {
    const list = this.siblings();
    const i = list.findIndex((a) => a.slug === this.slug());
    return i < 0 ? undefined : list[i + step];
  }
}
