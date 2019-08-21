import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-internationalization';
  constructor(private translate: TranslateService) {
    translate.use('en').then(() => {
      console.log(translate.data);
    });
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }

}
