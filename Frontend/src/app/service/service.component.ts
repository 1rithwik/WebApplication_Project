import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app/app.service';

export interface Service {
  service_id: number;
  price: number;
  servicename: string;
  description: string;
}

export interface Appointment {
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
  services: Service[] = [];
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
    this.loadServices();
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
      serviceId: service.service_id,
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
  loadServices() {
    this.appService.getServices().subscribe(services => {
      this.services = services;
    });
  }
}
