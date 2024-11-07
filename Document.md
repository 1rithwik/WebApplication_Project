Project Document
1. Project Overview
Project Name: Wheel Alignment Center Web Application

Objective:
Develop a user-friendly web application tailored for a wheel alignment center. This platform will allow customers to schedule various tire-related services, check availability, and provide feedback. The application will also enable the center’s admin to manage tire inventory, handle service appointments, and oversee customer reviews.

Technologies Used:

Frontend: Angular, focusing on building interactive user interfaces.
Backend: Spring Boot, implementing secure and efficient REST APIs.
Database: MySQL, structured for customer, service, and inventory data.
Authentication: JSON Web Tokens (JWT) for secure login and session management.
2. System Requirements
Frontend:

Angular version 15 or higher.
Features required: animations, form handling, API integration for service requests, and JWT token storage for session management.
Backend:

Spring Boot with RESTful API capabilities.
JWT-based authentication to ensure secure access.
Integration with MySQL for data storage and retrieval.
Database:

MySQL with tables for user information, service appointments, tire inventory, and customer feedback.
3. Functional Requirements
User Side
Home Page:

A navigation bar with links to "Services," "About Us," "Contact Us," and "Login."
Users must log in to access the full range of services.
Scheduling Appointments:

Users can view a list of available services, such as tire replacement, wheel alignment, balancing, and fusion repairs.
The "Tire Replacement" option allows users to select specific tire models.
Users can schedule an appointment by choosing a preferred date and time.
Feedback:

Logged-in users can submit reviews and feedback about their service experience.
Admin Side
Admin Dashboard:

A central dashboard to view upcoming appointments, current tire inventory levels, and user-submitted reviews.
Appointment Management:

Admins can view, edit, or delete appointments.
Tire Management:

The inventory can be updated with current stock levels and details about available tire models.
Review Management:

Admins have control over user feedback, with options to manage or moderate reviews.
4. Non-Functional Requirements
Security:
JWT-based user authentication and role-based access to secure user data and restrict admin functions.

Performance:
The application should provide fast load times and handle queries efficiently.

Scalability:
The system is designed to handle an increasing number of users and service requests as the business expands.

Usability:
A clean, intuitive UI with easy navigation to enhance user experience and engagement.

5. System Architecture
Frontend Architecture (Angular)
Components:

app.component.ts: The main container that houses other components.
services.component.ts: Displays the list of available services with scheduling options.
appointment-form.component.ts: Form component for scheduling appointments.
feedback.component.ts: Form for users to submit feedback.
admin-dashboard.component.ts: Admin view with tabs for managing appointments, inventory, and user reviews.
Services:

AuthService: Handles user authentication (login and registration).
AppointmentService: Manages appointments, including scheduling and data retrieval.
TireService: Manages tire stock updates and retrieval.
FeedbackService: Manages user feedback processing.
Backend Architecture (Spring Boot)
Controller Layer:

UserController: Manages user registration, login, and profile actions.
AppointmentController: Handles appointment scheduling and retrieval.
TireController: Manages tire stock updates.
FeedbackController: Processes user feedback.
Service Layer:

UserService: Processes user-related data.
AppointmentService: Manages business logic for appointments.
TireService: Handles inventory management.
FeedbackService: Processes and stores user feedback.
Repository Layer:

Uses Spring Data JPA for CRUD operations, providing seamless database interaction.
6. Database Schema
Tables:

Users: Stores user data such as username, password, and contact information.
Appointments: Holds records of scheduled appointments, including date, time, and service details.
Services: Lists the available services with descriptions and pricing.
Tires: Maintains inventory details of different tire models and stock levels.
Feedback: Records user reviews and ratings for services.
7. Authentication and Authorization
JWT Authentication Flow:

The frontend sends user credentials (username and password) to the backend.
The backend verifies the credentials and, if valid, returns a JWT token.
The frontend securely stores the JWT token and attaches it to requests for protected resources.
Role-Based Access Control:

User Role: Limited to booking appointments and submitting feedback.
Admin Role: Authorized to manage inventory, view appointments, and moderate feedback.
8. Detailed UI Design
Register Page: Contains fields for username, password, email, and mobile number. Includes animations for a smooth user experience.
Login Page: Provides feedback for invalid credentials.
Service Page: Lists available services with buttons to schedule appointments.
Appointment Form: Enables date and time selection, with service options pre-filled.
Admin Dashboard: Organized into tabs for managing appointments, tire inventory, and feedback.
9. API Endpoints
Authentication:

POST /api/auth/register: Registers a new user account.
POST /api/auth/login: Authenticates a user and returns a JWT token.
Appointments:

GET /api/appointments: Retrieves all scheduled appointments.
POST /api/appointments: Schedules a new appointment.
Tires:

GET /api/tires: Retrieves current tire inventory.
PUT /api/tires/{id}: Updates specific tire details.
Feedback:

POST /api/feedback: Allows users to submit feedback.
GET /api/feedback: Retrieves feedback and reviews.
10. Future Enhancements
AI Integration with Spring: For predictive maintenance and service suggestions.
Expanding Services: Adding more options as the business grows.
Enhanced Analytics for Admin: Enabling data visualization to analyze service trends and customer feedback.
