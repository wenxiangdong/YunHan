import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryComponent } from './try/try/try.component';
import { LoginComponent } from './common/login/login.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { MeetingRecordPageComponent } from './meeting-record-page/meeting-record-page.component';
import { MeetingRecordNewComponent } from './meeting-record-new/meeting-record-new.component';
import { TeachingArrangementPageComponent } from './teaching-arrangement-page/teaching-arrangement-page.component';

const routes: Routes = [
  {path: 'try', component: TryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'index', component: PageIndexComponent},
  {path: 'meeting-record', component: MeetingRecordPageComponent},
  {path: 'meeting-record-new', component: MeetingRecordNewComponent},
  {path: 'teaching-arrange', component: TeachingArrangementPageComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
