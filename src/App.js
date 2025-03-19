import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import LatestJobs from './components/LatestJobs/LatestJobs';
import Results from './components/Results/Results';
import AdmitCard from './components/AdmitCard/AdmitCard';
import Syllabus from './components/Syllabus/Syllabus';
import Contact from './components/Contact/Contact';
import ApplyNow from './components/ApplyNow/ApplyNow';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest-jobs" element={<LatestJobs />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admit-card" element={<AdmitCard />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyNow />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
