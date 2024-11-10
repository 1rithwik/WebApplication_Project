import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TireAdminComponent } from './tire-admin/tire-admin.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    ServiceComponent,
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AppointmentComponent,
    FeedbackComponent,
    TireAdminComponent,
    AdminDashComponent
  ],
  imports: [
    // NgModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    HttpClientModule,
    // AppComponent,
    // RegisterComponent,
    // AppointmentComponent,
    // FeedbackComponent,
    // HomeComponent,
    // LoginComponent,
    CommonModule
  ],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }