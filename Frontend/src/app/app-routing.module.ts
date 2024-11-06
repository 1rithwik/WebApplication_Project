import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterGuardService } from './register-guard.service';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { AppointmentComponent } from './appointment/appointment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TireAdminComponent } from './tire-admin/tire-admin.component';
import { ServiceComponent } from './service/service.component';

=======
>>>>>>> 78bcbaf (Admin routing)
=======
import { AppointmentComponent } from './appointment/appointment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TireAdminComponent } from './tire-admin/tire-admin.component';
>>>>>>> e4bde25 (Appointment Implemented for admin)

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
<<<<<<< HEAD
<<<<<<< HEAD
  { path: 'login', component: LoginComponent },
  { path: 'adminDashboard', component: AdminDashComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'customerFeedback', component: FeedbackComponent },
  { path: 'tireStock', component: TireAdminComponent },
<<<<<<< HEAD
  { path: 'user/service', component: ServiceComponent },
=======
  { path: 'login', component: LoginComponent }
>>>>>>> dd90d20 (Login routed)
=======
  { path: 'login', component: LoginComponent },
  { path: 'adminDashboard', component: AdminDashComponent },
>>>>>>> 78bcbaf (Admin routing)
=======
>>>>>>> e4bde25 (Appointment Implemented for admin)
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }