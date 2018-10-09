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
import { MeetingRecordNewComponent } from './meeting-record-new/meeting-record-new.component';
import { TeachingArrangementPageComponent } from './teaching-arrangement-page/teaching-arrangement-page.component';
import { TeacherInfoCardMiniComponent } from './teacher-info-card-mini/teacher-info-card-mini.component';
import { StudentRequestItemComponent } from './student-request-item/student-request-item.component';
import { CoursePipe } from './pipes/course.pipe';
import { LoadMoreComponent } from './load-more/load-more.component';
import { TeachingArrangementDetailComponent } from './teaching-arrangement-detail/teaching-arrangement-detail.component';
import { TeachingArrangingComponent } from './teaching-arranging/teaching-arranging.component';

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
    MeetingRecordNewComponent,
    TeachingArrangementPageComponent,
    TeacherInfoCardMiniComponent,
    StudentRequestItemComponent,
    CoursePipe,
    LoadMoreComponent,
    TeachingArrangementDetailComponent,
    TeachingArrangingComponent
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
