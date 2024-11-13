import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

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
interface Service {
  id: string;
  name: string;
  description: string;
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
  selectedService: Service | null = null; // For tracking the service being edited

  activeChild: string = 'overview';

  services: Service[] = [
    { id: '001', name: 'Wheel Balancing', description: 'Drive with Confidence – Let Your Wheels Find Their Balance!', price: 50 },
    { id: '002', name: 'Wheel Alignment', description: 'Drive Straight, Drive Safe – Precision Tire Alignment!', price: 70 }
    // Additional services can be initialized here
  ]; // Declare the services property

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

feedbacks: Feedback[] = [
  {
    id: 1,
    users: { userId: 1, email: 'john.doe@example.com' },
    rating: 5,
    comments: 'Excellent service! My tires were replaced quickly and professionally.',
    appointmentId: '1'
  },
  {
    id: 2,
    users: { userId: 2, email: 'jane.smith@example.com' },
    rating: 4,
    comments: 'Very helpful staff. The alignment service improved my driving experience significantly.',
    appointmentId: '2'
  },
  {
    id: 3,
    users: { userId: 3, email: 'alex.johnson@example.com' },
    rating: 5,
    comments: 'Fast and reliable. Great experience with the tire balancing!',
    appointmentId: '3'
  }
];

filteredFeedbacks = [...this.feedbacks]; // Initially show all feedbacks
  selectedRating = '';
  sortOrder = '';

  onFilterChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedRating = selectElement.value;
    this.applyFilters();
  }

  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.sortOrder = selectElement.value;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.feedbacks;

    // Filter by selected rating
    if (this.selectedRating) {
      filtered = filtered.filter(feedback => feedback.rating === +this.selectedRating);
    }

    // Sort based on selected order
    if (this.sortOrder === 'asc') {
      filtered.sort((a, b) => a.rating - b.rating);
    } else if (this.sortOrder === 'desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    this.filteredFeedbacks = filtered;
  }
loadFeedbacks() {
  this.appService.getFeedbacks().subscribe(
      (data: any) => {
          this.feedbacks = data; // Load data from service if available
      },
      (error: any) => {
          console.error('Error loading feedbacks:', error);
          // Default to example feedback data if there's an error
          this.feedbacks = [
              {
                  id: 1,
                  users: { userId: 1, email: 'john.doe@example.com' },
                  rating: 5,
                  comments: 'Excellent service! My tires were replaced quickly and professionally.',
                  appointmentId: '1'
              },
              {
                  id: 2,
                  users: { userId: 2, email: 'jane.smith@example.com' },
                  rating: 4,
                  comments: 'Very helpful staff. The alignment service improved my driving experience significantly.',
                  appointmentId: '2'
              },
              {
                  id: 3,
                  users: { userId: 3, email: 'alex.johnson@example.com' },
                  rating: 5,
                  comments: 'Fast and reliable. Great experience with the tire balancing!',
                  appointmentId: '3'
              }
          ];
      }
  );
}
chart: any;

  ngAfterViewInit() {
    this.createPieChart();
  }

  createPieChart() {
    // Count ratings
    const ratingCounts = this.feedbacks.reduce((acc, feedback) => {
      acc[feedback.rating] = (acc[feedback.rating] || 0) + 1;
      return acc;
    }, {} as { [key: number]: number });

    // Data preparation
    const labels = Object.keys(ratingCounts);
    const data = Object.values(ratingCounts);

    this.chart = new Chart("ratingPieChart", {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Rating Distribution',
          data: data,
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#2ecc71'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      }
    });
  }
updateService(service: Service) {
    // Logic to update the service
    this.services = this.services.filter(s => s.id !== service.id);
  }
editService(service: Service): void {
    // Logic to update the service
    this.selectedService = { ...service };
}
}


export class ManageServicesComponent {
  services: Service[] = [
    { id: '001', name: 'Wheel Balancing', description: 'Drive with Confidence – Let Your Wheels Find Their Balance!', price: 50 },
    { id: '002', name: 'Wheel Alignment', description: 'Drive Straight, Drive Safe – Precision Tire Alignment!', price: 70 }
    // Additional services can be initialized here
  ];

  constructor() {
    // Initialize any necessary properties or perform setup here
  }

  selectedService: Service | null = null; // For tracking the service being edited

  // Method to add a new service
  addService(id: string, name: string, serviceDescription: string, servicePrice: number) {
    const newService: Service = {
      id: id,
      name: name,
      description: serviceDescription,
      price: servicePrice
    };
    
    // Check if the service ID already exists
    if (this.services.find(service => service.id === newService.id)) {
      alert('Service ID already exists. Please use a different ID.');
      return;
    }

    this.services.push(newService);
    this.clearForm();
  }

  // Method to update an existing service
  updateService(serviceId: string, serviceName: string, serviceDescription: string, servicePrice: number) {
    if (this.selectedService) {
      this.selectedService.id = serviceId;
      this.selectedService.name = serviceName;
      this.selectedService.description = serviceDescription;
      this.selectedService.price = servicePrice;

      this.clearForm();
    }
  }

  // Method to delete a service
  deleteService(serviceId: string) {
    this.services = this.services.filter(service => service.id !== serviceId);
  }

  // Method to select a service for editing
  editService(service: Service) {
    this.selectedService = { ...service }; // Create a copy of the selected service
  }

  // Clear the form fields
  clearForm() {
    this.selectedService = null; // Reset selected service
    // Optionally reset form input values here if using template variables
  }
}







