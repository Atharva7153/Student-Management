# 🎓 Student Management System (SMS)

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-E63946?style=for-the-badge&logo=mongodb&logoColor=white)](https://github.com/)
[![React 19](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express.js-5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Pure CSS](https://img.shields.io/badge/Styling-Pure_CSS-E63946?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A full-stack, responsive Student Management web application built with the **MERN** stack (MongoDB, Express, React 19, Node.js). Features role-based access control, interactive analytics charts, student and topper administration, and a custom-crafted **White + Red** design system built entirely in **Pure CSS** (no CSS libraries or frameworks).

---

## ✨ Features

- **📊 Visual Analytics & Dashboards**
  - **Pie Chart:** Real-time course-wise student enrollment distribution.
  - **Bar Chart:** Course-wise topper counts with custom rounded bars and auto-scaling integer axes.
  - Quick stat widgets showing total student count and total toppers recognized.

- **🧑‍🎓 Student Directory & Course Filtering**
  - Browse all students in an interactive card grid.
  - Filter students dynamically by course (e.g., *CSE*, *Mechanical*, etc.).
  - Deep-dive into individual student profiles with detailed metadata and actions.

- **🏆 Toppers Management**
  - Dedicated Toppers leaderboard with rank badges and visual profile avatars.
  - Admins can promote students to toppers or remove them directly.

- **🔐 Authentication & Role-Based Access Control (RBAC)**
  - JWT (JSON Web Token) authentication with secure HTTP-only cookies.
  - Separate access controls:
    - **Guest:** View Home, Analytics, and Student Directory.
    - **User:** View Toppers leaderboard, detailed Student profiles, Personal profile.
    - **Admin:** Add new students, edit student profiles, delete students, promote/demote toppers.

- **🎨 Modern White + Red Design System**
  - Designed strictly with **Pure CSS** and CSS custom properties (variables).
  - Modern typography using Google's **Inter** font family.
  - Sticky glass-accented navigation bar with user avatars, status pills, and active link indicators.
  - Mobile-ready responsive layouts across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Routing:** React Router DOM (v7)
- **Data Visualization:** Chart.js & react-chartjs-2
- **HTTP Client:** Axios (with cookie credentials enabled)
- **Styling:** Pure CSS (Zero Tailwind, Bootstrap, or component libraries)

### Backend
- **Runtime:** Node.js
- **Server Framework:** Express 5
- **Database & ODM:** MongoDB & Mongoose
- **Authentication:** JSON Web Tokens (`jsonwebtoken`) & `bcrypt`
- **Cookies & Security:** `cookie-parser` & `cors`
- **Dev Utility:** `nodemon` & `dotenv`

---

## 📁 Project Architecture

```plaintext
COMEBACK/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection logic
│   ├── controllers/
│   │   ├── authController.js     # User registration, login, profile, logout
│   │   └── studentController.js  # CRUD operations, aggregations & stats
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT verification from cookies
│   │   └── roleMiddleware.js     # Role verification (admin/user)
│   ├── models/
│   │   ├── students.js           # Student schema (name, age, course)
│   │   ├── toppers.js            # Topper schema (student ObjectId ref)
│   │   └── user.js               # User schema (name, email, password, role)
│   ├── routers/
│   │   ├── auth.js               # Auth API routes
│   │   └── routes.js             # Student, Topper & Analytics routes
│   ├── server.js                 # Express application entry point
│   ├── package.json
│   └── .env                      # Backend environment config
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js          # Preconfigured Axios instance with credentials
│   │   ├── assets/               # SVGs, icons, and hero visuals
│   │   ├── components/
│   │   │   ├── AdminRoute.jsx    # Protected route wrapper for admins
│   │   │   ├── ProtectedRoute.jsx# Protected route wrapper for authenticated users
│   │   │   ├── Nav.jsx           # Global responsive navigation header
│   │   │   ├── Footer.jsx        # Global footer
│   │   │   ├── BarChart.jsx      # Course-wise toppers bar chart
│   │   │   └── PieChart.jsx      # Course-wise student pie chart
│   │   ├── context/
│   │   │   └── AuthContext1.jsx  # Global authentication context & state
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Landing page with stats & charts
│   │   │   ├── Students.jsx      # Filterable student directory
│   │   │   ├── Details.jsx       # Student profile details & admin controls
│   │   │   ├── Toppers.jsx       # Topper leaderboard
│   │   │   ├── Edit.jsx          # Add new student form
│   │   │   ├── EditStudent.jsx   # Edit existing student form
│   │   │   ├── Login.jsx         # User login form
│   │   │   ├── Signup.jsx        # User registration form
│   │   │   ├── Profile.jsx       # User profile details
│   │   │   ├── About.jsx         # About the project & creator
│   │   │   └── Error.jsx         # Custom 404 page
│   │   ├── pages/styles/         # Page-specific modular CSS files
│   │   ├── App.jsx               # Routes and layout composition
│   │   ├── index.css             # Design system, CSS variables & resets
│   │   └── main.jsx              # React app mount & providers
│   ├── package.json
│   ├── vite.config.js
│   └── .env                      # Frontend environment config
└── README.md
```

---

## 🔌 API Reference

### 🔑 Authentication Routes (`/`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/register` | Register a new user | No |
| `POST` | `/login` | Authenticate user & set JWT cookie | No |
| `GET` | `/me` | Fetch currently logged-in user info | Yes |
| `GET` | `/profile` | Fetch profile details | Yes |
| `GET` | `/logout` | Clear auth cookie | No |

### 📊 Public & Analytics Routes (`/`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/total-students` | Get total count of registered students | No |
| `GET` | `/total-toppers` | Get total count of toppers | No |
| `GET` | `/get-courses` | Get student count grouped by course (for Pie Chart) | No |
| `GET` | `/get-toppers-by-course` | Get topper count grouped by course (for Bar Chart) | No |
| `GET` | `/students` | Get list of all students | No |
| `GET` | `/get-:course` | Filter students by course | No |

### 🔒 Protected & Admin Routes (`/`)
| Method | Endpoint | Description | Role Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/toppers` | Get list of all toppers with populated student data | User / Admin |
| `GET` | `/student/id/:id` | Get single student details | User / Admin |
| `POST` | `/add` | Add a new student | **Admin** |
| `PUT` | `/student/:id` | Update student information | **Admin** |
| `DELETE` | `/student/:id` | Delete a student | **Admin** |
| `POST` | `/add-topper` | Add an existing student to the Toppers list | **Admin** |
| `DELETE` | `/delete-topper/:id`| Remove student from Toppers list | **Admin** |

---

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster URI)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Atharva7153/Student-Management.git
cd Student-Management
```

### 2. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_secure_jwt_secret_key
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   *The server should now be running on `http://localhost:3000`.*

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend/` directory:
   ```env
   VITE_BACKEND_URI=http://localhost:3000
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The client application should now be accessible at `http://localhost:5173`.*

---

## 👥 Role Permissions Matrix

| Feature | Guest | User | Admin |
| :--- | :---: | :---: | :---: |
| View Home & Analytics Charts | ✅ | ✅ | ✅ |
| View Student Directory | ✅ | ✅ | ✅ |
| View Student Profile Details | ❌ | ✅ | ✅ |
| View Toppers Leaderboard | ❌ | ✅ | ✅ |
| Add New Students | ❌ | ❌ | ✅ |
| Edit Existing Students | ❌ | ❌ | ✅ |
| Delete Students | ❌ | ❌ | ✅ |
| Add / Remove Toppers | ❌ | ❌ | ✅ |

---

## 🎨 Design System Palette

The application uses a clean, modern **White + Red** design palette defined via CSS variables:

```css
:root {
  --primary: #E63946;         /* Crimson Red (brand accent & CTA) */
  --primary-dark: #B71C2C;    /* Deep Red (hover states) */
  --primary-light: #FDECEA;   /* Soft Red Tint (badges & pill backgrounds) */
  --bg: #FFFFFF;              /* Pure White page background */
  --surface: #F9F9F9;         /* Neutral card/surface background */
  --border: #EDEDED;          /* Subtle borders & dividers */
  --text: #1A1A2E;            /* Dark slate primary text */
  --text-muted: #6B7280;      /* Secondary grey text */
  --radius: 12px;             /* Rounded corners */
  --font: 'Inter', sans-serif;/* Modern typography */
}
```

---

## 👨‍💻 Author

**Atharva Sharma**
- GitHub: [@Atharva7153](https://github.com/Atharva7153)
- Project: MERN Comeback Journey

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
