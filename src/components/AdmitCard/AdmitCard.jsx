import React, { useState } from 'react';
import './AdmitCard.css';

const AdmitCard = () => {
  const [formData, setFormData] = useState({
    examType: '',
    registrationNumber: '',
    dateOfBirth: '',
    name: '',
    fatherName: '',
    motherName: '',
    gender: '',
    category: '',
    photo: null
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoPreview(reader.result);
        };
        reader.readAsDataURL(file);
        setFormData(prev => ({ ...prev, [name]: file }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.examType) newErrors.examType = 'Please select exam type';
    if (!formData.registrationNumber) newErrors.registrationNumber = 'Registration number is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to fetch the admit card
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="admit-card-container">
      <div className="breadcrumb">
        You are here {'>'} Home {'>'} Admit Card
      </div>
      
      <h1>Download Admit Card</h1>

      <div className="admit-card-content">
        <div className="form-container">
          <h2>Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="examType">Exam Type</label>
                <select
                  id="examType"
                  name="examType"
                  value={formData.examType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Exam</option>
                  <option value="upsc">UPPSC Pre 2025</option>
                  <option value="neet">NEET/UG 2025</option>
                  <option value="jee">JEE Mains 2025</option>
                  <option value="cat">CAT 2025</option>
                </select>
                {errors.examType && <span className="error-message">{errors.examType}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="registrationNumber">Registration Number</label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  placeholder="Enter registration number"
                />
                {errors.registrationNumber && <span className="error-message">{errors.registrationNumber}</span>}
              </div>
            </div>

            <div className="form-group">
              <div className="form-field">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
                {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-field">
                <label htmlFor="fatherName">Father's Name</label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  placeholder="Enter father's name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="motherName">Mother's Name</label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  placeholder="Enter mother's name"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-field">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="ews">EWS</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="form-field full-width">
                <label htmlFor="photo">Upload Photo</label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="file-input"
                />
                {photoPreview && (
                  <div className="photo-preview">
                    <img src={photoPreview} alt="Preview" />
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="submit-btn">Download Admit Card</button>
          </form>
        </div>

        <div className="admit-card-display">
          <div className="admit-card">
            <div className="admit-card-header">
              <h2>Admit Card</h2>
              <p className="exam-year">Examination 2025</p>
            </div>

            {formData.name && (
              <>
                <div className="candidate-info">
                  <div className="photo-section">
                    {photoPreview ? (
                      <img src={photoPreview} alt="Candidate" className="candidate-photo" />
                    ) : (
                      <div className="candidate-photo" />
                    )}
                  </div>
                  <div className="info-section">
                    <div className="info-row">
                      <span className="label">Name:</span>
                      <span className="value">{formData.name}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Father's Name:</span>
                      <span className="value">{formData.fatherName}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Mother's Name:</span>
                      <span className="value">{formData.motherName}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Date of Birth:</span>
                      <span className="value">{formData.dateOfBirth}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Gender:</span>
                      <span className="value">{formData.gender}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Category:</span>
                      <span className="value">{formData.category}</span>
                    </div>
                  </div>
                </div>

                <div className="exam-details">
                  <h3>Examination Details</h3>
                  <div className="info-row">
                    <span className="label">Exam:</span>
                    <span className="value">{formData.examType}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Registration No:</span>
                    <span className="value">{formData.registrationNumber}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Exam Date:</span>
                    <span className="value">April 15, 2025</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Reporting Time:</span>
                    <span className="value">08:30 AM</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Venue:</span>
                    <span className="value">Examination Center, New Delhi</span>
                  </div>
                </div>

                <div className="instructions">
                  <h3>Important Instructions</h3>
                  <ul>
                    <li>Please arrive at the examination center 1 hour before the scheduled time.</li>
                    <li>Bring this admit card and a valid photo ID proof.</li>
                    <li>Electronic devices are not allowed in the examination hall.</li>
                    <li>Follow all COVID-19 safety protocols.</li>
                  </ul>
                </div>

                <a href="#" className="download-btn" onClick={(e) => { e.preventDefault(); window.print(); }}>
                  Download Admit Card
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitCard;
