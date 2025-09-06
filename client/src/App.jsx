import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectRoute';

import IntroPage from './pages/IntroPage'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/", "/login"];
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

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
