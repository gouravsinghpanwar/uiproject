import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import JobCard from '../JobCard/JobCard';
import resultIcon from '../../images/resulticon.png';
import admitIcon from '../../images/admitcardicon.png';
import syllabusIcon from '../../images/syllabusicon.png';

const Home = () => {
  const jobCards = [
    {
      title: "UPPSC Pre 2025 Apply Online",
      description: "Apply online for UPPSC Pre 2025.",
      link: "#"
    },
    {
      title: "NEET/UG 2025",
      description: "India's top medical exam to become a doctor ",
      link: "#"
    },
    {
      title: "JEE Mains 2025",
      description: "Engineering toppest entrance exam.",
      link: "#"
    },
    {
      title: "CAT 2025 Apply Online",
      description: "Register online for CAT 2025 today.",
      link: "#"
    }
  ];

  const examResults = [
    {
      title: "UPPSC Pre 2024",
      date: "March 15, 2025",
      status: "Available"
    },
    {
      title: "NEET/UG 2024",
      date: "March 10, 2025",
      status: "Available"
    }
  ];

  const admitCards = [
    {
      title: "UPPSC Pre 2025",
      date: "Available from April 1, 2025"
    },
    {
      title: "NEET/UG 2025",
      date: "Available from March 25, 2025"
    },
    {
      title: "JEE Mains 2025",
      date: "Available from March 20, 2025"
    },
    {
      title: "CAT 2025",
      date: "Coming Soon"
    },
    {
      title: "SSC CGL 2025",
      date: "Coming Soon"
    }
  ];

  const syllabusItems = [
    {
      title: "UPPSC Pre 2025",
      type: "Complete Syllabus"
    },
    {
      title: "NEET/UG 2025",
      type: "Subject-wise Syllabus"
    },
    {
      title: "JEE Mains 2025",
      type: "Topic-wise Syllabus"
    },
    {
      title: "CAT 2025",
      type: "Section-wise Syllabus"
    },
    {
      title: "SSC CGL 2025",
      type: "Tier-wise Syllabus"
    }
  ];

  return (
    <div className="home">
      <div className="welcome-section">
        <h2>Welcome To No.1 Education Portal</h2>
      </div>

      <div className="job-cards-container">
        {jobCards.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>

      <div className="quick-links">
        <div className="quick-link-section">
          <div className="section-header">
            <img src={resultIcon} alt="Result Icon" className="section-icon" />
            <h3>Latest Results</h3>
          </div>
          <ul>
            {examResults.map((result, index) => (
              <li key={index}>
                <Link to="/results" className="result-link">
                  <span className="exam-title">{result.title}</span>
                  <span className="result-date">{result.date}</span>
                  <span className="result-status">{result.status}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/results" className="view-more">View All Results →</Link>
        </div>

        <div className="quick-link-section">
          <div className="section-header">
            <img src={admitIcon} alt="Admit Card Icon" className="section-icon" />
            <h3>Admit Cards</h3>
          </div>
          <ul>
            {admitCards.map((card, index) => (
              <li key={index}>
                <Link to="/admit-card" className="admit-card-link">
                  <span className="exam-title">{card.title}</span>
                  <span className="card-date">{card.date}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/admit-card" className="view-more">View All Admit Cards →</Link>
        </div>

        <div className="quick-link-section">
          <div className="section-header">
            <img src={syllabusIcon} alt="Syllabus Icon" className="section-icon" />
            <h3>Latest Syllabus</h3>
          </div>
          <ul>
            {syllabusItems.map((item, index) => (
              <li key={index}>
                <Link to="/syllabus" className="syllabus-link">
                  <span className="exam-title">{item.title}</span>
                  <span className="syllabus-type">{item.type}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/syllabus" className="view-more">View All Syllabus →</Link>
        </div>
      </div>

      <div className="important-info">
        <h3>Important Information</h3>
        <div className="info-items">
          <details>
            <summary>Why should I consider government job?</summary>
            <p>Government jobs offer stability, good benefits, and career growth opportunities.</p>
          </details>
          <details>
            <summary>What kind of government job I can get?</summary>
            <p>There are various categories including administrative, technical, teaching, and more.</p>
          </details>
          <details>
            <summary>With all the jobs, How can I get a job working in gov?</summary>
            <p>Prepare for competitive exams, maintain updated with notifications, and apply timely.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Home;
