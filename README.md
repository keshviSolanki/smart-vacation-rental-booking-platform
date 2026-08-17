# 🏡 Smart Vacation Rental Booking Platform

> A full-stack vacation rental and property booking platform inspired by Airbnb, built with the MERN stack.

## 🚀 Live Demo

### 🌐 Live Website

**[Visit the Live Website → ADD YOUR LIVE LINK HERE]**

### ⚙️ Backend API

**[Backend API → ADD YOUR BACKEND LIVE LINK HERE]**

---

## 📖 About The Project

**Smart Vacation Rental Booking Platform** is a full-stack web application that allows users to discover, explore, and book vacation rental properties.

The platform provides features such as property listings, user authentication, reviews, bookings, location-based services, weather information, image uploads, and more.

The project was built to understand and implement a real-world full-stack application using the **MERN stack** along with third-party APIs and cloud services.

---

## ✨ Features

### 👤 User Authentication

* User registration and login
* Secure session-based authentication
* Passport.js authentication
* Protected routes
* User profile management
* Logout functionality

### 🏠 Property Listings

* Browse available properties
* View detailed property information
* Create new listings
* Edit existing listings
* Delete listings
* Property images
* Property location information
* Property pricing and details

### 🔍 Search & Discovery

* Explore available properties
* Location-based property discovery
* View properties on maps
* Detailed property pages

### 📅 Booking System

* Book vacation properties
* Booking date management
* Booking details
* Prevent invalid booking dates
* User booking information

### ⭐ Reviews & Ratings

* Add reviews
* Rate properties
* View reviews
* Delete reviews
* Property rating system

### 🗺️ Location & Maps

* Property location support
* Interactive map integration
* Location-based property information

### 🌤️ Weather Integration

* Weather information for property locations
* Integration with a weather API
* Location-based weather data

### 🖼️ Image Upload

* Upload property images
* Cloudinary integration
* Cloud-based image storage

### 🔐 Security

* Authentication and authorization
* Protected routes
* Session management
* Environment variables for sensitive credentials
* Server-side validation

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* EJS
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Express Session
* Connect-Mongo

### Cloud & APIs

* Cloudinary
* Weather API
* Maps / Location API

### Other Technologies

* Git
* GitHub
* REST APIs
* MVC Architecture

---

## 🏗️ Architecture

The application follows a structured MVC-style architecture.

```text
User
  │
  ▼
Frontend / EJS
  │
  ▼
Express.js Server
  │
  ├── Authentication
  ├── Listings
  ├── Bookings
  ├── Reviews
  ├── Weather
  └── User Management
  │
  ▼
MongoDB
  │
  ├── Users
  ├── Listings
  ├── Bookings
  └── Reviews

External Services
  │
  ├── Cloudinary
  ├── Weather API
  └── Maps API
```

---

## 📂 Project Structure

```text
smart-vacation-rental-booking-platform/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
│
├── middleware.js
├── schema.js
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
MONGO_URL=your_mongodb_connection_string

SESSION_SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

WEATHER_API_KEY=your_weather_api_key
```

> Never commit your `.env` file or expose your API keys publicly.

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/smart-vacation-rental-booking-platform.git
```

Move into the project directory:

```bash
cd smart-vacation-rental-booking-platform
```

Install dependencies:

```bash
npm install
```

Create your `.env` file and configure the required environment variables.

Start the development server:

```bash
npm run dev
```

Or start the production server:

```bash
npm start
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## 🔑 Main Functional Modules

| Module         | Description                                |
| -------------- | ------------------------------------------ |
| Authentication | User registration, login and logout        |
| Listings       | Create, update, delete and view properties |
| Bookings       | Reserve properties for selected dates      |
| Reviews        | Rate and review properties                 |
| Maps           | Display property locations                 |
| Weather        | Show weather information                   |
| Cloudinary     | Store property images                      |
| MongoDB        | Store application data                     |

---

## 🎯 Project Goals

The main goals of this project were to:

* Build a real-world full-stack application
* Understand MERN stack architecture
* Implement authentication and authorization
* Work with MongoDB and Mongoose
* Build RESTful APIs
* Implement booking functionality
* Integrate third-party APIs
* Work with cloud image storage
* Handle sessions securely
* Build a scalable application structure

---

## 🚀 Future Improvements

* Online payment integration
* Advanced property search and filtering
* Wishlist functionality
* Host dashboard
* Admin dashboard
* Real-time notifications
* Improved booking management
* Email notifications
* More advanced recommendation features
* Mobile application

---

## 👨‍💻 Author

### Keshvi Solanki

Full Stack Developer interested in building scalable web applications and AI-powered systems.

**GitHub:** https://smart-vacation-rental-booking-platform.onrender.com/listings

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

It helps support the project and motivates further development.
