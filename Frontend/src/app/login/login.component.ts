import { Component } from '@angular/core';
import { AppService } from '../app/app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  LoginUser:{
    id: number;
    username: string;
    role: string;
    mobile: string;
    email: string;
    password: string;
  }
}

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: LoginForm = {
    username: '',
    password: '',
  };
  constructor(private appService: AppService, private router: Router) {  }
  onFormSubmit() {
    this.appService.loginUser(this.loginData).subscribe(
      (response: any) => {
        // if(response && response.token){
        //   localStorage.setItem('token', response.token);
        //   console.log("Form submitted successfully!", response);
        //   alert('Login successful!');

        //   const user = response.LoginUser;
        //   console.log("User details:", user);
        // }
        // else{
        //   alert('Login failed. Please try again.');
        // }
        const token = Object.keys(response)[0];
        const user = Object.values(response)[0] as LoginResponse;
        localStorage.setItem('token', token);
        console.log("Form submitted successfully!", response);
        alert('Login successful!');
        if(user.LoginUser.role == 'ADMIN'){
          this.router.navigate(['/adminDashboard']);
        }
          this.router.navigate(['/home']);

      },
      error => {
        console.error("Error submitting form", error);
        alert('Login failed. Please try again.');
      }
    );
  }
}
