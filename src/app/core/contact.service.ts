import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Lang } from './i18n';

export interface ContactMessage {
  name: string;
  phone: string;
  email: string | null;
  message: string;
  language: Lang;
}

/** POST /public/contact: saved for the team, who answer by phone or email. */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(message: ContactMessage): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/public/contact`, message);
  }
}
