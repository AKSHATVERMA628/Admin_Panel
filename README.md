# Admin Panel Authentication System

A full-stack Admin Panel web application with login authentication built using the MERN stack.
The system allows users to securely log in and access a protected dashboard. Authentication is handled through a backend API connected to MongoDB Atlas.

## Live Demo

Frontend (Vercel):
https://admin-panel-omega-topaz-27.vercel.app/admin

Backend API (Render):
https://admin-panel-yzsj.onrender.com/

## Demo Login Credentials

You can use the following credentials to test the application:

Admin Account
Username: admin
Password: admin123

User Account
Username: user
Password: user123

## Features

* Secure login system
* Admin dashboard access after authentication
* Role-based login (Admin / User)
* Protected routes using authentication middleware
* MongoDB Atlas database integration
* REST API backend
* React Router navigation
* Component-based layout (Navbar, Sidebar, Footer)

## Tech Stack

Frontend

* React.js
* React Router DOM
* Axios
* CSS

Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Authentication Middleware

Deployment

* Vercel (Frontend)
* Render (Backend)

## Project Structure

Admin_Page
├── backend
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── routes
│   │   └── auth.js
│   │
│   ├── server.js
│   └── package.json
│
└── frontend
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   │   └── Footer.js
│   │
│   ├── pages
│   │   ├── Login.js
│   │   └── AdminDashboard.js
│   │
│   ├── App.js
│   └── index.js
│
└── package.json

## Application Flow

1. User opens the login page.
2. User enters username and password.
3. Frontend sends credentials to backend API.
4. Backend validates user from MongoDB Atlas.
5. If authentication succeeds, user is redirected to the Admin Dashboard.
6. Protected routes are handled by authentication middleware.

## API Endpoint

POST /api/login

Example Request

{
"username": "admin",
"password": "admin123"
}

Example Response

{
"message": "Login successful"
}

## Local Setup

Clone the repository

git clone https://github.com/AKSHATVERMA628/Admin_Page.git

Install backend dependencies

cd backend
npm install

Start backend server

node server.js

Install frontend dependencies

cd ../frontend
npm install

Run frontend

npm start

## Environment Variables

Create a `.env` file in the backend folder.

Example

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

## Deployment

Frontend deployed on Vercel.
Backend deployed on Render.
MongoDB Atlas used as cloud database.

## Author

Akshat Verma

GitHub: https://github.com/AKSHATVERMA628
LinkedIn: https://www.linkedin.com/in/akshatverma629
