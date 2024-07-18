import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent {
  constructor(private translocoService: TranslocoService) {}

  public activeLanguage = this.translocoService.getDefaultLang();

  public languagesList: Array<
    Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>
  > = [
    {
      imgUrl: '/assets/images/en-uk.png',
      code: 'en',
      name: 'English',
      shorthand: 'ENG',
    },
    {
      imgUrl: '/assets/images/es.png',
      code: 'es',
      name: 'Español',
      shorthand: 'ESP',
    },
  ];

  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    this.activeLanguage = languageCode;
  }
}
