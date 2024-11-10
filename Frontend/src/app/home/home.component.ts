// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { RegisterComponent } from '../register/register.component';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-home',
//   // standalone: true,
//   // imports: [RouterLink, RegisterComponent],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {
//   constructor(private router: Router) {}
//   navigateToRegister() {
//     this.router.navigate(['/register']);
//   }
// }

import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
export class HomeComponent {
    showDropdown: boolean = false;
  
    // Mock user data
    user = {
        username: JSON.parse(localStorage.getItem('user') || '{}').username,
        userId: JSON.parse(localStorage.getItem('user') || '{}').userId,
        mobile: JSON.parse(localStorage.getItem('user') || '{}').mobile,
        email: JSON.parse(localStorage.getItem('user') || '{}').email,
    };
    
    constructor(private router: Router) {}
  
    // Navigate to register page
    navigateToRegister() {
        this.router.navigate(['/register']);
    }
  
    // Toggle dropdown visibility on icon click
    toggleDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    closeDropdown() {
      this.showDropdown = false; // Assuming showDropdown is a boolean property
  }
  
    // Close dropdown if clicked outside
    @HostListener('document:click', ['$event'])
    clickOutside(event: Event) {
        const target = event.target as HTMLElement;
          const clickedInsideUserMenu = target.closest('.user-menu');
  
          if (!clickedInsideUserMenu) {
              this.showDropdown = false;
          }
      }

      logout() {
        // Clear local storage
        localStorage.clear();
    
        // Optionally, navigate to the login page or home page
        this.router.navigate(['/login']); // Ensure you have imported and injected Router
    
        // Additional logout logic if needed
    }
  }
  