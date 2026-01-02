# 🗂️ GTASK | Full-Stack Task Management 

**GTASK** is my second full-stack web application focused on helping students manage and track their group tasks efficiently. The aim is to provide users with a clean, responsive interface and secure backend where they can manage group tasks, export their progess as pdf ,and monitor their progress with ease. 

## 🚀 Key Features
* **Secure Authentication:** Multi-layered auth using JWT (Access & Refresh tokens) and HTTP-only cookies.
* **Task Lifecycle Management:** Full CRUD operations for personal and group tasks.
* **Verification Workflow:** Automated email verification and secure password reset functionality.
* **Data Export:** Capability to generate and export progress reports in PDF format.
* **Responsive UI:** A mobile-first, clean interface built with Tailwind CSS.

---

## 🛠️ Tech Stack

### **Frontend**
* **Framework:** React.js
* **Styling:** Tailwind CSS (Responsive Design)
* **State Management:** Context API / Hooks

### **Backend**
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose (ODM)
* **Security:** JWT, Bcrypt, Helmet, and CORS

---

## 🚧 Roadmap & Current Progress

| Category | Task | Status |
| :--- | :--- | :---: |
| **Backend** | Centralized Global Error Handling Middleware | 🔄 In Progress |
| **Backend** | SMTP Integration for Email Dispatch (Nodemailer) | 🔄 In Progress |
| **Frontend** | Guarded Routes for Email Verification | 🔄 In Progress |
| **Fullstack** | Secure Password Reset (Token-based) | 📅 Pending |
| **Frontend** | UI/UX: Error states for OTP/Verification inputs | 📅 Pending |

---

## 🔗 API Documentation

### **Authentication Module**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/signup` | Register user & trigger verification email |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT |
| `POST` | `/api/auth/logout` | Revoke tokens & clear session |
| `GET` | `/api/auth/refresh` | Rotate access token using Refresh Token |
| `POST` | `/api/auth/verify-email` | Validate account via email token |
| `POST` | `/api/auth/resend-code` | Regenerate and resend verification code |

### **Task Module**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/task` | Create a new task instance |
| `PATCH` | `/api/task/:taskId` | Update task details (Protected) |
| `GET` | `/api/task/export` | Generate PDF summary of tasks |