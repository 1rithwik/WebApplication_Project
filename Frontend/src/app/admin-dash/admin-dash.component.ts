import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
export interface Appointment {
  appointmentId: string;
  appointmentDate: string;
  appointmentStatus: string;
  appointmentTime: string;
  serviceId: number;
  userId: number;
}

@Component({
  selector: 'app-admin-dash',
  // standalone: true,
  // imports: [],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent{

  activeChild: string = 'overview';

  constructor(private appService: AppService) {
    this.loadAppointments();
  }
  appointments: Appointment[] = [];

  loadAppointments() {
    this.appService.getAppointments().subscribe((data: any) => {
      this.appointments = data;
    },
    (error: any) => {
      console.error('Error loading appointments:', error);
    }
  );
  }
  updateAppointment(index: number) {
    const appointment = this.appointments[index];
          
    // const customerName = prompt('Enter new customer name:', appointment.customerName);
    // const serviceType = prompt('Enter new service type:', appointment.serviceType);
    // const date = prompt('Enter new appointment date (YYYY-MM-DD):', appointment.date);
    // const time = prompt('Enter new appointment time (HH:MM AM/PM):', appointment.appointmentTime);
    const status = prompt('Enter new status:', appointment.appointmentStatus);
          
          if (status) {
                      // Update the appointment object with new values
                      this.appointments[index] = {
                          ...appointment,
                          appointmentStatus: status
                      };
          
            alert(`Appointment ${appointment.appointmentId} updated successfully!`);
          
                      // Here, you'd send an update request to your backend.
          }
  }
  deleteAppointment(index: number) {
    const appointment = this.appointments[index];
    if (confirm(`Are you sure you want to delete appointment ${appointment.appointmentId}?`)) {
        this.appointments.splice(index, 1);
        alert(`Appointment ${appointment.appointmentId} deleted successfully!`);
              // Here, you'd send a delete request to your backend.
    }
  }
}


// export class AdminDashComponent {

//   activeChild: string = 'overview';

//   updateAppointment(index: number) {
//     // Logic to update the appointment
//     console.log('Updating appointment at index:', index);
//   }

//   deleteAppointment(index: number) {
//     // Logic to delete the appointment
//     console.log('Deleting appointment at index:', index);
//   }
// }


// interface Appointment {
//     id: string;
//     customerName: string;
//     serviceType: string;
//     date: string;
//     time: string;
//     status: string;
// }

// @Component({
//     selector: 'app-appointment-management',
//     templateUrl: './admin-dash.component.html',
//     styleUrls: ['./admin-dash.component.css']
// })
// export class AppointmentManagementComponent {
//     // Sample data for appointments; in a real app, this data would come from a backend API.
//     appointments: Appointment[] = [
//         { id: '12345', customerName: 'John Doe', serviceType: 'General Checkup', date: '2024-11-08', time: '10:30 AM', status: 'Pending' }
//         // Additional appointments can be added here.
//     ];

//     updateAppointment(index: number) {
//         const appointment = this.appointments[index];

//         const customerName = prompt('Enter new customer name:', appointment.customerName);
//         const serviceType = prompt('Enter new service type:', appointment.serviceType);
//         const date = prompt('Enter new appointment date (YYYY-MM-DD):', appointment.date);
//         const time = prompt('Enter new appointment time (HH:MM AM/PM):', appointment.time);

//         if (customerName && serviceType && date && time) {
//             // Update the appointment object with new values
//             this.appointments[index] = {
//                 ...appointment,
//                 customerName,
//                 serviceType,
//                 date,
//                 time
//             };

//             alert(`Appointment ${appointment.id} updated successfully!`);

//             // Here, you'd send an update request to your backend.
//         }
//     }

//     deleteAppointment(index: number) {
//         const appointment = this.appointments[index];
//         if (confirm(`Are you sure you want to delete appointment ${appointment.id}?`)) {
//             this.appointments.splice(index, 1);
//             alert(`Appointment ${appointment.id} deleted successfully!`);

//             // Here, you'd send a delete request to your backend.
//         }
//     }
// }
