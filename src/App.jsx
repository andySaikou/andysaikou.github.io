import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Photos from './pages/Photos';
import './App.css'; // Assuming you have App.css for overall styling

// This component acts as the main router for your application.
function App() {
    return (
        // BrowserRouter handles the routing. The 'basename' is crucial for GitHub Pages.
        <BrowserRouter basename="/andysaikou.github.io">
            <div className="app-container">
                {/*
          The 'Routes' component wraps all of your individual routes.
          It ensures that only one route is active at any given time.
        */}
                <Routes>
                    {/*
            The 'Route' component links a URL path to a specific component.
            - path="/" matches the homepage URL.
            - element={<Home />} tells the router to render the Home component.
          */}
                    <Route path="/" element={<Home />} />

                    {/* This route links the "/Projects" path to the Projects component. */}
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Photography" element={<Photos />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
