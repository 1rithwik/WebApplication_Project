import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  // standalone: true,
  // imports: [CommonModule, FormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  appointments: any[] = [];
  selectedAppointment: any;
  showEditModal = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAppointments().subscribe(data => {
      this.appointments = data as any[];
    });
  }
  editAppointment(appointment: any) {
    this.selectedAppointment = appointment;
    this.showEditModal = true;
  }
  updateAppointment() {
    this.appService.updateAppointment(this.selectedAppointment).subscribe(() => {
      this.showEditModal = false;
    });
  }
  closeEditModal() {
    this.showEditModal = false;
  }
}
