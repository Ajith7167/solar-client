// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from "./componet/Home";
import UserProfile from "./componet/Profile"
import LoginPage from "./componet/login"
import RegisterPage from "./componet/register";
import SmartSolarLanding from './componet/landing'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/" element={<SmartSolarLanding />} />
      </Routes>
    </Router>
  )
}

export default App
