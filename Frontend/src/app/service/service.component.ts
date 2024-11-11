import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app/app.service';

export interface Service {
  serviceId: number;
  price: number;
  servicename: string;
  description: string;
}

export interface Appointment {
  appointment_id: number;
  userId: number;
  appointmentDate: string;
  appointmentTime: string;
  serviceId: number;
  tireModel: string;
  numberOfTires: number;
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
  userId: string = '';
  services: Service[] = [];
  selectedService: Service | null = null;
  appointmentForm: FormGroup;
  userAppointmentResponse: AppointmentResponse[] = [];
  searchUserId: number = 0;
  feedbackForm: FormGroup;
  showFeedbackForm: number | null = null;
  appointmentConfirmed = false;

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.appointmentForm = this.fb.group({
      userId: [''],
      appointmentDate: [''],
      appointmentTime: [''],
      serviceId: [null],
      servicePrice: [null],
      tireModel: [''],
      numberOfTires: [null]
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
    // if(service.servicename==="Tire Replacement"){
    //   this.appointmentForm.patchValue({
    //     model: '',
    //     stock: null
    //   });
    // }
    this.appointmentForm.patchValue({
      serviceId: service.serviceId,
      servicePrice: service.price,
      userId: '',
      appointmentDate: '',
      appointmentTime: '',
      tireModel: '',
      numberOfTires: null
    });
    this.appointmentConfirmed = false;
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.appService.scheduleAppointment(this.appointmentForm.value).subscribe(response => {
        console.log(response);

        this.appointmentConfirmed = true;
        this.appointmentForm.reset();
        this.selectedService = null;
      },
      error => {
        console.error('Error scheduling appointment:', error);
      });
    }
  }

  deleteAppointment(appointmentId: number) {
    this.appService.deleteAppointment(appointmentId).subscribe(response => {
      console.log(response);
      this.userAppointmentResponse = this.userAppointmentResponse.filter(appointment => appointment.appointmentId !== appointmentId);
    },
    error => {
      console.error('Error deleting appointment:', error);
    }
  );
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
