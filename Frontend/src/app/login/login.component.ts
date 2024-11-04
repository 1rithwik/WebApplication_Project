import { Component } from '@angular/core';
import { AppService } from '../app/app.service';


export interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: LoginForm = {
    username: '',
    password: '',
  };
  constructor(private appService: AppService) {

  }
  onFormSubmit() {
    this.appService.loginUser(this.loginData).subscribe(
      (response: any) => {
        if(response && response.token){
          localStorage.setItem('token', response.token);
          console.log("Form submitted successfully!", response);
          alert('Login successful!');
        }
        else{
          alert('Login failed. Please try again.');
        }
        },
      error => {
        console.error("Error submitting form", error);
        alert('Login failed. Please try again.');
      }
    );
  }
}
