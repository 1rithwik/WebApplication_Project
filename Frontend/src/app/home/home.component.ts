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
        name: 'John Doe',
        email: 'johndoe@example.com',
        mobile: '123-456-7890',
        userId: 'U12345'
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
  }
  