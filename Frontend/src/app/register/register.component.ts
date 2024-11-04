import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from '../app/app.service';

export interface RegistrationForm {
  username: string;
  password: string;
  email: string;
  mobile: string;
  role: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})

export class RegisterComponent {
  registrationForm: RegistrationForm = {
    username: '',
    password: '',
    email: '',
    mobile: '',
    role: ''
  };

  constructor(private appService: AppService) {

  }

  onSubmit() {
    this.appService.registerUser(this.registrationForm).subscribe(
      response => {
        console.log("Form submitted successfully!", response);
        alert('Registration successful!');
      },
      error => {
        console.error("Error submitting form", error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
