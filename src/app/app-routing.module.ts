import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentReportComponent } from './assessment-report/assessment-report.component';
import { AddResourceComponent } from './components/resource/add-resource/add-resource.component';
import { EditResourceComponent } from './components/resource/edit-resource/edit-resource.component';
import { ResourceListComponent } from './components/resource/resource-list/resource-list.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { SignupComponent } from './signup/signup.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'',component:LoginComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'home', component:HomeComponent},
  {
    path: 'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path: 'assessment-report',
    component:AssessmentReportComponent
  },
  {
    path: 'resource',
    component: ResourceListComponent
  },
  {
    path: 'app-add-resource',
    component: AddResourceComponent
  },
  {
    path: 'app-edit-resource/:id',
    component: EditResourceComponent
  },
  {
    path: 'send-mail',
    component: SendMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
