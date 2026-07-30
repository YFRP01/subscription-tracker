<h3 align="center">
  <a href="https://subscription-tracker-api-efe3d.containers.snapdeploy.app" style="text-decoration: none; color: #4a90e2; font-weight: bold;">
    🚀 Click here to visit the live API
  </a>
</h3>

## 📋 Table of Contents

1. 🤖 Introduction
2. ⚙️ Tech Stack
3. 🔋 Features
4. 🏗️ Architecture
5. 🚀 Deployment
6. 🤸 Quick Start
7. 🔐 Environment Variables
8. 📡 API Usage
9. 👀 Watch Live
10. 👨‍💻 Author

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

**Project root:**

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

The API is deployed using Docker on <span style="text-decoration: underline dotted;">SnapDeploy</span>.

**Live endpoint:**
👉

The application runs inside a container with:

- Node.js runtime
- Production environment variables
- MongoDB database connection
- Security middleware enabled

## 🚀 API Usage

**Authentication Endpoints:**

<ul>
<li>POST  /api/v1/auth/sign-up	Register a new user</li>
<li>POST	/api/v1/auth/sign-in	Login user</li>
</ul>

**Users Endpoints**

<ul>
<li>GET /api/v1/users   Get all users</li>
<li>GET /api/v1/users/:id   Get a user with auth token</li>
<li>POST /api/v1/users  Create a user</li>
<li>PUT /api/v1/users   Updaye user details with auth token</li>
<li>DELETE /api/v1/users  Delete a user</li>
</ul>

**Subscription Endpoints**

<ul>
<li>GET /api/v1/subscriptions   Get all subscriptions</li>
<li>GET /api/v1/subscriptions/:id	  Get a subscription</li>
<li>POST	/api/v1/subscriptions	  Create a subscription with auth token</li>
<li>PUT /api/v1/subscriptions/:id	  Update a subscription with auth token</li>
<li>DELETE  /api/v1/subscriptions/:id	  Delete a subscription with auth token</li>
<li>PUT	/api/v1/subscriptions/:id/cancel	Cancel a subscription with auth token</li>
<li>GET	/api/v1/subscriptions/user/:id	Get user subscriptions with auth token</li>
</ul>

## 👀 Watch Live 
Click: <a href="https://subscription-tracker-api-efe3d.containers.snapdeploy.app">https://subscription-tracker-api-efe3d.containers.snapdeploy.app</a>

## 👨‍💻 Author

- **LinkedIn**: <a href="https://www.linkedin.com/in/rahil-pavel-a845b3330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">https://www.linkedin.com/in/rahil-pavel-a845b3330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</a>
- **Email**: <a href="yfrp.dev@gmail.com">yfrp.dev@gmail.com</a>

- **WhatsApp**: <a href="https://wa.me/message/UVCN3M7OMSVSB1">https://wa.me/message/UVCN3M7OMSVSB1</a>

- **GitHub**: <a href="https://github.com/YFRP01">https://github.com/YFRP01</a>

