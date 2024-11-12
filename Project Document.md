# Project Document

##1. Project Overview
Project Name: Wheel Alignment Center Web Application</br>
Objective: To create a web application for a wheel alignment center, including features for scheduling services, managing tire inventory, and handling customer feedback.</br>
Technologies Used: Angular (Frontend), Spring Boot (Backend), MySQL (Database), Spring AI (Potential use for intelligent features), JWT for authentication.</br>

##2. System Requirements
### Frontend
#### Angular Framework (Version 15+)</br>
Angular was chosen for the frontend due to its robust component-based structure, powerful data binding, and reactive forms. This enabled us to create a dynamic, interactive UI for our wheel alignment center application with easy routing and service integration.

#### Animations
We incorporated Angular’s animation library to enhance the user experience. Animations were applied to the register form fields and submit button on the registration page, giving the application a polished look. These animations make the app feel responsive and engaging, especially for form interactions.

#### Form Handling
Reactive forms were used in Angular for both the registration and appointment scheduling forms. Reactive forms made it straightforward to manage complex form validation and dynamically display error messages, ensuring that user input was captured and validated properly before submission.

#### Service Integration
Angular services were central to our application, managing data and business logic separately from the UI. Services like AuthService, AppointmentService, and FeedbackService allowed for clean communication between the frontend and backend, facilitating login, appointment scheduling, and feedback submission processes.

#### Token Storage
For authenticated sessions, we used local storage in Angular to store JWT tokens securely. Upon a successful login, the token received from the backend is stored locally, enabling seamless user authentication and access control throughout the application.

### Backend
#### Spring Boot Framework</br>
Spring Boot was selected for the backend because of its ease in creating REST APIs and managing dependencies. We leveraged Spring Boot’s embedded Tomcat server to simplify the deployment process, allowing our backend to be up and running quickly with minimal configuration.

#### JWT-based Authentication
JWT was used for secure authentication and session management. Upon successful login, the backend generates a JWT token, which is sent to the Angular frontend for storage. This token is then passed in the headers of requests to the backend to validate user access to protected routes, ensuring both security and ease of session handling.

#### MySQL Database
MySQL served as the database for storing user, service, appointment, and tire inventory data. We used Spring Data JPA for data access and CRUD operations on the database, taking advantage of JPA’s ORM features to map Java entities directly to MySQL tables, thus simplifying database interactions.

#### Database Indexing
Indexes were applied to key columns such as appointment_id and user_id to improve query performance, especially for frequently accessed data like scheduled appointments and user information. This approach optimized data retrieval, ensuring the application remained responsive under load.

#### Security
#### JWT and Role-Based Access Control
Role-based access control was implemented to restrict access based on user type (user vs. admin). JWT tokens contain role information, allowing our backend to differentiate between user and admin actions. For example, only users with an admin role can access endpoints for tire management and appointment modification.

#### Performance
#### Efficient Backend API Design
We focused on designing efficient API endpoints to handle data-intensive requests. By using pagination for lists (e.g., viewing all appointments or feedback), we minimized the load on the server and prevented data overload on the frontend.

#### Optimized Database Queries
To ensure fast response times, we used indexed columns and efficient SQL queries to handle common operations. Additionally, caching mechanisms (e.g., in-memory caching for repeated requests) helped reduce the need for redundant database access.

#### Scalability
#### Modular Design
Angular’s component-based structure and Spring Boot’s layered architecture made it easy to expand functionalities without impacting other parts of the application. Future enhancements, such as additional services or intelligent AI-powered suggestions, can be integrated with minimal code adjustments.

#### RESTful API Design
The use of RESTful endpoints in the backend ensured that future frontend clients (e.g., mobile apps) could easily integrate with the existing API structure, making the application scalable across multiple platforms.

#### Usability
#### User-Friendly UI
The application’s UI was designed with intuitive navigation and clear visual cues. Components like the appointment scheduling form are easy to use, guiding users through each step. Validation messages and button animations help users understand actions and outcomes, improving the overall usability of the app.

##3. Functional Requirements
### User Side
#### Home Page

The home page serves as the central navigation point, featuring a navbar with links to essential sections: Services, About Us, Contact Us, and Login.<br>
If a user clicks on "Services" without being logged in, the app checks their login status. If they’re not logged in, they are redirected to the login page, ensuring only authenticated users access service scheduling.<br>

#### Scheduling Appointment

Users can select from a range of services, such as tire replacement, alignment, balancing, and fusion repairs.<br>
The service list includes specific service details and prices, allowing users to choose based on their needs.<br>
For tire replacement, users can choose the tire model, which affects the total appointment cost.<br>
An appointment scheduling form appears once a service is selected, where users can pick a date and time. The chosen service ID is auto-filled in the form, simplifying data capture.</br>
Upon submission, the appointment details are sent to the backend, where they’re stored with the associated service ID and user ID, ensuring accurate tracking and organization of appointments.</br>

#### Feedback

Users have the option to leave reviews and feedback on the services received.<br>
The feedback form is accessible after an appointment, allowing users to share their experiences. This data is stored in the database, contributing to service quality improvement and customer satisfaction tracking.

### Admin Side
#### Main Page
The admin dashboard provides an overview of essential data, including scheduled appointments, tire inventory, and user reviews.</br>
The appointment list allows admins to view upcoming bookings, helping them prepare resources and allocate staff accordingly.</br>
Inventory data displays current tire stock, enabling admins to monitor and replenish stock as needed.<br>
Reviews are displayed in a dedicated section, where admins can gauge customer satisfaction and identify potential areas for improvement.</br>

#### Scheduling Appointment Management
Admins have full control over the appointment list, with the ability to view, edit, or delete appointments.</br>
This flexibility allows them to adjust appointment schedules based on user requests or operational needs, ensuring a well-coordinated workflow.</br>

#### Tire Management

The tire management feature lets admins update tire inventory, including stock quantities and tire details.</br>
Admins can add new tire models or adjust existing records, allowing the inventory to stay up-to-date and reflective of available options.</br>

#### Reviews Management
The admin side includes a review management section to monitor customer feedback and reviews.</br>
Admins can read reviews, analyze trends in customer feedback, and take necessary actions if issues arise, ensuring high service quality and customer satisfaction.

##4. System Architecture
### Components

#### app.component.ts:
The root component that acts as a container for all other components. It includes the main layout structure and serves as the entry point for navigation and service integration. The app component also manages the main navigation bar and common sections visible across different views.

#### services.component.ts:
This component lists the available services (tire replacement, alignment, balancing, and fusion repairs). Each service is displayed with a button to schedule an appointment. Clicking the "Schedule Appointment" button opens the appointment form, pre-filling the relevant service ID for ease of scheduling.

#### appointment-form.component.ts:
This component handles appointment scheduling, providing users with fields to select the appointment date and time. The form automatically populates with the chosen service ID, and on form submission, the data is sent to the backend. The form uses Angular’s reactive forms module for validation, ensuring correct user input.

#### feedback.component.ts:
This component includes a form for users to submit feedback after appointments. The feedback form is straightforward, collecting text-based feedback and ratings that are then stored in the backend for review by admins.

#### admin-dashboard.component.ts:
This is the main admin view, with tabs for managing appointments, tire stock, and user feedback. The component allows admins to monitor and manage key parts of the application efficiently, with quick access to each management feature.

### Services

#### AppointmentService:
Responsible for managing appointment scheduling, retrieval, and updates. It sends requests to the backend to schedule appointments and fetches the user’s appointments to display in their account dashboard.

#### TireService:
This service interacts with the backend to retrieve tire stock details and send updates when stock changes. TireService is used in the admin dashboard to manage inventory and keep data consistent between the frontend and backend.

#### FeedbackService:
Manages feedback submissions, allowing users to submit reviews and providing admins access to view and respond to feedback as needed.

### Backend Architecture (Spring Boot)
#### Controller Layer

#### UserController:
Manages user authentication and registration. It handles requests from the login and registration forms, validating user data, and issuing JWT tokens on successful login. The controller also restricts access to user-specific features based on login status.

#### AppointmentController:
Handles appointment scheduling and retrieval requests. This controller validates appointment data, assigns service and user IDs, and stores appointments in the database. It also supports retrieving scheduled appointments for both user and admin views.

#### TireController:
Manages the tire inventory, allowing admins to update stock details and retrieve tire information for display on the frontend. The controller ensures inventory updates are reflected accurately in both the admin view and the user-facing appointment scheduling.

#### FeedbackController:
Handles feedback submission and retrieval. It stores user-submitted feedback in the database and allows admins to view and analyze feedback to improve service quality.

### Service Layer

#### UserService:
Processes user-related data, including registration, login validation, and user profile management. UserService also integrates with the JWT utility to generate and validate tokens.

#### AppointmentService:
Processes appointment data, handles appointment creation, validation, and retrieves relevant details for each user. AppointmentService also supports admin-level updates to appointments if any modifications are required.

#### TireService:
Manages tire inventory updates, including adding new models, adjusting quantities, and retrieving inventory data. TireService is optimized to respond quickly to changes, reflecting updates immediately in the admin dashboard.

#### FeedbackService:
Handles feedback processing, including saving user-submitted feedback and organizing feedback data for admin review.

### Repository Layer

The repository layer uses Spring Data JPA for CRUD operations on the MySQL database tables. Each repository interface extends JPARepository, simplifying data access for entities like User, Appointment, Tire, and Feedback. This approach reduces boilerplate code, making data interactions efficient and secure.

### Data Flow

#### Frontend-Backend Interaction
The Angular frontend communicates with the Spring Boot backend through RESTful API calls. Each Angular service sends HTTP requests to specific endpoints, and the backend processes these requests, interacts with the database as needed, and returns responses to the frontend.

#### Database Management
Data consistency between the frontend and backend is maintained through CRUD operations on the MySQL database. With Spring Data JPA, each operation on the database follows the relational schema defined, ensuring that data is correctly stored, updated, and retrieved.

##5. Database Design

##6. Authentication and Authorization

##7. User Interface Design

##8. Api Endpoints

##9. Future Enhancements

