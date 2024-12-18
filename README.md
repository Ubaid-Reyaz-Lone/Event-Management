# Event Management System

A web-based system for managing events with role-based access control (RBAC), built with **Flask** for the backend, **MSSQL** for the database, and **React** for the frontend. This application allows administrators to manage events, participants, and secure access to the system, while users can view and register for events.

---

## 📋 **Objective**

Develop a secure web-based system for managing events with proper role-based access control. The application supports two user roles: **Admin** and **User**.

- **Admin**: Can create, edit, delete events, manage participants, and view/export event details.
- **User**: Can view events and register for them, within the event’s registration limit.

---

## **Features**

### 🔐 **User Authentication & Security**

- **Role-Based Access Control (RBAC)**:
  - **Admin**: Can manage all aspects of events and users.
  - **User**: Can only view events and register for them.

- **Secure Authentication**:
  - User credentials are securely stored with encryption (using bcrypt or similar hashing mechanisms).
  - Secure API endpoints with input validation and prevention of common vulnerabilities (SQL Injection, XSS).

### 📅 **Event Management**

- **Admin**:
  - Create, edit, delete events with details like name, description, date, time, venue, and registration limit.
  - View and export participant lists (CSV format).
  - Close event registration manually.

- **User**:
  - View available events.
  - Register for events within the event's registration limit.

### 🗂️ **Database Schema**

- **Users Table**: Stores user details, roles, and hashed passwords.
- **Events Table**: Stores event details like name, description, date, time, venue, and registration limit.
- **Registrations Table**: Links users to events they are registered for.

---

## **Tech Stack**

- **Backend**: Flask (Python)
- **Frontend**: React (JavaScript)
- **Database**: MSSQL
- **Authentication**: bcrypt (for hashed passwords)

---

## 🚀 **How to Run Locally**

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/event-management-system.git
cd event-management-system
