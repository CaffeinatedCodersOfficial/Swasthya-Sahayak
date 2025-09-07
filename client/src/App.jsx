import React, { useContext } from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectRoute';

import IntroPage from './pages/IntroPage'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import PatientDashboard from './pages/PatientDashboard';
import Hospitals from './pages/Hospitals';
import HospitalDetail from './pages/HospitalDetails';
import HospitalDashboard from './pages/HospitalDashboard';
import HospitalForm from './pages/HospitalForm';
import { AppContext } from './context/AppContext';

const App = () => {
  const location = useLocation();
  const {userData} = useContext(AppContext);
  
  const hideNavbarRoutes = ["/", "/login", "/hospital-form"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <ToastContainer className="bg-transparent" />
     {!shouldHideNavbar && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <IntroPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/hospital-form"
          element={
            <PublicRoute>
              <HospitalForm />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {userData?.role==="Patient" ? <PatientDashboard /> : userData?.role==="Hospital"?<HospitalDashboard/> : ""}
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospitals"
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospitals/:hospitalname"
          element={
            <ProtectedRoute>
              <HospitalDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
