# Project Details

To see more detailed information about the project, please refer to the [Project Document](Project Document.md).

## 1. Project Overview
Project Name: Wheel Alignment Center Web Application</br>
Objective: To create a web application for a wheel alignment center, including features for scheduling services, managing tire inventory, and handling customer feedback.</br>
Technologies Used: Angular (Frontend), Spring Boot (Backend), MySQL (Database), JWT for authentication.</br>

## 2. System Requirements
Frontend: Angular 15+, animations, form handling, service integration, and token storage.</br>
Backend: Spring Boot with RESTful APIs, JWT-based authentication, and integration with MySQL.</br>
Database: MySQL with tables for user data, appointments, services, tires, and reviews.</br>

## 3. Functional Requirements
### User Side</br>
#### Home Page:</br>
Navbar with links to Services, About Us, Contact Us, and Login.</br>
Services are accessible only if the user is logged in.</br>
#### Scheduling Appointment:</br>
Lists available services, including tire replacement, alignment, balancing, and fusion repairs.</br>
Tire replacement includes an option for selecting a tire model.</br>
Users can schedule appointments with specified dates and times.</br>
#### Feedback:</br>
Users can leave reviews and feedback on services received.</br>
### Admin Side</br>
#### Main Page:</br>
View scheduled appointments, tire stock, and user reviews.</br>
Scheduling Appointment Management:</br>
View, edit, or delete appointment records.</br>
#### Tire Management:</br>
Update and edit tire inventory information.</br>
#### Reviews Management:</br>
View and manage user reviews.</br>

## 4. Non-Functional Requirements
Security: JWT for user authentication, and role-based access control.</br>
Performance: Quick load times and efficient database queries.</br>
Scalability: The application should be able to handle a growing number of users and appointments.</br>
Usability: User-friendly UI with intuitive navigation and clear forms.</br>

## 5. System Architecture
### Frontend Architecture (Angular)</br>
#### Components:</br>
app.component.ts: Main container for other components.</br>
services.component.ts: Displays services list with buttons to schedule appointments.</br>
appointment-form.component.ts: Appointment scheduling form.</br>
feedback.component.ts: Feedback form for users.</br>
admin-dashboard.component.ts: Admin view with tabs for appointments, inventory, and reviews.</br>
#### Services:</br>
AuthService: Handles login and registration requests.</br>
AppointmentService: Manages appointment scheduling and retrieval.</br>
TireService: Updates and retrieves tire stock details.</br>
FeedbackService: Handles user feedback.</br>
### Backend Architecture (Spring Boot)</br>
#### Controller Layer</br>
UserController: Manages user registration and login.</br>
AppointmentController: Manages scheduling and appointment retrieval.</br>
TireController: Manages tire stock.</br>
FeedbackController: Handles user feedback.</br>
#### Service Layer</br>
UserService: Processes user data.</br>
AppointmentService: Processes appointments.</br>
TireService: Processes tire data.</br>
FeedbackService: Processes feedback data.</br>
#### Repository Layer</br>
Uses Spring Data JPA for CRUD operations on MySQL database tables.</br>

## 6. Database Schema
Tables: Users, Appointments, Services, Tires, Feedback.</br>

## 7. Authentication and Authorization
#### JWT Authentication Flow:</br>
Frontend sends username and password to backend.</br>
Backend verifies credentials and returns a JWT token.</br>
Frontend stores the token, sending it with requests to access protected resources.</br>
#### Role-Based Access Control:</br>
Users have basic access (appointment booking, feedback).</br>
Admins have extended permissions (manage inventory, view appointments, feedback).</br>

## 8. Detailed UI Design
Register Page: Form fields for username, password, email, mobile with animations.</br>
Login Page: Username and password fields, with feedback for invalid credentials.</br>
Service Page: Lists services with buttons to schedule appointments.</br>
Appointment Form: Date and time selection, service pre-filled based on selected service.</br>
Admin Dashboard: Tabs for viewing appointments, managing tire stock, and handling feedback.</br>

## 9. API Endpoints
#### Authentication:</br>
POST /api/auth/register: Registers a new user.</br>
POST /api/auth/login: Logs in and returns a token.</br>
#### Appointments:</br>
GET /api/appointments: Gets a list of scheduled appointments.</br>
POST /api/appointments: Schedules a new appointment.</br>
#### Tires:</br>
GET /api/tires: Retrieves tire stock.</br>
PUT /api/tires/{id}: Updates tire information.</br>
#### Feedback:</br>
POST /api/feedback: Submits a review or feedback.</br>
GET /api/feedback: Retrieves user feedback.</br>

## 10. Future Enhancements
Integrating Spring AI: For predictive maintenance or automated suggestions.</br>
Expanding Services: Add more services or appointment types as the business grows.</br>
Enhanced Admin Analytics: Adding dashboard features to analyze customer feedback and service usage trends.</br>

