import React from 'react';
import {Routes, Route, useLocation} from "react-router-dom"


// Libraries
import {ToastContainer} from "react-toastify";

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
import Footer from "./components/footer/Footer"
import {AnimatePresence} from "framer-motion";

// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";


function App() {
    const location = useLocation();

    return (
        <div className="bg-gray-900 min-h-screen text-gray-100 flex flex-col justify-between">
            <main className={"w-10/12 max-w-7xl mx-auto"}>
                <Navbar/>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <div className={"mt-10"}>
                    <AnimatePresence exitBeforeEnter>
                        <Routes key={location.pathname} location={location}>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/login" element={
                                <PublicRoute>
                                    <Login/>
                                </PublicRoute>
                            }/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/events" element={<Events/>}/>
                            <Route path="/events/:eventId" element={<Event/>}/>
                        </Routes>
                    </AnimatePresence>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
