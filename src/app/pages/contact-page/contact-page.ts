import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { Textarea } from 'primeng/textarea';

import { ContactService } from '../../core/contact.service';
import { SeoService } from '../../core/seo.service';
import { SiteService } from '../../core/site.service';
import { PageHero } from '../../sections/page-hero/page-hero';

/** Same rule as the API (Phones.KH): 0XX XXX XXX(X) or +855 XX XXX XXX(X). */
const CAMBODIAN_PHONE = /^(0|\+855\s?)\d{2}\s?\d{3}\s?\d{3,4}$/;

/** Contact (PLAIN.md 12.1 #4): phone, Telegram, Facebook, address, and the contact form (POST /public/contact). */
@Component({
  selector: 'ms-contact-page',
  imports: [
    ReactiveFormsModule, TranslatePipe, FloatLabel, InputText, Textarea, Message, ButtonDirective, ButtonIcon, ButtonLabel,
    PageHero,
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  protected readonly site = inject(SiteService);
  private readonly contact = inject(ContactService);

  protected readonly state = signal<'form' | 'sending' | 'sent' | 'error'>('form');
  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    phone: ['', [Validators.required, Validators.pattern(CAMBODIAN_PHONE)]],
    email: ['', [Validators.email, Validators.maxLength(160)]],
    message: ['', [Validators.required, Validators.maxLength(2000)]],
  });

  constructor() {
    inject(SeoService).set('contactTitle', 'contactDescription', 'contact');
  }

  /** A field's error line shows when PrimeNG paints it red: invalid and changed (or after a submit). */
  protected showError(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.dirty;
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      Object.values(this.form.controls).forEach((control) => control.markAsDirty());
      return;
    }
    const value = this.form.getRawValue();
    this.state.set('sending');
    this.contact
      .send({ ...value, email: value.email || null, language: this.site.lang() })
      .subscribe({
        next: () => {
          this.state.set('sent');
          this.form.reset();
        },
        error: () => this.state.set('error'),
      });
  }
}
