import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LoacalService {

  constructor(public translateServices: TranslateService){
    this.translateServices.addLangs(['en', 'ar']);
    this.translateServices.setDefaultLang('en');
    this.translateServices.use('en')

  }
}
