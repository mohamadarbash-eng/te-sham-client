import { Component } from '@angular/core';
import 'materialize-css';
import { TranslateAppService } from './core.mod/translate/services/translate-app.service';

@Component({
  selector: 'te-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// TODO test
/*

 */
export class AppComponent {
  constructor(private translateAppService: TranslateAppService) {
    console.log('fdffhhkjhkd');
    this.translateAppService.prepareLang();
  }
}
