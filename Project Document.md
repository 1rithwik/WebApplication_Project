# Project Document

## 1. Project Overview
Project Name : Wheel Alignment Center Web Application</br>
Objective: To create a web application for a wheel alignment center, including features for scheduling services, managing tire inventory, and handling customer feedback.</br>
Technologies Used: Angular (Frontend), Spring Boot (Backend), MySQL (Database), Spring AI (Potential use for intelligent features), JWT for authentication.</br>

## 2. System Requirements
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

## 3. Functional Requirements
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

## 4. System Architecture
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
The database schema includes several interrelated tables, each serving a specific purpose within the application. Below is an overview of the primary tables, their relationships, and the rationale for their design.

### 1. Users Table
#### Purpose: Stores user details for both customers and administrators, including authentication credentials and user roles.
#### Columns:
user_id (BIGINT, Primary Key, Auto-Increment): Unique identifier for each user.
username (VARCHAR): Username chosen by the user.
password (VARCHAR): Encrypted password for user authentication.
email (VARCHAR): User’s email address.
mobile (VARCHAR): Contact number for communication.
role (ENUM): Specifies the user role, either 'USER' or 'ADMIN'.
created_at (TIMESTAMP): Record creation timestamp.

### 2. Appointments Table
#### Purpose: Stores scheduling details for user appointments, linked to specific services and users.
#### Columns:
appointment_id (BIGINT, Primary Key, Auto-Increment): Unique identifier for each appointment.</br>
appointment_date (DATE): Date of the appointment.</br>
appointment_time (TIME): Time of the appointment.</br>
appointment_status (VARCHAR): Status of the appointment (e.g., 'Pending', 'Completed', 'Cancelled').</br>
service_id (BIGINT, Foreign Key): Links to the Services table to specify the service for the appointment.</br>
user_id (BIGINT, Foreign Key): Links to the Users table, identifying the customer for the appointment.</br>

### 3. Services Table
#### Purpose: Stores the details of available services offered by the center.
#### Columns:
service_id (BIGINT, Primary Key, Auto-Increment): Unique identifier for each service.</br>
service_name (VARCHAR): Name of the service (e.g., 'Tire Replacement', 'Wheel Alignment').</br>
description (TEXT): Detailed description of the service.</br>
price (DECIMAL): Cost of the service.</br>

### 4. Tires Table
#### Purpose: Manages tire inventory details for sale and replacement.
#### Columns:
tire_id (BIGINT, Primary Key, Auto-Increment): Unique identifier for each tire.</br>
model (VARCHAR): Model name or number of the tire.</br>
brand (VARCHAR): Brand of the tire.</br>
price (DECIMAL): Cost of the tire.</br>
quantity_in_stock (INT): Available stock quantity.</br>

### 5. Feedback Table
#### Purpose: Stores user feedback and reviews for services, allowing administrators to monitor and manage customer satisfaction.
#### Columns:
feedback_id (BIGINT, Primary Key, Auto-Increment): Unique identifier for each feedback entry.</br>
user_id (BIGINT, Foreign Key): Links to the Users table to identify the customer.</br>
service_id (BIGINT, Foreign Key): Links to the Services table to specify the service for which feedback was provided.</br>
rating (INT): Customer rating for the service (e.g., 1 to 5).</br>
review (TEXT): Text of the customer’s review.</br>
review_date (TIMESTAMP): Date when the review was submitted.</br>

### Database Relationships
#### One-to-Many: Between Users and Appointments as each user can have multiple appointments.
#### Many-to-One: Between Appointments and Services as each appointment is for one specific service.
#### One-to-Many: Between Users and Feedback as each user can provide multiple reviews.
#### Many-to-One: Between Feedback and Services as feedback is service-specific.
#### One-to-Many: Between Tires and Appointments for services that involve tire replacement.

### Design Considerations
Data Integrity: Using foreign key constraints to maintain relational integrity between tables (e.g., user_id in Appointments references Users).</br>
Normalization: Following normalization principles to minimize data redundancy, especially in storing user, service, and appointment details.</br>
Optimized Performance: Indexing columns frequently queried, like appointment_date and service_id, to enhance read performance for scheduling and service listing features.</br>
Security: Encrypting sensitive data, such as password in Users, and using roles to manage access levels across the user interface.

## 6. Authentication and Authorization

## 7. User Interface Design

The UI is divided into User Side and Admin Side sections, each containing dedicated pages for specific functionalities.

### User Side
#### Home Page

#### Purpose: Acts as the landing page, introducing the services and providing navigation options.
#### Components:
Hero Banner: Display a welcoming banner with a carousel of images showcasing available services.</br>
Navigation Bar: Links to Services, About Us, Contact Us, and Login. If not logged in, clicking on Services redirects to the login page.</br>
Service Highlights: Briefly showcase popular services, such as "Wheel Alignment" and "Tire Replacement."</br>
Schedule Appointment Button: Directs users to the appointment scheduling page.</br>

#### Services Page

#### Purpose: Lists all services provided by the wheel alignment center, along with detailed descriptions and prices.
#### Components:
Service Cards: Each service displayed as a card with:</br>
Service name and description</br>
Price details</br>
"Schedule Appointment" button for each service.</br>
Schedule Appointment Form: Appears when a service's "Schedule Appointment" button is clicked, pre-filling the selected service ID. The user can choose the appointment date and time.</br>

#### Appointment Scheduling Page

#### Purpose: Allows users to book appointments for selected services.
#### Components:
Service Selector: Dropdown or card selection for service choice.</br>
Date and Time Picker: To select the desired appointment date and time.</br>
Confirmation Button: Submits appointment details.</br>

#### Feedback Page

#### Purpose: Enables users to submit feedback or reviews for services they’ve used.
#### Components:
Feedback Form: Contains fields for rating (1-5 stars), review text, and submission button.</br>
User Review Section: Displays recent user feedback and ratings.</br>

### Admin Side
#### Admin Dashboard

#### Purpose:
Acts as a central hub for administrators to manage appointments, view feedback, and handle inventory.
#### Components:
Dashboard Menu: Sidebar with links to Appointments, Tire Stock, User Reviews, and Service Management.</br>
Quick Stats: Displays statistics like total appointments, available stock, and recent feedback highlights.</br>

### Appointments Management Page

#### Purpose:
Enables admins to view and manage scheduled appointments.
#### Components:
Appointment Table: Displays all appointments with columns for user details, service, date, time, and status.</br>
Action Buttons: Options to update appointment status (e.g., Completed, Cancelled) or delete appointments.</br>
Search Function: Allows filtering of appointments by date, user, or service.</br>

#### Tire Inventory Management Page

#### Purpose: Manages tire stock information, enabling administrators to update or add inventory.
#### Components:
Inventory Table: Lists tire models, brand, price, and quantity in stock.</br>
Update Stock Form: Allows admins to edit quantity and price details for each tire model.</br>

#### User Feedback Page

#### Purpose: Allows admins to view, filter, and delete feedback submitted by users.
#### Components:
Feedback List: Displays a list of all user feedback, sortable by rating, date, or service.</br>
Delete Option: Provides the option to delete inappropriate or unnecessary feedback.</br>

### User Interface Design Considerations
Responsiveness: Design optimized for both mobile and desktop views to enhance accessibility for all users.</br>
Consistency: Use a cohesive color scheme, typography, and button styling across all pages.</br>
User-Friendly Forms: Ensure all forms have clear field labels, validations, and feedback on form submission.</br>
Intuitive Navigation: Maintain easy-to-navigate menus and clear calls to action on each page, ensuring users can quickly access their desired functions.</br>


## 8. Api Endpoints

### 1. Authentication
#### Login

URL: /login</br>
Method: POST</br>

Request Body:</br>
{</br>
  "username": "string",</br>
  "password": "string"</br>
}</br>

Response:</br>
{</br>
  "token": "string",</br>
  "user": {</br>
    "id": "number",</br>
    "username": "string",</br>
    "role": "string",</br>
    "email": "string"</br>
  }</br>
}</br>
Description: Authenticates user credentials and returns a JWT token if successful.</br>
Status Codes:</br>
200 OK: Login successful</br>
401 Unauthorized: Invalid credentials</br>

#### Register

URL: /register
Method: POST</br>

Request Body:</br>
{</br>
  "username": "string",</br>
  "password": "string",</br>
  "email": "string",</br>
  "mobile": "string"</br>
}</br>

Response: Confirmation message indicating successful registration.</br>
Status Codes:</br>
201 Created: User successfully registered</br>
400 Bad Request: Validation errors or missing fields</br>

### 2. User Services
#### Get All Services

URL: /user/service/all</br>
Method: GET</br>
Authorization: Bearer token required (JWT in Authorization header)</br>
Response:</br>
[</br>
  {</br>
    "service_id": "number",</br>
    "service_name": "string",</br>
    "description": "string",</br>
    "price": "number"</br>
  }</br>
]</br>
Description: Fetches the list of available services.</br>
Status Codes:</br>
200 OK: Returns list of services</br>
403 Forbidden: User not authorized</br>

#### Schedule Appointment

URL: /user/service/scheduleAppointment</br>
Method: POST</br>
Request Body:</br>
{</br>
  "user_id": "number",</br>
  "service_id": "number",</br>
  "appointment_date": "string",</br>
  "appointment_time": "string"</br>
}</br>
Response: Confirmation message with scheduled appointment details.</br>
Status Codes:</br>
201 Created: Appointment successfully scheduled</br>
400 Bad Request: Missing or incorrect data fields</br>

### 3. Feedback
#### Submit Feedback

URL: /user/service/submitFeedback</br>
Method: POST</br>
Request Body:</br>
{</br>
  "user_id": "number",</br>
  "service_id": "number",</br>
  "rating": "number",</br>
  "comments": "string"</br>
}</br>
Response: Confirmation of feedback submission.</br>
Status Codes:</br>
201 Created: Feedback submitted</br>
400 Bad Request: Invalid feedback format</br>

#### Get All Feedback (Admin Only)

URL: /admin/feedback/all</br>
Method: GET</br>
Authorization: Bearer token required (Admin role)</br>
Response:</br>
[</br>
  {</br>
    "feedback_id": "number",</br>
    "user_id": "number",</br>
    "service_id": "number",</br>
    "rating": "number",</br>
    "comments": "string",</br>
    "date_submitted": "string"</br>
  }</br>
]</br>
Status Codes:</br>
200 OK: Returns list of feedback</br>
403 Forbidden: Unauthorized access</br>

### 4. Appointment Management (Admin Only)
#### View All Appointments

URL: /admin/appointments</br>
Method: GET</br>
Authorization: Bearer token required (Admin role)</br>
Response:</br>
[</br>
  {</br>
    "appointment_id": "number",</br>
    "user_id": "number",</br>
    "service_id": "number",</br>
    "appointment_date": "string",</br>
    "appointment_time": "string",</br>
    "status": "string"</br>
  }</br>
]</br>
Description: Fetches all scheduled appointments.</br>
Status Codes:</br>
200 OK: Returns list of appointments</br>
403 Forbidden: Unauthorized access</br>

#### Update Appointment Status

URL: /admin/appointment/update</br>
Method: PUT</br>
Request Body:</br>
{</br>
  "appointment_id": "number",</br>
  "status": "string"</br>
}</br>
Response: Confirmation of updated appointment status.</br>
Status Codes:</br>
200 OK: Appointment status updated</br>
400 Bad Request: Missing or incorrect data fields</br>

### 5. Error Codes
200 OK: Request successful</br>
201 Created: Resource created successfully</br>
400 Bad Request: Invalid input data</br>
401 Unauthorized: Authentication required</br>
403 Forbidden: Insufficient permissions</br>
404 Not Found: Resource not found</br>

## 9. Specifying few features that we added in our project

### 1. Caching
To optimize the performance and reduce database load in our project, we integrated Caffeine Cache. This allows for faster access to frequently requested data by temporarily storing it in memory. Here’s how we implemented caching:

####User Appointments Cache:

Purpose: Stores user appointment data to prevent repeated database calls for the same user requests.</br>
Configuration:</br>
Maximum Size: 100 entries.</br>
Expiration: 60 minutes after the cache entry is written.</br>

####User Cache:

Purpose: Stores frequently accessed user data to improve response times for user-related endpoints.</br>
Configuration:</br>
Maximum Size: 100 entries.</br>
Expiration: 30 minutes after the cache entry is written.</br>
These caches ensure that frequently accessed information remains readily available without continuously querying the database, improving both the application’s responsiveness and scalability.</br>

### 2. Transaction Management

To ensure data consistency during the appointment scheduling process, we implemented transaction management using the @Transactional annotation. This helps to maintain atomicity and data integrity, especially when multiple database operations are involved. Here’s a breakdown of how transaction management is applied in our scheduleAppointment method:</br>

#### 1.Objective:
To schedule a user’s service appointment and, if necessary, reserve the specified tire model and quantity. The method should complete successfully only if all steps are executed without any issues.</br>

#### 2.Transactional Steps:
User and Service Retrieval: Retrieves the user and service details by their IDs.</br>
Tire Availability Check: If a tire model and quantity are specified, the system checks if the requested tire model and quantity are available. If unavailable, it throws an exception, rolling back the transaction.</br>
Slot Availability Check: Before creating an appointment, the method checks if the selected time slot is already booked. If it is, an exception is thrown to prevent double-booking, also rolling back the transaction.</br>

#### 3.Appointment Creation:
If all checks pass, a new Appointment object is created with the necessary details and saved to the database.</br>

#### 4.Rollback on Failure:
In the event of any error or exception during this process, the @Transactional annotation ensures that none of the changes are persisted to the database, thereby avoiding partial or inconsistent data entries.</br>

By handling transaction management in this way, the application maintains data integrity across multiple operations that are dependent on each other, ensuring a smooth and reliable scheduling process.</br>

## 10. Future Enhancements

To enhance the functionality and user experience of the application, we’ve identified several potential future improvements:

#### 1.Enhanced Appointment Management:
Automated Reminders: Integrate automated SMS or email reminders to reduce missed appointments and improve user satisfaction.</br>

#### 2.Comprehensive Reporting:
Real-Time Stock Levels: Enhance tire inventory management with real-time monitoring and low-stock alerts for seamless operations.</br>

#### 3.Advanced Caching Strategies:
Distributed Caching: Upgrade to a distributed cache (such as Redis) for better scalability and faster access times across multiple servers, especially useful as the application scales.</br>
Cache Eviction Policies: Implement more granular cache eviction policies to maintain data freshness while optimizing performance.

#### 4.User Personalization:
Service Recommendations: Introduce personalized service recommendations based on user history and preferences.</br>
Loyalty Programs: Implement loyalty programs where users can earn points for services and redeem them for discounts on future appointments.</br>

#### 5.Integration with Payment Gateways:
Enable online payment options for services, including options for popular payment methods (e.g., credit/debit cards, digital wallets) to make the booking process even more convenient.</br>

#### 6.AI-Powered Enhancements:
Predictive Maintenance: Leverage machine learning to predict optimal maintenance schedules based on vehicle data and service history.</br>
