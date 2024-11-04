import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    // AppComponent,
    LoginComponent,
    ServiceComponent,
    // RegisterComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterComponent,
    AppointmentComponent,
    FeedbackComponent
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
