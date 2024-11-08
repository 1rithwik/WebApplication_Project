<<<<<<< HEAD
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
export interface Appointment {
  appointmentId: number;
=======
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
export interface Appointment {
<<<<<<< HEAD
  appointmentId: string;
>>>>>>> e4bde25 (Appointment Implemented for admin)
=======
  appointmentId: number;
>>>>>>> 08a1de2 (Jwt token in frontend)
  appointmentDate: string;
  appointmentStatus: string;
  appointmentTime: string;
  serviceId: number;
  userId: number;
}
<<<<<<< HEAD

export interface Tire {
  id: number;
  brand: string;
  model: string;
  stock: number;
  price: number;
}

export interface Feedback {
  id: number;
  users: {
    userId: number;
    email: string;
  };
  comments: string;
  rating: number;
  appointmentId: string;
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
    this.loadFeedbacks();
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
        this.appService.deleteAppointment(appointment.appointmentId).subscribe((data: any) => {
          console.log('Appointment deleted successfully:', data);
        },
        (error: any) => {
          console.error('Error deleting appointment:', error);
        }
      );
    }
  }

  tires: Tire[] = [
    { id: 1, brand: 'Michelin', model: '215/65R16', stock: 10, price: 120 },
    { id: 2, brand: 'Bridgestone', model: '205/55R16', stock: 15, price: 110 },
    { id: 3, brand: 'Goodyear', model: '225/50R17', stock: 8, price: 130 }
];

newTire: Tire = {
  id: 0,
  brand: '',
  model: '',
  stock: 0,
  price: 0
};

addTire(): void {
  if (this.newTire.brand && this.newTire.model && this.newTire.stock > 0 && this.newTire.price > 0) {
      this.newTire.id = this.generateNewId();
      this.tires.push({ ...this.newTire });
      this.clearNewTireForm();
  } else {
      alert('Please fill in all the fields with valid data.');
  }
}
// Generate a unique ID for each new tire
generateNewId(): number {
  return this.tires.length > 0 ? Math.max(...this.tires.map(t => t.id)) + 1 : 1;
}

// Clear the form after adding a tire
clearNewTireForm(): void {
  this.newTire = { id: 0, brand: '', model: '', stock: 0, price: 0 };
}
// Update an existing tire
updateTire(index: number): void {
  const updatedBrand = prompt('Enter new brand:', this.tires[index].brand);
  const updatedModel = prompt('Enter new model:', this.tires[index].model);
  const updatedstock = prompt('Enter new stock:', this.tires[index].stock.toString());
  const updatedPrice = prompt('Enter new price:', this.tires[index].price.toString());

  if (updatedBrand && updatedModel && Number(updatedstock) > 0 && Number(updatedPrice) > 0) {
      this.tires[index].brand = updatedBrand;
      this.tires[index].model = updatedModel;
      this.tires[index].stock = Number(updatedstock);
      this.tires[index].price = Number(updatedPrice);
  } else {
      alert('Please provide valid data for all fields.');
  }
}
// Delete a tire from stock
deleteTire(index: number): void {
  if (confirm(`Are you sure you want to delete the tire with ID ${this.tires[index].id}?`)) {
      this.tires.splice(index, 1);
  }
}

feedbacks: Feedback[] = [];

loadFeedbacks() {
    this.appService.getFeedbacks().subscribe((data: any) => {
    this.feedbacks = data;
  },
  (error: any) => {
    console.error('Error loading feedbacks:', error);
  }
);
}

}

=======
import { Component } from '@angular/core';
=======
>>>>>>> e4bde25 (Appointment Implemented for admin)

export interface Tire {
  id: number;
  brand: string;
  model: string;
  stock: number;
  price: number;
}

export interface Feedback {
  id: number;
  users: {
    userId: number;
    email: string;
  };
  comments: string;
  rating: number;
  appointmentId: string;
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
    this.loadFeedbacks();
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
        this.appService.deleteAppointment(appointment.appointmentId).subscribe((data: any) => {
          console.log('Appointment deleted successfully:', data);
        },
        (error: any) => {
          console.error('Error deleting appointment:', error);
        }
      );
    }
  }

  tires: Tire[] = [
    { id: 1, brand: 'Michelin', model: '215/65R16', stock: 10, price: 120 },
    { id: 2, brand: 'Bridgestone', model: '205/55R16', stock: 15, price: 110 },
    { id: 3, brand: 'Goodyear', model: '225/50R17', stock: 8, price: 130 }
];

newTire: Tire = {
  id: 0,
  brand: '',
  model: '',
  stock: 0,
  price: 0
};

addTire(): void {
  if (this.newTire.brand && this.newTire.model && this.newTire.stock > 0 && this.newTire.price > 0) {
      this.newTire.id = this.generateNewId();
      this.tires.push({ ...this.newTire });
      this.clearNewTireForm();
  } else {
      alert('Please fill in all the fields with valid data.');
  }
}
// Generate a unique ID for each new tire
generateNewId(): number {
  return this.tires.length > 0 ? Math.max(...this.tires.map(t => t.id)) + 1 : 1;
}
<<<<<<< HEAD
>>>>>>> dd90d20 (Login routed)
=======

// Clear the form after adding a tire
clearNewTireForm(): void {
  this.newTire = { id: 0, brand: '', model: '', stock: 0, price: 0 };
}
// Update an existing tire
updateTire(index: number): void {
  const updatedBrand = prompt('Enter new brand:', this.tires[index].brand);
  const updatedModel = prompt('Enter new model:', this.tires[index].model);
  const updatedstock = prompt('Enter new stock:', this.tires[index].stock.toString());
  const updatedPrice = prompt('Enter new price:', this.tires[index].price.toString());

  if (updatedBrand && updatedModel && Number(updatedstock) > 0 && Number(updatedPrice) > 0) {
      this.tires[index].brand = updatedBrand;
      this.tires[index].model = updatedModel;
      this.tires[index].stock = Number(updatedstock);
      this.tires[index].price = Number(updatedPrice);
  } else {
      alert('Please provide valid data for all fields.');
  }
}
// Delete a tire from stock
deleteTire(index: number): void {
  if (confirm(`Are you sure you want to delete the tire with ID ${this.tires[index].id}?`)) {
      this.tires.splice(index, 1);
  }
}

feedbacks: Feedback[] = [];

loadFeedbacks() {
    this.appService.getFeedbacks().subscribe((data: any) => {
    this.feedbacks = data;
  },
  (error: any) => {
    console.error('Error loading feedbacks:', error);
  }
);
}

}

<<<<<<< HEAD

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
>>>>>>> e4bde25 (Appointment Implemented for admin)
=======
>>>>>>> b7e04c6 (Feedback admin initialized)
