# Task Manager-inator (TMI)
A cloud-based task management system using Angular (TypeScript), REST API (C#), and relational database architecture (SQL).

---

## Overview

The project selected for this assignment is a task management application. This project aligns with the intended goal of developing a cloud-based application with a user interface (UI) for frontend interaction, a RESTful API for communication between system layers, and a database for storing persistent data. The application, named The Task Manager-inator (TMI), will be developed following the Software Development Lifecycle (SDLC) as closely as possible.
TMI is designed as a scalable web application that emphasizes usability, organization, and secure data handling. The system will support both individual users and organizational teams, providing role-based access to tasks, administrative features, and reporting functionality.

### Purpose

The purpose of this software is to provide users with a platform for managing and tracking tasks associated with an individual user profile. Each user will be able to create an account that tracks current, past, and upcoming tasks. Users will have the ability to create, edit, and delete their own tasks and will only be able to view or interact with tasks associated with their profile or an organization to which they are linked.
In addition, the system will support optional notification features, such as automated email or in-application reminders, to alert users of approaching deadlines or pending tasks. The overall design goal is to provide a simple, functional, and organized task management system. The target audience for this application includes individual users and small teams or organizations.

### High-Level Functionality

Upon accessing the application, users will be prompted to log in to an existing account or register a new account. After authentication, users will gain access to their personalized task dashboard and account management page.

The account management page will allow users to:
* Update personal contact information
* Create an organization
* Request access to an existing organization

The task dashboard will display:
* The user's individual tasks
* Links to organizational task boards for organizations they belong to

Users will be able to create, edit, and delete tasks. Each task will include a task title, description, deadline, assigned user, and an optional reminder setting. Certain features will be role-based, with permissions verified through user roles stored in the database.
An administrative interface will allow authorized users to:
* Manage user accounts
* Manage organizations
* View, update, and delete stored task data

### Flow of Data

When users access the application, they are prompted to enter login credentials. This user input is submitted through the UI and forwarded to the RESTful API for processing and validation. During account creation, the API checks whether the submitted username already exists in the database. If no match is found, a new user account is created, and the user is redirected to the home page. If a match is found, the user is notified that the username is unavailable.
For existing users, the API validates login credentials by comparing them to stored database values. Successful authentication grants access to the user's dashboard, while invalid credentials generate an error message.
Once authenticated, the frontend requests task and organization data from the API. The API queries the database for all tasks and organizations associated with the user and returns this data to the frontend for display. When users navigate to their account management or organization pages, similar requests are made to retrieve the appropriate data.
Task updates follow the same data flow. User input is validated by the API, permissions are verified based on role assignments, and approved changes are persisted in the database.

### Database Design

The system will utilize a relational database consisting of multiple interrelated tables. Key tables include:
* User Table: Stores user ID, name, contact information, login credentials, and administrative status
* Organization Table: Stores organization ID, organization name, approved user IDs, and organization administrator IDs
* Task Table: Stores task ID, description, deadline, reminder flag, assigned user ID, and assigned organization ID
Additional tables and attributes may be introduced as system requirements expand during development.

### Project Plan

Initial development will focus on finalizing the technology stack and software frameworks used for system implementation. Following this, architecture and data flow diagrams will be designed to define system interactions and database relationships.
Core functionality development will begin with the frontend user interface, followed by database schema construction based on the predefined structure. The RESTful API layer will then be developed to bridge communication between the frontend and database. Once core functionality is complete, iterative testing, refinement, and documentation will continue throughout the remaining development cycle.

### Conclusion

The Task Manager-inator project is designed to emphasize clarity, organization, and functionality. Strong consideration will be given to data validation and security, particularly in handling user authentication and role-based access control. This project aligns with the goals of the assignment and demonstrates practical application of SDLC principles through systematic planning, design, development, and testing.

---

## System Architecture
![alt text](sald.png "Solution Architecture Diagram")

This project follows a layered architecture pattern separating presentation, logic, and data. The frontend Angular application communicates with a secure REST API, which handles authentication, validation, and business rules. The API interacts with a relational database to maintain user, task, and project data.

---

## Wireframe (DRAFT)

![alt text](tmiWireframe.png "Wireframe Diagram")

This wireframe illustrates the conceptual layout of the task manager application and workflow.

---

## User Stories

1. As a user, I want to create an account so that I can securely access my tasks from anywhere.
2. As a user, I want to log into my account so that I can manage and view my tasks.
3. As a user, I want to create new tasks so that I can keep track of work that needs to be completed.
4. As a user, I want to edit existing tasks so that I can update details when they change.
5. As a user, I want to delete tasks so that I can remove them when they are complete or no longer needed.
6. As a user, I want to receive reminders so that I am aware of upcoming deadlines.

---

## Use Cases

### UC-1: Register User
Allows the user to create an account. User must not be logged in.
1. User visits homepage
2. User enters credentials
3. User presses register
4. System validates input
5. System stores user data in database
6. System confirms registration
7. User is sent to dashboard

### UC-2: Login
Allows the user to login to their account. User must not be logged in.
1. User visits homepage
2. User enters credentials
3. User presses login
4. System validates input
5. User is sent to dashboard

### UC-3: View Tasks
Allows the user to view tasks associated with them. The user must be logged in.
1. User is on dashboard
2. User selects task list
3. System directs user to task list page
4. System retrieves data from database
5. System displays data to user

### UC-4: Create Task
Allows the user to create a new task associated with their account. The user must be logged in.
1. User is on dashboard
2. User selects create task
3. System displays task creation form
4. User enters task details
5. User submits form
6. System validates input
7. System saves task to database
8. System confirms successful save
9. System directs user to task list

### UC-5: Delete task
Allows the user to delete tasks. The user must be logged in and own the task.
1. User is on task list
2. User selects delete
3. System requests confirmation
4. User confirms delete
5. System removes task from database
6. System refreshes task list

---

### Use Case Diagram (UML)

![alt text](tmiUseCase.png "Use Case Diagram (UML)")

The Use Case Diagram describes the use cases for users and administrators.
