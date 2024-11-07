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
  appointment_id: number;
  user_id: number;
  appointmentDate: string;
  appointmentTime: string;
<<<<<<< HEAD
  serviceId: number;
=======
  service_id: number;
}

export interface AppointmentResponse {
  appointmentId: number;
  users: {
    userId: number;
    username: string;
    email: string;
    mobile: string;
    role: string;
  };
  service: {
    serviceId: number;
    servicename: string;
    price: number;
  };
  appointmentDate: string;
  appointmentTime: string;
  appointmentStatus: string;
>>>>>>> 4915eaa (View ans delete appointment by user)
}

export interface AppointmentResponse {
  appointmentId: number;
  users: {
    userId: number;
    username: string;
    email: string;
    mobile: string;
    role: string;
  };
  service: {
    serviceId: number;
    servicename: string;
    price: number;
  };
  appointmentDate: string;
  appointmentTime: string;
  appointmentStatus: string;
}

// export interface Feedback {
//   id: number;
//   comments: string;
//   rating: number;
//   user_id: number;
// }

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  user_id: string = '';
  services: Service[] = [];
  services: Service[] = [];
  selectedService: Service | null = null;
  appointmentForm: FormGroup;
  userAppointmentResponse: AppointmentResponse[] = [];
  searchUserId: number = 0;
<<<<<<< HEAD
<<<<<<< HEAD
  feedbackForm: FormGroup;
  showFeedbackForm: number | null = null;

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.appointmentForm = this.fb.group({
      userId: [''],
=======
=======
  feedbackForm: FormGroup;
  showFeedbackForm: number | null = null;
>>>>>>> ec41372 (user feedback initialized)

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.appointmentForm = this.fb.group({
      user_id: [''],
>>>>>>> 4915eaa (View ans delete appointment by user)
      appointmentDate: [''],
      appointmentTime: [''],
      service_id: [null],
      servicePrice: [null]
    });
    this.feedbackForm = this.fb.group({
      userId: [''],
      comments: [''],
      rating: [null]
    });
    this.loadServices();
  }

  viewAppointments(searchUserId: number) {
    this.appService.getUserAppointments(searchUserId).subscribe(
      (appointments: any) => {
        this.userAppointmentResponse = appointments;
      },
      (error) => {
        console.error('Error loading appointments:', error);
      }
    );
  }

  scheduleAppointment(service: Service) {
    this.selectedService = service;
    this.appointmentForm.patchValue({
      service_id: service.service_id,
      servicePrice: service.price,
      user_id: '',
      appointmentDate: '',
      appointmentTime: ''
    });
  }

  onSubmit() {
<<<<<<< HEAD
    // this.appointmentForm.patchValue({
    //   service_id: this.selectedService?.service_id
    // });
=======
    this.appointmentForm.patchValue({
      user_id: this.user_id,
      service_id: this.selectedService?.service_id
    });
>>>>>>> 4915eaa (View ans delete appointment by user)

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

  toggleFeedbackForm(appointmentId: number) {
    this.showFeedbackForm = appointmentId;
  }

  // comments: string = '';
  // rating: number = 0;
  submitFeedback(feedbackForm: any) {
    this.appService.submitFeedback(this.feedbackForm.value).subscribe(response => {
      console.log(response);
    });
  }
}
