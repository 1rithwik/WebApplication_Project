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
<<<<<<< HEAD
<<<<<<< HEAD
  constructor(private appService: AppService, private router: Router) { }
  onFormSubmit() {
    this.appService.loginUser(this.loginData).subscribe(
      (response: any) => {
        
        const token = Object.keys(response)[0];
        const user = response[token];
        if(user && user.role){
          localStorage.setItem('jwtToken', token);
          console.log("Form submitted successfully!", response);
          alert('Login successful!');
          if(user.role == 'ADMIN'){
            this.router.navigate(['/adminDashboard']);
          }
          else{
            this.router.navigate(['/home']);
          }
        }

=======
  constructor(private appService: AppService, private router: Router) {  }
=======
  constructor(private appService: AppService, private router: Router) { }
>>>>>>> 08a1de2 (Jwt token in frontend)
  onFormSubmit() {
    this.appService.loginUser(this.loginData).subscribe(
      (response: any) => {
        
        const token = Object.keys(response)[0];
<<<<<<< HEAD
        const user = Object.values(response)[0] as LoginResponse;
        localStorage.setItem('token', token);
        console.log("Form submitted successfully!", response);
        alert('Login successful!');
<<<<<<< HEAD
        this.router.navigate(['/home']);
>>>>>>> dd90d20 (Login routed)
=======
        if(user.LoginUser.role == 'ADMIN'){
          this.router.navigate(['/adminDashboard']);
=======
        const user = response[token];
        if(user && user.role){
          localStorage.setItem('jwtToken', token);
          console.log("Form submitted successfully!", response);
          alert('Login successful!');
          if(user.role == 'ADMIN'){
            this.router.navigate(['/adminDashboard']);
          }
          else{
            this.router.navigate(['/home']);
          }
>>>>>>> 256486a (AdminDashBoard routing)
        }

>>>>>>> 78bcbaf (Admin routing)
      },
      error => {
        console.error("Error submitting form", error);
        alert('Login failed. Please try again.');
      }
    );
  }
  
  // onFormSubmit() {
  //   this.appService.loginUser(this.loginData).subscribe(
  //     (response: LoginResponse) => {
  //       const token = response.token;
  //       const user = response.LoginUser;

  //       if (token && user) {
  //         // Store the token and user role in local storage
  //         localStorage.setItem('jwtToken', token);

  //         // Navigate based on the user role
  //         if (user.role === 'ADMIN') {
  //           this.router.navigate(['/adminDashboard']);
  //         } else {
  //           this.router.navigate(['/home']);
  //         }

  //         alert('Login successful!');
  //       } else {
  //         alert('Login failed. Please try again.');
  //       }
  //     },
  //     (error) => {
  //       console.error("Error submitting form", error);
  //       alert('Login failed. Please try again.');
  //     }
  //   );
  // }
}
