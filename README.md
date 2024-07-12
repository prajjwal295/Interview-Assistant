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

### Form Validation:
Ensure all required fields are filled before submitting.
### JWT Authentication:
Secure routes using JWT tokens.
### Admin Privileges:
Special access for admin users to manage forms.
### Responsive Design:
Tailwind CSS for a responsive and modern UI.





