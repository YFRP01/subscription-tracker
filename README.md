<div style="display: flex; align-items: center; justify-content: center; width: full;">
<h4>👉 Visit <a href="https://subscription-tracker-api-efe3d.containers.snapdeploy.app">SUBSCRIPTION_TRACKER_API</a> by clicking on this link</h4>
</div>
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

## 👨‍💻 Author

<li>Pavel Youmsi</li>
<li style="">GitHub: @YFRP01</li>
<li>Gmail: <a href="yfrp.dev@gmail.com">yfrp.dev@gmail.com</a></li>

<h2 align="center" style="text-color: #ee2f2292"> Built with ❤️ using Node.js and Express.js </h2>
