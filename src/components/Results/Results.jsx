import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

const Results = () => {
  const [formData, setFormData] = useState({
    rollNumber: '',
    dateOfBirth: '',
    examType: 'select',
    year: ''
  });

  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');

  const examTypes = [
    { value: 'select', label: 'Select Exam Type' },
    { value: 'uppsc', label: 'UPPSC' },
    { value: 'neet', label: 'NEET' },
    { value: 'jee', label: 'JEE Mains' },
    { value: 'cat', label: 'CAT' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.rollNumber || !formData.dateOfBirth || formData.examType === 'select' || !formData.year) {
      setError('Please fill in all fields');
      return;
    }

    // Show result section
    setShowResult(true);
  };

  // Mock result data (in a real app, this would come from an API)
  const resultData = {
    name: 'John Doe',
    rollNumber: formData.rollNumber,
    examType: formData.examType.toUpperCase(),
    totalMarks: 500,
    marksObtained: 425,
    percentage: 85,
    rank: 156,
    status: 'PASSED'
  };

  return (
    <div className="results-container">
      <div className="breadcrumb">
        <p>You are here &gt; <Link to="/">Home</Link> &gt; Results</p>
      </div>

      <h1>Check Your Results</h1>

      <div className="results-content">
        <div className="form-container">
          <h2>Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="examType">Exam Type</label>
              <select
                id="examType"
                name="examType"
                value={formData.examType}
                onChange={handleInputChange}
              >
                {examTypes.map(exam => (
                  <option key={exam.value} value={exam.value}>
                    {exam.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="rollNumber">Roll Number</label>
              <input
                type="text"
                id="rollNumber"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
                placeholder="Enter your roll number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                placeholder="Enter exam year"
                min="2000"
                max="2025"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="submit-btn">
              View Result
            </button>
          </form>
        </div>

        {showResult && (
          <div className="result-display">
            <h2>Result Card</h2>
            <div className="result-card">
              <div className="student-info">
                <div className="info-row">
                  <span className="label">Name:</span>
                  <span className="value">{resultData.name}</span>
                </div>
                <div className="info-row">
                  <span className="label">Roll Number:</span>
                  <span className="value">{resultData.rollNumber}</span>
                </div>
                <div className="info-row">
                  <span className="label">Exam Type:</span>
                  <span className="value">{resultData.examType}</span>
                </div>
              </div>

              <div className="marks-info">
                <div className="info-row">
                  <span className="label">Total Marks:</span>
                  <span className="value">{resultData.totalMarks}</span>
                </div>
                <div className="info-row">
                  <span className="label">Marks Obtained:</span>
                  <span className="value">{resultData.marksObtained}</span>
                </div>
                <div className="info-row">
                  <span className="label">Percentage:</span>
                  <span className="value">{resultData.percentage}%</span>
                </div>
                <div className="info-row">
                  <span className="label">Rank:</span>
                  <span className="value">{resultData.rank}</span>
                </div>
              </div>

              <div className="result-status">
                <span className="label">Status:</span>
                <span className={`status ${resultData.status.toLowerCase()}`}>
                  {resultData.status}
                </span>
              </div>

              <button onClick={() => window.print()} className="print-btn">
                Print Result
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
