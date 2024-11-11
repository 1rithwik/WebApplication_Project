import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
export interface Appointment {
  appointmentId: number;
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
    this.loadTires();
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
];

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
// Delete a tire from stock
deleteTire(index: number) {
  const tire = this.tires[index];
  if (confirm(`Are you sure you want to delete tire ${tire.id}?`)) {
    this.tires.splice(index, 1);
    alert(`Tire ${tire.id} deleted successfully!`);
    this.appService.deleteTire(tire.id).subscribe((data: any) => {
      console.log('Tire deleted:', data);
    });
  }
}

loadTires() {
  this.appService.getTires().subscribe((data: any) => {
    this.tires = data;
  });
}

newTire: Tire = {
  id: 0,
  brand: '',
  model: '',
  stock: 0,
  price: 0
};

addTireToDatabase() {
  this.appService.addTire(this.newTire).subscribe((data: any) => {
    this.tires.push(data);
  });
}

updateTire(index: number): void {
  const updatedBrand = prompt('Enter new brand:', this.tires[index].brand);
  const updatedModel = prompt('Enter new model:', this.tires[index].model);
  const updatedstock = prompt('Enter new stock:', this.tires[index].stock.toString());
  const updatedPrice = prompt('Enter new price:', this.tires[index].price.toString());
  
  if (updatedBrand && updatedModel && Number(updatedstock) > 0 && Number(updatedPrice) > 0) {
      const updatedTire = {
        id: this.tires[index].id,
        brand: updatedBrand,
        model: updatedModel,
        stock: Number(updatedstock),
        price: Number(updatedPrice)
      };
      
      this.appService.updateTire(updatedTire).subscribe(
        (response: any) => {
          this.tires[index] = updatedTire;
          alert('Tire updated successfully!');
        },
        (error) => {
          console.error('Error updating tire:', error);
          alert('Failed to update tire. Please try again.');
        }
      );
  } else {
      alert('Please provide valid data for all fields.');
  }
}

showUpdate: boolean = false;
selectedTire: Tire = {
  id: 0,
  brand: '',
  model: '',
  stock: 0,
  price: 0
};

showUpdateForm(index: number) {
  this.showUpdate = true;
  this.selectedTire = { ...this.tires[index] };
}

updateTireForm() {
  if (this.selectedTire.brand && this.selectedTire.model && this.selectedTire.stock > 0 && this.selectedTire.price > 0) {
    this.appService.updateTire(this.selectedTire).subscribe(
      (response: any) => {
        const index = this.tires.findIndex(t => t.id === this.selectedTire.id);
        if (index !== -1) {
          this.tires[index] = { ...this.selectedTire };
        }
        this.showUpdate = false;
        alert('Tire updated successfully!');
      },
      (error) => {
        console.error('Error updating tire:', error);
        alert('Failed to update tire. Please try again.');
      }
    );
  } else {
    alert('Please provide valid data for all fields.');
  }
}

cancelUpdate() {
  this.showUpdate = false;
  this.selectedTire = {
    id: 0,
    brand: '',
    model: '',
    stock: 0,
    price: 0
  };
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

