import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ApplyNow.css';

const ApplyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const examType = queryParams.get('exam') || '';

  const [formData, setFormData] = useState({
    examType: examType,
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    category: '',
    qualification: '',
    address: '',
    state: '',
    pincode: '',
    photo: null,
    signature: null,
    documents: [],
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [previewImage, setPreviewImage] = useState(null);

  const examTypes = [
    { value: 'upsc', label: 'UPPSC Pre 2025' },
    { value: 'neet', label: 'NEET/UG 2025' },
    { value: 'jee', label: 'JEE Mains 2025' },
    { value: 'cat', label: 'CAT 2025' }
  ];

  const categories = [
    'General',
    'OBC',
    'SC',
    'ST',
    'EWS'
  ];

  const qualifications = [
    'High School',
    'Intermediate',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Ph.D'
  ];

  const states = [
    'Andhra Pradesh', 'Bihar', 'Delhi', 'Gujarat', 'Haryana',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Punjab',
    'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      if (name === 'photo' || name === 'signature') {
        const file = files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage({ name, url: reader.result });
          };
          reader.readAsDataURL(file);
          setFormData(prev => ({ ...prev, [name]: file }));
        }
      } else {
        setFormData(prev => ({ ...prev, [name]: [...files] }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.examType) newErrors.examType = 'Please select an exam';
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
      if (!formData.dob) newErrors.dob = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    }

    if (currentStep === 2) {
      if (!formData.category) newErrors.category = 'Category is required';
      if (!formData.qualification) newErrors.qualification = 'Qualification is required';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.pincode) newErrors.pincode = 'PIN code is required';
      else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Invalid PIN code';
    }

    if (currentStep === 3) {
      if (!formData.photo) newErrors.photo = 'Photo is required';
      if (!formData.signature) newErrors.signature = 'Signature is required';
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Please agree to terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      // Here you would typically send the form data to a server
      alert('Application submitted successfully!');
      navigate('/');
    }
  };

  return (
    <div className="apply-now-container">
      <div className="progress-bar">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <span>Personal Details</span>
        </div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <span>Educational Details</span>
        </div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <span>Documents Upload</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="application-form">
        {step === 1 && (
          <div className="form-step">
            <h2>Personal Details</h2>
            
            <div className="form-group">
              <label>Exam Type*</label>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleInputChange}
                className={errors.examType ? 'error' : ''}
              >
                <option value="">Select Exam</option>
                {examTypes.map(exam => (
                  <option key={exam.value} value={exam.value}>
                    {exam.label}
                  </option>
                ))}
              </select>
              {errors.examType && <span className="error-message">{errors.examType}</span>}
            </div>

            <div className="form-group">
              <label>Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Enter 10-digit number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date of Birth*</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className={errors.dob ? 'error' : ''}
                />
                {errors.dob && <span className="error-message">{errors.dob}</span>}
              </div>

              <div className="form-group">
                <label>Gender*</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={errors.gender ? 'error' : ''}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span className="error-message">{errors.gender}</span>}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Educational Details</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Category*</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={errors.category ? 'error' : ''}
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && <span className="error-message">{errors.category}</span>}
              </div>

              <div className="form-group">
                <label>Highest Qualification*</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className={errors.qualification ? 'error' : ''}
                >
                  <option value="">Select Qualification</option>
                  {qualifications.map(qual => (
                    <option key={qual} value={qual.toLowerCase()}>
                      {qual}
                    </option>
                  ))}
                </select>
                {errors.qualification && <span className="error-message">{errors.qualification}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Address*</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? 'error' : ''}
                placeholder="Enter your complete address"
                rows="3"
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>State*</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={errors.state ? 'error' : ''}
                >
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state} value={state.toLowerCase()}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>

              <div className="form-group">
                <label>PIN Code*</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className={errors.pincode ? 'error' : ''}
                  placeholder="Enter 6-digit PIN code"
                  maxLength="6"
                />
                {errors.pincode && <span className="error-message">{errors.pincode}</span>}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Document Upload</h2>

            <div className="upload-section">
              <div className="form-group">
                <label>Photo Upload*</label>
                <div className="upload-box">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleInputChange}
                    accept="image/*"
                    className={errors.photo ? 'error' : ''}
                  />
                  {previewImage && previewImage.name === 'photo' && (
                    <img src={previewImage.url} alt="Preview" className="preview-image" />
                  )}
                </div>
                <small>Max size: 2MB. Format: JPG, PNG</small>
                {errors.photo && <span className="error-message">{errors.photo}</span>}
              </div>

              <div className="form-group">
                <label>Signature Upload*</label>
                <div className="upload-box">
                  <input
                    type="file"
                    name="signature"
                    onChange={handleInputChange}
                    accept="image/*"
                    className={errors.signature ? 'error' : ''}
                  />
                  {previewImage && previewImage.name === 'signature' && (
                    <img src={previewImage.url} alt="Preview" className="preview-image" />
                  )}
                </div>
                <small>Max size: 1MB. Format: JPG, PNG</small>
                {errors.signature && <span className="error-message">{errors.signature}</span>}
              </div>

              <div className="form-group">
                <label>Supporting Documents</label>
                <div className="upload-box">
                  <input
                    type="file"
                    name="documents"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    multiple
                  />
                </div>
                <small>Max size: 5MB per file. Format: PDF, DOC</small>
              </div>
            </div>

            <div className="form-group terms-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className={errors.agreeToTerms ? 'error' : ''}
                />
                I agree to the terms and conditions*
              </label>
              {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
            </div>
          </div>
        )}

        <div className="form-actions">
          {step > 1 && (
            <button type="button" onClick={handlePrevious} className="btn-secondary">
              Previous
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={handleNext} className="btn-primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn-primary">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplyNow;
