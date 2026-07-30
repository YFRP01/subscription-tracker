<div align="center">
  <br />

## 📋 Table of Contents

1. 🤖 Introduction
2. ⚙️ Tech Stack
3. 🔋 Features
4. 🏗️ Architecture
5. 🚀 Deployment
6. 🤸 Quick Start
7. 🔐 Environment Variables
8. 📡 API Usage
9. 👨‍💻 Author

## 🤖 Introduction

Subscription Tracker API is a backend service that allows users to manage and track their recurring subscriptions.

The project implements modern backend development practices including:

- REST API architecture
- JWT authentication
- Database modeling
- Middleware integration
- Security protection
- Automated email reminders
- Background workflows

The project was initially inspired by a backend tutorial from JavaScript Mastery, then customized, configured, and deployed independently.

## ⚙️ Tech Stack

**Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Nodemailer

**Security:**

- Arcjet (Bot detection, Rate limiting, Shield protection)

**Automation:**

- Upstash Workflow / QStash

**Deployment:**

- Docker
- SnapDeploy

## 🔋 Features

**Authentication:**

- User registration
- User login
- JWT-based authentication
- Protected routes

**Subscription Management:**

- Create subscriptions
- Retrieve subscriptions
- Update subscription information
- Delete subscriptions
- Manage recurring payments

**Security:**

- Advanced rate limiting
- Bot protection
- Request filtering
- Secure middleware architecture

**Automation:**

- Scheduled workflows
- Email reminders for upcoming subscriptions

**Developer Experience:**

- Modular project structure
- Environment-based configuration
- Error handling middleware
- Logging system

## 🏗️ Architecture

The project follows a modular Express.js architecture:

subscription-tracker-api
│
├── app.js
├── config/
│ ├── controllers/
│ ├── database/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── package.json



## 🚀 Deployment

The API is deployed using Docker on SnapDeploy.

**Live endpoint:**
https://subscription-tracker-api-efe3d.containers.snapdeploy.app

The application runs inside a container with:

- Node.js runtime
- Production environment variables
- MongoDB database connection
- Security middleware enabled

## 🤸 Quick Start

**Prerequisites:**

- Node.js
- npm
- Git


## 📡 API Usage

**Authentication Endpoints:**

| Method | Endpoint                 | Description         |
| ------ | ------------------------ | ------------------- |
| POST   | `/api/v1/auth/sign-up` | Register a new user |
| POST   | `/api/v1/auth/sign-in` | Login user          |

**Subscription Endpoints:**

| Method | Endpoint                             | Description            |
| ------ | ------------------------------------ | ---------------------- |
| GET    | `/api/v1/subscriptions`            | Get all subscriptions  |
| GET    | `/api/v1/subscriptions/:id`        | Get a subscription     |
| POST   | `/api/v1/subscriptions`            | Create a subscription  |
| PUT    | `/api/v1/subscriptions/:id`        | Update a subscription  |
| DELETE | `/api/v1/subscriptions/:id`        | Delete a subscription  |
| PUT    | `/api/v1/subscriptions/:id/cancel` | Cancel a subscription  |
| GET    | `/api/v1/subscriptions/user/:id`   | Get user subscriptions |

**Sample Request:**

{
  "name": "Netflix Premium",
  "price": 15.99,
  "currency": "USD",
  "frequency": "monthly",
  "category": "entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}


👨‍💻 Author
Pavel Youmsi

GitHub: @YFRP01

<p align="center"> Built with ❤️ using Node.js and Express.js </p>
