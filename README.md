# 🗂️ Task Management - Full Stack Web App (UNDATED DOCS)
**Task Management** is my first full-stack web application focused on helping individuals manage and track their tasks efficiently. The aim is to provide users with a clean, responsive interface and secure backend where they can manage personal tasks and monitor their progress with ease.

This project is designed to be *scalable*, with future plans to incorporate collaborative features that allow interactions between users.

## 🧩 Features
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
| Method | Endpoint                | Description                                  |
| ------ | --------------------    | -------------------------------------------- |
| POST   | `/api/auth/signup`      | Register a new user                          |
| POST   | `/api/auth/login`       | Login and receive JWT access token           |
| POST   | `/api/auth/logout`      | Logout and delete JWT access token           |

- **Task**
| Method | Endpoint                | Description                                  |
| ------ | --------------------    | -------------------------------------------- |
| POST   | `/api/task`             | Create a new task                            |
| POST   | `/api/task/:taskId`     | Update a task (protected)                    |


## 🚀 Future Improvements
- Add delete and read endpoints for tasks
- Implement user roles and task sharing between users
- Add due dates and status filters (e.g., pending, in progress, completed)
- Use Redux or Context API for more efficient state management
- Integrate notifications or reminders
- Deploy the app on platforms like Vercel or Heroku
