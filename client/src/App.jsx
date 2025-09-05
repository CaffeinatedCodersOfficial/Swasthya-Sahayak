import React from 'react'
import {Routes, Route} from "react-router-dom"
import IntroPage from './pages/IntroPage'
import Register from './pages/LoginPage'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectRoute';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
      <ToastContainer className="bg-transparent" />

      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <IntroPage /> 
            </ProtectedRoute>
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
      </Routes>
    </>
  )
}

export default App