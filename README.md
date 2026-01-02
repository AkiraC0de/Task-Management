# 🗂️ GTASK - Full Stack Web App
**Task Management** is my second full-stack web application focused on helping students manage and track their group tasks efficiently. The aim is to provide users with a clean, responsive interface and secure backend where they can manage group tasks, export their progess as pdf ,and monitor their progress with ease. 

This project is designed to be *scalable*, with future plans to incorporate collaborative features that allow interactions between users.

## CURRENT TASK
- backend: Error Handler
- backend: Email sender
- frontend: Make the email verification page secure 
- fullstack: reset password
- frontend: Verification Code inputs style if there is an error 

## 🧩 Features (UNUPDATED)
- User authentication with JWT (signup, login, logout)
- Create and update personal tasks
- Secure API endpoints with middleware protection
- Clean UI built with Tailwind CSS
- Scalable backend with MongoDB and Mongoose

## 🛠️ Built With
# Frontend
- **React JS** 
- **Tailwind CSS**
# Backend
- **Node.js** 
- **Express.js**
- **MongoDB**
- **Mongoose** 

## Api End Points 
- **Auth**
| Method | Endpoint                 | Description                                  |
| ------ | ------------------------ | -------------------------------------------- |
| POST   | `/api/auth/signup`       | Register a new user                          |
| POST   | `/api/auth/login`        | Login and receive JWT access token           |
| POST   | `/api/auth/logout`       | Logout and delete JWT access token           |
| GET    | `/api/auth/refresh`      | Get a new access token via refreshTKN(Cookie)|
| POST   | `/api/auth/verify-email` | Verify the users email via token             |
| POST   | `/api/auth               | Reset the users email verification token     |
|        | /verify-email-resend`    |                                              |


- **Task**
| Method | Endpoint                | Description                                  |
| ------ | --------------------    | -------------------------------------------- |
| POST   | `/api/task`             | Create a new task                            |
| POST   | `/api/task/:taskId`     | Update a task (protected)                    |
