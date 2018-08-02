import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryComponent } from './try/try/try.component';
import { LoginComponent } from './common/login/login.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { MeetingRecordPageComponent } from './meeting-record-page/meeting-record-page.component';

const routes: Routes = [
  {path: 'try', component: TryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'index', component: PageIndexComponent},
  {path: 'meeting-record', component: MeetingRecordPageComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
