# ✈️ User Management System for AI Travel App

This is an ongoing full-stack user authentication system developed as part of my **summer project with IBM**, aligned with my broader goal of mastering scalable web and mobile development alongside my **Master’s in Computer Science**.

It will serve as the foundation for a larger AI-powered travel platform that provides personalized recommendations, social sharing, and itinerary planning — ultimately targeting deployment on **both iOS and Android** platforms.

---

## ⚒️ Getting Started

*[Dont forget to install all dependencies for node.js and react]*

```
git clone https://github.com/giovenposa/usermanagementsystem.git
cd UserManagementSystem
 - open terminal and start backend server -
node server.js
 - open new terminal to start frontend server -
cd user-auth-frontend
npm start
```

---

## 🚀 Project Overview

This system handles core **user authentication features**, including:

- ✅ User signup with secure password hashing
- ✅ User login with JWT-based authentication
- ✅ Protected user profile endpoint
- ✅ Frontend integration using React
- ✅ Real MongoDB Atlas database
- ✅ CORS-compliant cross-origin communication
- ✅ Fully RESTful API structure
- 📱 Designed to support mobile deployment on both **iOS and Android**

---

## 🧱 Tech Stack

| Layer        | Technology       | Why? |
|--------------|------------------|------|
| **Frontend** | React (JSX, Hooks) | Lightweight UI, mobile-ready with React Native plans |
| **Backend**  | Node.js + Express | Flexible and fast REST API framework |
| **Database** | MongoDB Atlas     | Schema-flexible, cloud-hosted, scalable |
| **Auth**     | JWT + bcrypt      | Stateless, secure authentication |
| **Middleware** | CORS             | Enables frontend–backend communication |
| **Hosting**  | Localhost (Dev) → Cloud + Mobile Targets | Planned deployment to mobile and cloud environments |

---

## 🛠 Development Timeline

### 🧩 Phase 1 — Server Bootstrapping

- Initialized `Node.js` server using `Express`
- Created basic test routes and middleware for JSON parsing and logging

### 🔐 Phase 2 — Authentication System

- Integrated `bcryptjs` for password hashing
- Configured `jsonwebtoken` for stateless login tokens
- Developed `/signup` and `/login` routes
- Middleware for protected routes (e.g., `/profile`)

### 💾 Phase 3 — MongoDB Integration

- Switched from in-memory array to **MongoDB Atlas**
- Built Mongoose `User` schema
- Connected the backend to Atlas using a `.env` file and secure URI
- All users now persist in the cloud DB

### 🌍 Phase 4 — CORS + Frontend Integration

- Added `cors` middleware to allow requests from React frontend (`localhost:3000`)
- Created simple signup & login forms using `fetch()`
- Stored token in `localStorage` and authenticated follow-up requests

---

## 🎯 Learning Objectives

This project is designed to help me:

- Practice full-stack JS development in a real-world context
- Deepen my understanding of authentication security and session management
- Gain experience integrating cloud services (like MongoDB Atlas)
- Build components I can reuse in our IBM Summer AI Travel App
- Prepare for multi-platform deployment with a React Native mobile frontend

---

## 📈 What’s Next

- 🔐 Add route protection and login state in frontend
- 🧠 Connect to recommendation engine microservice (Python)
- 📄 Extend profile data (preferences, location, travel goals)
- 📱 Begin integration with mobile interface (React Native) for iOS/Android
- 🌐 Deploy backend to Render / Railway and frontend to Vercel
- 🧪 Write test suites with Jest and Supertest

---

## 🧑‍💻 Author

**Gioven Posa**  
MSc Computer Science Student | Summer Intern @ IBM  
Building better software, one feature at a time.  
[LinkedIn](www.linkedin.com/in/gio-posa-200541240)

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or feature requests.
