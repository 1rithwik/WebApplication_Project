import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,NgModel,ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AppService } from '../app/app.service';
import { trigger, transition, style, animate } from '@angular/animations';

export interface RegistrationForm {
  username: string;
  password: string;
  email: string;
  mobile: string;
  role: string;
}

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('bounce', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('0.5s cubic-bezier(.8,-0.6,0.2,1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class RegisterComponent {
  registrationForm: RegistrationForm = {
    username: '',
    password: '',
    email: '',
    mobile: '',
    role: ''
  };

  constructor(private appService: AppService) {}

  onSubmit() {
    if (this.validateForm()) {
      this.appService.registerUser(this.registrationForm).subscribe({
        next: (response) => {
          console.log("Registration successful!", response);
          alert('Registration successful!');
        },
        error: (error) => {
          console.error("Registration failed", error);
          alert('Registration failed. Please try again.');
        }
      });
    }
  }

  private validateForm(): boolean {
    if (!this.registrationForm.username || !this.registrationForm.password || 
        !this.registrationForm.email || !this.registrationForm.mobile) {
      alert('Please fill in all required fields');
      return false;
    }
    if (!this.validateEmail(this.registrationForm.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    if (!this.validateMobile(this.registrationForm.mobile)) {
      alert('Please enter a valid mobile number');
      return false;
    }
    return true;
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validateMobile(mobile: string): boolean {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  }
}