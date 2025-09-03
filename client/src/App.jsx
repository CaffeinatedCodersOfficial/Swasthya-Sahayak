import React from 'react'
import {Routes, Route} from "react-router-dom"
import IntroPage from './pages/IntroPage'
import Register from './pages/LoginPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<IntroPage/>} />
        <Route path='/login' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App