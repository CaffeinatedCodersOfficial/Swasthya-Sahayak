import React from 'react'
import {Routes, Route} from "react-router-dom"
import IntroPage from './pages/IntroPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<IntroPage/>} />
      </Routes>
    </>
  )
}

export default App