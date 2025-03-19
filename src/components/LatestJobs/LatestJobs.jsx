import React, { useState } from 'react';
import './LatestJobs.css';

const LatestJobs = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for latest jobs with varied dates
  const jobs = [
    { id: 1, title: 'UPPSC PCS Pre 2025 Recruitment', category: 'state', lastDate: '2025-03-25', type: 'Featured' },
    { id: 2, title: 'Indian Army SSC Technical Entry', category: 'defense', lastDate: '2025-03-28', type: 'New' },
    { id: 3, title: 'SBI PO Recruitment 2025', category: 'bank', lastDate: '2025-04-05', type: 'Featured' },
    { id: 4, title: 'UPSC Civil Services 2025', category: 'upsc', lastDate: '2025-04-15', type: 'Featured' },
    { id: 5, title: 'Delhi High Court Clerk Recruitment', category: 'state', lastDate: '2025-04-20', type: 'New' },
    { id: 6, title: 'IBPS Clerk XII', category: 'bank', lastDate: '2025-04-30', type: 'Regular' },
    { id: 7, title: 'Indian Air Force AFCAT', category: 'defense', lastDate: '2025-05-10', type: 'Featured' },
    { id: 8, title: 'RRB NTPC 2025', category: 'railway', lastDate: '2025-05-15', type: 'New' },
    { id: 9, title: 'DRDO Scientist B Recruitment', category: 'defense', lastDate: '2025-05-25', type: 'Regular' },
    { id: 10, title: 'SSC CGL 2025', category: 'ssc', lastDate: '2025-06-01', type: 'Featured' },
    { id: 11, title: 'NEET PG 2025', category: 'medical', lastDate: '2025-06-10', type: 'Regular' },
    { id: 12, title: 'RBI Grade B Officer', category: 'bank', lastDate: '2025-06-15', type: 'New' },
    { id: 13, title: 'Indian Navy MR Recruitment', category: 'defense', lastDate: '2025-06-30', type: 'Regular' },
    { id: 14, title: 'GATE 2025', category: 'engineering', lastDate: '2025-07-15', type: 'Featured' },
    { id: 15, title: 'UP Police Constable', category: 'state', lastDate: '2025-07-30', type: 'New' }
  ].sort((a, b) => new Date(a.lastDate) - new Date(b.lastDate));

  const categories = [
    { value: 'all', label: 'All Jobs' },
    { value: 'upsc', label: 'UPSC' },
    { value: 'state', label: 'State Govt' },
    { value: 'defense', label: 'Defense' },
    { value: 'bank', label: 'Banking' },
    { value: 'railway', label: 'Railway' },
    { value: 'ssc', label: 'SSC' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'medical', label: 'Medical' }
  ];

  const filteredJobs = jobs
    .filter(job => filter === 'all' || job.category === filter)
    .filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Calculate days remaining
  const getDaysRemaining = (dateString) => {
    const today = new Date();
    const lastDate = new Date(dateString);
    const diffTime = lastDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="latest-jobs-container">
      <div className="breadcrumb">
        <p>You are here &gt; <a href="/">Home</a> &gt; Latest Jobs</p>
      </div>

      <h1>Latest Jobs</h1>

      <div className="jobs-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.value}
              className={`filter-btn ${filter === category.value ? 'active' : ''}`}
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="jobs-table-container">
        <table className="jobs-table">
          <thead>
            <tr>
              <th>Job's Name</th>
              <th>Last Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map(job => (
              <tr key={job.id} className={job.type.toLowerCase()}>
                <td>
                  <div className="job-title">
                    <span>{job.title}</span>
                    {job.type !== 'Regular' && (
                      <span className={`job-tag ${job.type.toLowerCase()}`}>
                        {job.type}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <div className="date-info">
                    <div>{formatDate(job.lastDate)}</div>
                    <div className="days-remaining">
                      {getDaysRemaining(job.lastDate)} days left
                    </div>
                  </div>
                </td>
                <td>
                  <button className="view-details-btn">View More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="jobs-footer">
        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot featured"></span>
            <span>Featured Jobs</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot new"></span>
            <span>New Jobs</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot regular"></span>
            <span>Regular Jobs</span>
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

export default LatestJobs;
