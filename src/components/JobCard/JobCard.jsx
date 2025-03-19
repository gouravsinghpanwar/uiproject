import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';
import jobIcon from '../../images/examicon.png';

const JobCard = ({ title, description, link }) => {
  // Extract exam type from title
  const getExamType = (title) => {
    if (title.toLowerCase().includes('uppsc')) return 'upsc';
    if (title.toLowerCase().includes('neet')) return 'neet';
    if (title.toLowerCase().includes('jee')) return 'jee';
    if (title.toLowerCase().includes('cat')) return 'cat';
    return '';
  };

  const examType = getExamType(title);

  return (
    <div className="job-card">
      <div className="card-header">
        <img src={jobIcon} alt="" className="job-icon" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className="card-actions">
        <Link to={`/apply?exam=${examType}`} className="know-more">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
