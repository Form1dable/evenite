import React from 'react';
import {Routes, Route} from "react-router-dom"

// Pages
import Home from "./pages/Home"
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile"
import Event from "./pages/Event";
import Events from "./pages/Events"

// Components
import Navbar from "./components/navigation/Navbar"


function App() {
  return (
      <div className="bg-gray-800 h-screen text-gray-100">
          <Navbar />
      <main className="container mx-auto mt-24">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/event" element={<Event/>} />
                <Route path="/events" element={<Events/>} />
            </Routes>
      </main>
      </div>
  );
}

export default App;
