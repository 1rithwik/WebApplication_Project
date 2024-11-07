import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm, LoginResponse } from '../login/login.component';
import { Observable } from 'rxjs';
import { Appointment } from '../admin-dash/admin-dash.component';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:8080'; // Backend URL

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  loginUser(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
  scheduleAppointment(appointment: any) {
    return this.http.post(`${this.apiUrl}/service/scheduleAppointment`, appointment);
  }
  deleteAppointment(appointmentId: number) {
    return this.http.delete(`${this.apiUrl}/service/deleteAppointment/${appointmentId}`);
  }
  getUserAppointments(userId: string) {
    return this.http.get(`${this.apiUrl}/service/getUserAppointments/${userId}`);
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
}
