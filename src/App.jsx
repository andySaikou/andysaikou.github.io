import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Photos from './pages/Photos';
import './App.css';
import Pinch from './pages/projects/Pinch.jsx';
import AiDocumentAssistant from "./pages/projects/AiDocumentAssistant.jsx";
import CaptureOfYou from "./pages/projects/CaptureOfYou.jsx";
import SleepyCamp from "./pages/projects/SleepyCamp.jsx";
import Wacc from "./pages/projects/Wacc.jsx";
import ScrollToTop from "./ScrollToTop.js";

// This component acts as the main router for your application.
function App() {

    return (
        // BrowserRouter handles the routing. The 'basename' is crucial for GitHub Pages.
        <HashRouter>
            <ScrollToTop />

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
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/photography" element={<Photos />} />

                    <Route path="/projects/pinch" element={<Pinch />} />
                    <Route path="/projects/ai-document-assistant" element={<AiDocumentAssistant />} />
                    <Route path="/projects/capture-of-you" element={<CaptureOfYou />} />
                    <Route path="/projects/sleepy-camp" element={<SleepyCamp />} />
                    <Route path="/projects/wacc" element={<Wacc />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
