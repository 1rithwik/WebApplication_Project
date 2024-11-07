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

