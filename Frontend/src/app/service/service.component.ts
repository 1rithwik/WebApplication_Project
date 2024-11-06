import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app/app.service';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Appointment {
  id: number;
  userId: string;
  appointmentDate: string;
  appointmentTime: string;
  serviceId: number;
  servicePrice: number;
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  userId: string = '';
  services: Service[] = [
    { id: 1, name: 'Tire Replacement', description: 'Professional tire replacement service.', price: 400 },
    { id: 2, name: 'Wheel Alignment', description: 'Accurate wheel alignment for smooth driving.', price: 250 },
    { id: 3, name: 'Balancing', description: 'Precise wheel balancing for better stability.', price: 150 },
    { id: 4, name: 'Fusion Repairs', description: 'Repair and restore tire fusion effectively.', price: 100 }
  ];
  selectedService: Service | null = null;
  appointmentForm: FormGroup;
  userAppointments: Appointment[] = [];

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.appointmentForm = this.fb.group({
      userId: [this.userId],
      appointmentDate: [''],
      appointmentTime: [''],
      serviceId: [null],
      servicePrice: [null]
    });
    this.viewAppointments();
  }

  viewAppointments() {
    const userId = this.userId; // Replace with actual user ID
    this.appService.getUserAppointments(userId).subscribe(
      (appointments: any) => {
        this.userAppointments = appointments;
      },
      (error) => {
        console.error('Error loading appointments:', error);
      }
    );
  }

  scheduleAppointment(service: Service) {
    this.selectedService = service;
    this.appointmentForm.patchValue({
      serviceId: service.id,
      servicePrice: service.price,
      userId: '',
      appointmentDate: '',
      appointmentTime: ''
    });
  }

  onSubmit() {
    this.appService.scheduleAppointment(this.appointmentForm.value).subscribe(response => {
      console.log(response);
    },
    error => {
      console.error('Error scheduling appointment:', error);
    });
  }
  deleteAppointment(appointmentId: number) {
    this.appService.deleteAppointment(appointmentId).subscribe(response => {
      console.log(response);
    });
  }
}
