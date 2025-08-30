# Buddha Avenue Frontend - Restaurant Management Dashboard

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-blue)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

Modern React-based frontend application for Buddha Avenue restaurant management system with role-based authentication and comprehensive booking management.

## 🚀 Live Demo

- **Application**: [https://budha-avenue-frontend.vercel.app](https://budha-avenue-frontend.vercel.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Authentication](#authentication)
- [User Roles](#user-roles)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Deployment](#deployment)

## ✨ Features

### 🔐 Role-Based Authentication
- Secure login system with hardcoded credentials
- Role-based access control (Admin/Staff)
- Protected routes and private components
- Session management with localStorage

### 📊 Dashboard Management
- Comprehensive booking overview
- Real-time data updates
- Search and filter functionality
- Pagination support

### 📅 Booking System
- Create, edit, and delete bookings
- Customer management
- Booking status tracking
- Export functionality (CSV)

### 🍽️ Menu Management
- Menu item management
- Customer-specific menus
- Real-time updates
- Print receipts

### 📱 Responsive Design
- Mobile-first approach
- Modern UI with Tailwind CSS
- DaisyUI components
- Intuitive user experience

## 🛠️ Tech Stack

- **React 18.2.0** - UI Library
- **Vite 4.4.5** - Build tool and dev server
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **DaisyUI 4.0.3** - Component library
- **React Router DOM 6.18.0** - Client-side routing
- **Axios 1.6.2** - HTTP client
- **React Hot Toast 2.4.1** - Notifications
- **React Icons 4.11.0** - Icon library
- **Date-fns 4.1.0** - Date utilities

## 🚀 Installation

### Prerequisites
- Node.js 18+ installed
- Git installed

### Setup
```bash
git clone <repository-url>
cd Budha-Avenue-Frontend
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 🔐 Authentication

The application uses role-based authentication with hardcoded credentials for secure access control.

### 👤 Login Credentials

#### **Admin Accounts**

**Primary Admin**
- **Username**: `BudhhaAvenue01@gmail.com`
- **Password**: `Avenue@001`
- **Role**: Admin
- **Permissions**: Full system access, user management, all CRUD operations

**Secondary Admin**
- **Username**: `teacher@gmail.com`
- **Password**: `tech@123`
- **Role**: Admin
- **Permissions**: Full system access, administrative privileges

#### **Staff Account**

**Staff User**
- **Username**: `Staffavenue@gmail.com`
- **Password**: `staff@002`
- **Role**: Staff
- **Permissions**: Limited access, booking management, menu operations

## 👥 User Roles

### 🔑 Admin Role
- **Full Dashboard Access**: Complete overview of all operations
- **User Management**: Manage staff accounts and permissions
- **Booking Management**: Create, read, update, delete all bookings
- **Menu Management**: Full menu control and customization
- **Reports & Analytics**: Access to all reports and data exports
- **System Settings**: Configure application settings

### 👨‍💼 Staff Role
- **Limited Dashboard**: Access to assigned sections only
- **Booking Operations**: Create and update bookings (limited delete)
- **Menu Updates**: Update menu items and customer orders
- **Customer Service**: Handle customer inquiries and modifications
- **Basic Reports**: Access to operational reports only

## 📁 Project Structure

```
Budha-Avenue-Frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/             # Static assets and images
│   ├── pages/              # Page components
│   │   ├── Login.jsx       # Authentication page
│   │   ├── Dashboard.jsx   # Main dashboard
│   │   └── ...
│   ├── routes/             # Route configurations
│   │   ├── PrivateRoute.jsx
│   │   └── ...
│   ├── context/            # React context providers
│   │   └── AuthContext.jsx
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── .eslintrc.cjs           # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── package.json
```

## 📝 Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint for code quality
```

## 🚀 Deployment

### Vercel Configuration
The application is configured for automatic deployment on Vercel:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Environment Variables
No environment variables required for frontend deployment.

### Deploy Steps
1. Connect repository to Vercel
2. Configure build settings
3. Deploy automatically on push to main branch

## 🔒 Security Features

- **Protected Routes**: Unauthorized access prevention
- **Role-Based Access**: Feature access based on user roles
- **Session Management**: Secure login state handling
- **Input Validation**: Form validation and sanitization
- **CORS Handling**: Secure API communication

## 🎨 UI/UX Features

- **Modern Design**: Clean and professional interface
- **Responsive Layout**: Works on all device sizes
- **Dark/Light Theme**: Theme switching capability
- **Loading States**: Smooth loading indicators
- **Toast Notifications**: User-friendly feedback
- **Form Validation**: Real-time input validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Team

- **Frontend Developer**: React.js, Tailwind CSS, UI/UX Design
- **Authentication**: Role-based access control implementation
- **DevOps**: Vercel deployment and optimization

---

**Buddha Avenue Frontend** - Modern restaurant management with secure role-based access.