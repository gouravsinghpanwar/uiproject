import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png';
import homeIcon from '../../images/homeicon.png';
import jobIcon from '../../images/jobicon.webp';
import resultIcon from '../../images/resulticon.png';
import admitIcon from '../../images/admitcardicon.png';
import syllabusIcon from '../../images/syllabusicon.png';
import contactIcon from '../../images/contactusicon.png';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Sarkari Result Logo" className="logo" />
        </Link>
        <div className="nav-title">
          <h1>Sarkari Result</h1>
          <p>Government of India</p>
          <p>Ministry of Education</p>
        </div>
      </div>
      <div className="nav-right">
        <div className="search-box">
          <input type="text" placeholder="Search here" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
            <img src={homeIcon} alt="" className="nav-icon" />
            Home
          </Link>
          <Link to="/latest-jobs" className={`nav-link ${currentPath === '/latest-jobs' ? 'active' : ''}`}>
            <img src={jobIcon} alt="" className="nav-icon" />
            Latest Jobs
          </Link>
          <Link to="/results" className={`nav-link ${currentPath === '/results' ? 'active' : ''}`}>
            <img src={resultIcon} alt="" className="nav-icon" />
            Results
          </Link>
          <Link to="/admit-card" className={`nav-link ${currentPath === '/admit-card' ? 'active' : ''}`}>
            <img src={admitIcon} alt="" className="nav-icon" />
            Admit Card
          </Link>
          <Link to="/syllabus" className={`nav-link ${currentPath === '/syllabus' ? 'active' : ''}`}>
            <img src={syllabusIcon} alt="" className="nav-icon" />
            Syllabus
          </Link>
          <Link to="/contact" className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}>
            <img src={contactIcon} alt="" className="nav-icon" />
            Contact
          </Link>
          <Link to="/login" className={`nav-link ${currentPath === '/login' ? 'active' : ''}`}>
            <i className="fas fa-user nav-icon"></i>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
