import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TryComponent } from './try/try/try.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FunctionCardComponent } from './common/function-card/function-card.component';
import { LoginComponent } from './common/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageIndexComponent } from './page-index/page-index.component';
import { FooterComponent } from './common/footer/footer.component';
import { MeetingRecordPageComponent } from './meeting-record-page/meeting-record-page.component';
import { MeetingRecordComponent } from './meeting-record/meeting-record.component';
import { MeetingCardNewComponent } from './meeting-card-new/meeting-card-new.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    FunctionCardComponent,
    LoginComponent,
    PageIndexComponent,
    FooterComponent,
    MeetingRecordPageComponent,
    MeetingRecordComponent,
    MeetingCardNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
