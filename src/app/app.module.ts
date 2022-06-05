import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IntroductionComponent } from './introduction/introduction.component';
import { ImageComponent } from './image/image.component';
import { StatComponent } from './stat/stat.component';
import { OurSerComponent } from './our-ser/our-ser.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderNewComponent } from './header-new/header-new.component'
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http , './assets/i18n/' , '.json')
  }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    ImageComponent,
    StatComponent,
    OurSerComponent,
    FooterComponent,
    HeaderNewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,MatToolbarModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps:[HttpClient]
      },
      defaultLanguage: 'en'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
