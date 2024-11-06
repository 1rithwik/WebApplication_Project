1. Project Overview
Project Name: Wheel Alignment Center Web Application
Objective: To create a web application for a wheel alignment center, including features for scheduling services, managing tire inventory, and handling customer feedback.
Technologies Used: Angular (Frontend), Spring Boot (Backend), MySQL (Database), JWT for authentication.

2. System Requirements
Frontend: Angular 15+, animations, form handling, service integration, and token storage.
Backend: Spring Boot with RESTful APIs, JWT-based authentication, and integration with MySQL.
Database: MySQL with tables for user data, appointments, services, tires, and reviews.

3. Functional Requirements
User Side
Home Page:
Navbar with links to Services, About Us, Contact Us, and Login.
Services are accessible only if the user is logged in.

Scheduling Appointment:
Lists available services, including tire replacement, alignment, balancing, and fusion repairs.
Tire replacement includes an option for selecting a tire model.
Users can schedule appointments with specified dates and times.

Feedback:
Users can leave reviews and feedback on services received.

Admin Side
Main Page:
View scheduled appointments, tire stock, and user reviews.
Scheduling Appointment Management:
View, edit, or delete appointment records.

Tire Management:
Update and edit tire inventory information.

Reviews Management:
View and manage user reviews.

4. Non-Functional Requirements
Security: JWT for user authentication, and role-based access control.
Performance: Quick load times and efficient database queries.
Scalability: The application should be able to handle a growing number of users and appointments.
Usability: User-friendly UI with intuitive navigation and clear forms.

5. System Architecture
Frontend Architecture (Angular)
Components:
app.component.ts: Main container for other components.
services.component.ts: Displays services list with buttons to schedule appointments.
appointment-form.component.ts: Appointment scheduling form.
feedback.component.ts: Feedback form for users.
admin-dashboard.component.ts: Admin view with tabs for appointments, inventory, and reviews.

Services:
AuthService: Handles login and registration requests.
AppointmentService: Manages appointment scheduling and retrieval.
TireService: Updates and retrieves tire stock details.
FeedbackService: Handles user feedback.

Backend Architecture (Spring Boot)
Controller Layer
UserController: Manages user registration and login.
AppointmentController: Manages scheduling and appointment retrieval.
TireController: Manages tire stock.
FeedbackController: Handles user feedback.

Service Layer
UserService: Processes user data.
AppointmentService: Processes appointments.
TireService: Processes tire data.
FeedbackService: Processes feedback data.

Repository Layer
Uses Spring Data JPA for CRUD operations on MySQL database tables.

6. Database Schema
Tables: Users, Appointments, Services, Tires, Feedback.

7. Authentication and Authorization
JWT Authentication Flow:
Frontend sends username and password to backend.
Backend verifies credentials and returns a JWT token.
Frontend stores the token, sending it with requests to access protected resources.

Role-Based Access Control:
Users have basic access (appointment booking, feedback).
Admins have extended permissions (manage inventory, view appointments, feedback).

8. Detailed UI Design
Register Page: Form fields for username, password, email, mobile with animations.
Login Page: Username and password fields, with feedback for invalid credentials.
Service Page: Lists services with buttons to schedule appointments.
Appointment Form: Date and time selection, service pre-filled based on selected service.
Admin Dashboard: Tabs for viewing appointments, managing tire stock, and handling feedback.

9. API Endpoints
Authentication:
POST /api/auth/register: Registers a new user.
POST /api/auth/login: Logs in and returns a token.

Appointments:
GET /api/appointments: Gets a list of scheduled appointments.
POST /api/appointments: Schedules a new appointment.

Tires:
GET /api/tires: Retrieves tire stock.
PUT /api/tires/{id}: Updates tire information.

Feedback:
POST /api/feedback: Submits a review or feedback.
GET /api/feedback: Retrieves user feedback.

10. Future Enhancements
Integrating Spring AI: For predictive maintenance or automated suggestions.
Expanding Services: Add more services or appointment types as the business grows.
Enhanced Admin Analytics: Adding dashboard features to analyze customer feedback and service usage trends.
