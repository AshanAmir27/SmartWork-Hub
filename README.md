# SmartWork Hub – MERN Task & Team Management Platform

SmartWork Hub is a full-featured, production-ready MERN application designed for teams to collaborate, manage tasks, track project progress, and securely share files. This project demonstrates real-world experience across the entire MERN stack, AWS deployment, state management, REST API design, and scalable architecture.

---

## 📁 Project Folder Structure

smartwork-hub/
│
├── client/ # React Frontend
│ ├── public/
│ └── src/
│ ├── api/
│ ├── components/
│ ├── context/
│ ├── hooks/
│ ├── pages/
│ ├── redux/
│ ├── styles/
│ ├── utils/
│ ├── App.jsx
│ └── index.js
│
├── server/ # Node/Express Backend
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── utils/
│ ├── app.js
│ └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md


---

## 📚 Overview

SmartWork Hub provides teams with a centralized platform for:

- Task Assignment  
- Project Management  
- Productivity Analytics  
- File Sharing (AWS S3)  
- Real-Time Notifications  
- Role-Based Access Control  

This project is built to reflect real company workflows, architecture, and production deployment strategies.

---

## 🌟 Features

### ✔ Authentication & Authorization
- JWT-based authentication  
- Secure password hashing  
- Role-based access (Admin, Manager, Member)

### ✔ Project Management
- Create, edit, delete projects  
- Assign team members  
- Track project progress

### ✔ Task Management
- CRUD operations  
- Task priority & due dates  
- Status workflow  
- Kanban-style task board

### ✔ AWS-Powered File Upload System
- Secure upload to S3  
- File preview support  
- Presigned URLs

### ✔ Real-Time Notifications (Socket.IO)
- Task updates  
- Comments  
- Assignments

### ✔ Dashboard & Analytics
- User productivity  
- Task completion statistics  
- Project health metrics

### ✔ Responsive UI
- Mobile-first design  
- Clean and modern interface  
- TailwindCSS (or Bootstrap)

### ✔ Admin Panel
- Manage users  
- Activity logs  
- System insights

---

## 🛠 Tech Stack

### **Frontend**
- React.js  
- Redux Toolkit  
- React Router  
- Axios  
- Recharts  
- Tailwind CSS  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- AWS SDK (S3)  
- Socket.IO  

### **DevOps**
- AWS EC2 (Backend Hosting)  
- AWS S3 (Storage & Static Files)  
- Nginx Reverse Proxy  
- PM2 for process management  

---

## 🔌 API Documentation

### **Auth Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get logged-in user |

### **Project Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/projects` | Create a project |
| GET | `/api/projects` | Get all projects |
| PUT | `/api/projects/:id` | Update a project |
| DELETE | `/api/projects/:id` | Delete a project |

### **Task Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks/project/:id` | Get tasks for project |
| PATCH | `/api/tasks/:id/status` | Update status |

### **File Upload Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/files/upload` | Upload file to AWS S3 |

---

## 🧮 Database Schema

### **Users**
```json
{
  "name": "",
  "email": "",
  "password": "",
  "role": "admin | manager | member",
  "createdAt": ""
}
Projects
{
  "title": "",
  "description": "",
  "members": ["userId"],
  "createdBy": "",
  "createdAt": ""
}

Tasks
{
  "projectId": "",
  "assignedTo": "",
  "title": "",
  "description": "",
  "priority": "",
  "status": "",
  "dueDate": "",
  "createdAt": ""
}

Files
{
  "fileName": "",
  "s3Url": "",
  "uploadedBy": "",
  "projectId": "",
  "createdAt": ""
}

Activity Logs
{
  "user": "",
  "action": "",
  "entity": "",
  "entityId": "",
  "timestamp": ""
}

🚀 Deployment Guide (AWS)
Backend Deployment – EC2

Launch EC2 instance

Install Node.js, PM2, Nginx

Connect to MongoDB Atlas

Configure reverse proxy

Run server with PM2

Frontend Deployment – AWS S3 + CloudFront

Build React app

Upload build folder to S3

Enable static hosting

Use CloudFront for CDN caching

Add SSL using AWS ACM

AWS S3 Setup

Create S3 bucket

Enable public access / presigned URLs

Configure IAM role

📊 Architecture Diagram
Frontend (React)
        ⇅
REST API (Node + Express)
        ⇅
MongoDB (Atlas)
        ⇅
AWS S3 (File Uploads)

Real-Time Features: Socket.IO
Monitoring: AWS CloudWatch

✨ Resume Description (Copy-Paste)

SmartWork Hub — MERN Stack Task & Team Management Platform (AWS Deployment)
Developed a full-stack MERN application with secure authentication, real-time updates, project tracking, and AWS-based file management. Built REST APIs, integrated AWS S3, implemented Redux state management, and deployed on EC2 with Nginx and PM2.

Tech: MongoDB, Express, React, Node.js, Redux, JWT, AWS S3, EC2, Socket.IO, Nginx.