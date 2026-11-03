import { DOCUMENT, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

let observer: IntersectionObserver | null = null;

/**
 * Sections fade in as they scroll into view, like the prototype. Prerendered HTML stays fully visible:
 * the effect only switches on in the browser, and never with "reduce motion".
 */
@Directive({ selector: '[msReveal]', host: { class: 'reveal' } })
export class Reveal {
  constructor() {
    const element = inject(ElementRef<HTMLElement>).nativeElement as HTMLElement;
    const document = inject(DOCUMENT);
    afterNextRender(() => {
      const view = document.defaultView;
      if (!view || !('IntersectionObserver' in view) || view.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      document.documentElement.classList.add('reveal-on');
      observer ??= new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer?.unobserve(e.target);
          }
        }),
        { rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(element);
    });
  }
}
