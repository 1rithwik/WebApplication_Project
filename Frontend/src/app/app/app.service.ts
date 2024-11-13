import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm, LoginResponse } from '../login/login.component';
import { Observable } from 'rxjs';
import { Appointment, Tire } from '../admin-dash/admin-dash.component';
import { Service } from '../service/service.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:8081'; // Backend URL

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  loginUser(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  // to schedule an appointment for a user
  scheduleAppointment(appointment: any): Observable<Appointment> {
    // Ensure the appointment object includes tire information
    const appointmentWithTireInfo = {
      ...appointment,
      tireModel: appointment.tireModel, // Add tire model
      tireStock: appointment.tireStock  // Add tire stock
    };

    return this.http.post<Appointment>(
      `${this.apiUrl}/user/service/scheduleAppointment`,
      appointmentWithTireInfo
    );
  }

  // to delete an appointment for a user
  deleteAppointment(appointmentId: number) {
    return this.http.delete(`${this.apiUrl}/Appointment/service/deleteAppointment/${appointmentId}`);
  }


  getUserAppointments(searchUserId: number) {
    return this.http.get(`${this.apiUrl}/user/service/getUserAppointments/${searchUserId}`);
  }


  getFeedbacks() {
    return this.http.get(`${this.apiUrl}/admin/feedback/all`);
  }


  deleteFeedback(id: number) {
    return this.http.delete(`${this.apiUrl}/admin/feedback/delete/${id}`);
  }

  
  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/Appointment/appointments`);
  }


  updateAppointment(appointment: any) {
    return this.http.put(`${this.apiUrl}/service/updateAppointment`, appointment);
  }

  // to display all services to the user
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/user/service/all`);
  }

  // to submit feedback for a service
  submitFeedback(feedback: any) {
    return this.http.post(`${this.apiUrl}/user/service/submitFeedback`, feedback);
  }
  
  getTires(): Observable<Tire[]> {
    return this.http.get<Tire[]>(`${this.apiUrl}/tires/alltires`);
  }
  addTire(tire: any) {
    return this.http.post(`${this.apiUrl}/tires/addTire`, tire);
  }
  updateTire(tire: any) {
    return this.http.put(`${this.apiUrl}/tires/updateTire`, tire);
  }
  deleteTire(id: number) {
    return this.http.delete(`${this.apiUrl}/tires/deletetires/${id}`);
  } 


  addService(service: any) {
    return this.http.post(`${this.apiUrl}/admin/service/addService`, service);
  }

  updateService(service: any) {
    return this.http.put(`${this.apiUrl}/admin/service/updateService`, service);
  }

  deleteService(serviceId: number) {
    return this.http.delete(`${this.apiUrl}/admin/service/deleteService/${serviceId}`);
  }
}
