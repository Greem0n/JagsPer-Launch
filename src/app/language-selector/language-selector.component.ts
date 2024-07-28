import { Component, Input } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent {
  constructor(private translocoService: TranslocoService) {}

  public isVisible: boolean = false;
  public activeLanguage = this.translocoService.getDefaultLang();

  public languagesList: Array<
    Record<'imgUrl' | 'code' | 'name' | 'shorthand' | 'reference', string>
  > = [
    {
      imgUrl: '/assets/images/en-uk.png',
      code: 'en',
      name: 'English',
      reference: 'english',
      shorthand: 'ENG',
    },
    {
      imgUrl: '/assets/images/es.png',
      code: 'es',
      name: 'Español',
      reference: 'spanish',
      shorthand: 'ESP',
    },
  ];

  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    this.activeLanguage = languageCode;
    this.isVisible = false;
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
