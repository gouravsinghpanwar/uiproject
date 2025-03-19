import React, { useState } from 'react';
import './Syllabus.css';
import syllabusIcon from '../../images/syllabusicon.png';

const Syllabus = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const examCategories = [
    { id: 'all', name: 'All Exams' },
    { id: 'upsc', name: 'UPSC' },
    { id: 'banking', name: 'Banking' },
    { id: 'ssc', name: 'SSC' },
    { id: 'defense', name: 'Defense' },
    { id: 'teaching', name: 'Teaching' },
    { id: 'railway', name: 'Railway' },
    { id: 'state', name: 'State Exams' }
  ];

  const syllabusData = [
    {
      id: 1,
      title: 'UPSC Civil Services 2025',
      category: 'upsc',
      lastUpdated: '2025-03-15',
      examDate: '2025-06-18',
      highlights: [
        'General Studies Paper I, II, III, IV',
        'CSAT (Civil Services Aptitude Test)',
        'Optional Subject',
        'Interview/Personality Test'
      ],
      fileSize: '2.5 MB',
      language: 'English, Hindi',
      type: 'Featured'
    },
    {
      id: 2,
      title: 'SBI PO 2025',
      category: 'banking',
      lastUpdated: '2025-03-10',
      examDate: '2025-05-15',
      highlights: [
        'Quantitative Aptitude',
        'Reasoning Ability',
        'English Language',
        'General Awareness'
      ],
      fileSize: '1.8 MB',
      language: 'English',
      type: 'New'
    },
    {
      id: 3,
      title: 'SSC CGL 2025',
      category: 'ssc',
      lastUpdated: '2025-03-12',
      examDate: '2025-05-20',
      highlights: [
        'General Intelligence & Reasoning',
        'General Awareness',
        'Quantitative Aptitude',
        'English Language'
      ],
      fileSize: '2.1 MB',
      language: 'English, Hindi',
      type: 'Featured'
    },
    {
      id: 4,
      title: 'Indian Air Force AFCAT 2025',
      category: 'defense',
      lastUpdated: '2025-03-08',
      examDate: '2025-04-25',
      highlights: [
        'General Awareness',
        'Verbal Ability',
        'Numerical Ability',
        'Military Aptitude'
      ],
      fileSize: '1.5 MB',
      language: 'English',
      type: 'New'
    }
  ];

  const filteredSyllabus = syllabusData
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="syllabus-container">
      <div className="breadcrumb">
        <p>You are here &gt; <a href="/">Home</a> &gt; Syllabus</p>
      </div>

      <div className="page-header">
        <img src={syllabusIcon} alt="Syllabus Icon" className="section-icon" />
        <h1>Latest Exam Syllabus</h1>
      </div>

      <div className="syllabus-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search exam syllabus..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {examCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="syllabus-grid">
        {filteredSyllabus.map(item => (
          <div key={item.id} className={`syllabus-card ${item.type.toLowerCase()}`}>
            <div className="card-header">
              <h2>{item.title}</h2>
              {item.type !== 'Regular' && (
                <span className={`tag ${item.type.toLowerCase()}`}>
                  {item.type}
                </span>
              )}
            </div>

            <div className="card-dates">
              <div>
                <strong>Exam Date:</strong> {formatDate(item.examDate)}
              </div>
              <div>
                <strong>Last Updated:</strong> {formatDate(item.lastUpdated)}
              </div>
            </div>

            <div className="card-highlights">
              <h3>Syllabus Highlights</h3>
              <ul>
                {item.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="card-footer">
              <div className="file-info">
                <span>Size: {item.fileSize}</span>
                <span>Language: {item.language}</span>
              </div>
              <div className="action-buttons">
                <button className="preview-btn">Quick View</button>
                <button className="download-btn">Download PDF</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="syllabus-footer">
        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot featured"></span>
            <span>Featured Syllabus</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot new"></span>
            <span>New Syllabus</span>
          </div>
        </div>

        <div className="pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>10</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
