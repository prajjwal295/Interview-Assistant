# Project Name: Form Management System


## Project Description


Form Management System is a MERN stack application that allows users to sign up, log in, create and submit forms. Admin users can view all submitted forms and access detailed information about each form. The application uses JWT for authentication and Tailwind CSS for styling.


## Installation

### 1 . Clone the repository: 
 ```bash
   git clone https://github.com/prajjwal295/organizien.git
   cd organizien
```

### 2 . Install server dependencies:
```bash
cd backend
npm install
```

### 3 . Install client dependencies:
```bash
cd..
npm install
```

## Configuration

### 1 . Backend Configuration:

Create a .env file in the backend directory and add the following environment variables:

```env
Port = 4000 
DATABASE_URL = "mongodb+srv://mishraprajjwal295:prajjwal@cluster0.zyobb4v.mongodb.net/"
JWT_SECRET = "prajjwal"
ADMIN_EMAIL = "mishraprajjwal128@gmail.com"
```

### 2 . Frontend Configuration:

Create a .env file in the frontend directory and add the following environment variables:

```env
REACT_APP_BASE_URL="http://localhost:4000"
```


## Running the Application

### 1 . Start the backend server:

```bash
cd backend
npm start
```

### 2 . Start the frontend server:

```bash
cd..
npm start
```

### 3 . Access the application:

Open your browser and go to http://localhost:3000.


## Additional Features

##### Form Validation:
Ensure all required fields are filled before submitting.

#####  JWT Authentication:
Secure routes using JWT tokens.

##### Admin Privileges:
Special access for admin users to manage forms.

##### Responsive Design:
Tailwind CSS for a responsive and modern UI.


## Thought Process and Assumptions

### 1 . User Authentication:

The application starts with a robust authentication system using JWT to ensure secure access to different functionalities.
Redux is used for state management to handle user authentication state across the application.


### 2. Form Handling:

The core functionality revolves around form creation and submission. Forms are created by users and stored in MongoDB.
Admin users have the capability to view all forms, making it easier to manage and review submissions.

### 3. Responsive UI Design:

Tailwind CSS is utilized to ensure a modern and responsive design. This choice helps in quickly building and customizing UI components.
The application has a clean and user-friendly interface to enhance user experience.

### 4. Backend Logic:

Express.js is used to set up the backend server, handling API requests for user authentication, form creation, and fetching form details.
MongoDB is chosen for its flexibility and scalability in handling form data.

### 5 . User Roles:

To differentiate between regular users and admin users in the Form Management System, an `isAdmin` field is included in the user schema in MongoDB. This boolean field indicates if a user is an admin. During authentication, the `isAdmin` value is included in the JWT payload. Middleware functions (`auth` and `isAdmin`) protect routes, ensuring only authenticated users or admins can access specific endpoints. On the frontend, based on the `isAdmin` value in the user state, different components or options are rendered. Admin users can view all forms, while regular users have the option to create new forms. This approach ensures secure and distinct access levels for different user types.

### 6. Data Validity:

Basic validation is performed on forms to ensure required fields are not empty. Further validation can be added as needed.
It is assumed that the JWT token provided in requests is valid and correctly identifies the user.










