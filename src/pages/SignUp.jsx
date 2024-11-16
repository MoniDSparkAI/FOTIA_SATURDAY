import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaUserAlt, FaEnvelope, FaEye, FaEyeSlash, FaKey, FaMobileAlt } from 'react-icons/fa';
import SignupVerifyPopup from './SignupVerifyPopup';
import './signUp.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeSwitcher from '../components/ThemeSwitcher';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    phone_number: '',
    referral_code: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    phone_number: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handlePhoneNumberChange = (phone) => {
    const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;
    setFormData({ ...formData, phone_number: formattedPhone });
    validateField('phone_number', formattedPhone);
  };
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate input on change
    validateField(name, value);
  };



  const validateField = (field, value) => {
    let errorMessage = '';
    switch (field) {
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          errorMessage = 'Invalid email address.';
        }
        break;
      case 'username':
        if (!value.trim()) {
          errorMessage = 'Username is required.';
        }
        break;
      case 'password':
        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (!passwordPattern.test(value)) {
          errorMessage = 'Password must be at least 8 characters, include one uppercase letter, and one special character.';
        }
        break;
      case 'phone_number':
        
        // Regex pattern to validate international phone numbers (e.g., +919866724766)
        const phonePattern = /^\+?[1-9]\d{9,14}$/;
        if (!phonePattern.test(value)) {
          errorMessage = 'Invalid phone number. Please include country code.';
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [field]: errorMessage });
  };
  

  const isFormValid = () => {
    const currentErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        currentErrors[field] = errors[field];
      }
    });
    return Object.values(currentErrors).every((msg) => !msg);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return; // Prevent submission if there are errors
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch('http://127.0.0.1:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        setShowPopup(true);
        // Save user details in localStorage
         // Save user details including ID in localStorage
         const userData = {
          ...formData,
          id: result.user?.id || result.id || result.data?.id || null, // Fallback to null if not found
        };
        localStorage.setItem('user', JSON.stringify(userData));
        setErrors({}); // Clear errors
      } else {
        setErrors({ ...errors, general: result.message });
      }
    } catch (err) {
      console.error('Error:', err);
      setErrors({ ...errors, general: 'An error occurred while registering.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="signup-container">
      <div className="top-bar">
        <Link to="/" className="home-link">Home</Link>
        <ThemeSwitcher />
      </div>
      <div className="signup-content">
        <div className="signup-text" data-aos="fade-right">
          <h2>Create Your Fotia Account Today</h2>
          <p>Unlock the power of the crypto revolution in just a few steps.</p>
          <p>Your journey to financial independence starts here.</p>
        </div>
        <div className="signup-form" data-aos="fade-left">
          <h2>Create Account!</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUserAlt className="icon" />
              <input
                type="text"
                name="username"
                value={formData.username}
                placeholder="User Name"
                onChange={handleInputChange}
                required
              />
          
            </div>
            {errors.username && <p className="error-message">{errors.username}</p>}
            <div className="input-group phone-container">
              <FaMobileAlt className="phone-icon" />
              <PhoneInput
                country="us"
                value={formData.phone_number}
                onChange={handlePhoneNumberChange}
                enableSearch
                placeholder="Enter Mobile Number"
                excludeCountries={['ae']}
              />
         
            </div>
            {errors.phone_number && <p className="error-message">{errors.phone_number}</p>}
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
             
            </div>
            {errors.email && <p className="error-message">{errors.email}</p>}
            <div className="password-field input-group">
              <div className="password-container">
                <span className="toggle-password icon" onClick={toggleShowPassword}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
              </div>
             
            </div>
            {errors.password && <p className="error-message">{errors.password}</p>}
            <div className="input-group">
              <FaKey className="icon" />
              <input
                type="text"
                name="referral_code"
                value={formData.referral_code}
                onChange={handleInputChange}
                placeholder="Referral Code"
                
              />
            </div>
            {errors.general && <p className="error-message">{errors.general}</p>}
            <button className="signup-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Join Now'}
            </button>
          </form>
        </div>
      </div>
      {showPopup && (
        <SignupVerifyPopup
          message="Check your email for verification."
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default SignUp;
