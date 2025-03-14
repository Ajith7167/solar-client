import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/landing';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;