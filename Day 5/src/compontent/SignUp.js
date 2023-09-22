// SignUp.js
import React, { useState } from 'react';
import './SignUp.css'; // Import CSS for styling
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../compontent/state/index';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    const { firstName, lastName, email, password } = formData;
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert('Email already exists. Please use a different email.');
      return; 
    }
    dispatch(
      addUser({
        username: email,
        password, 
      })
    );
    navigate('/signin');
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='sign'>
    <div className="signup-container">
    <h2>Sign Up</h2>
    <form >
    <div className="form-group">
    <label>First Name:</label>
    <input
    type="text"
    name="firstName"
    value={formData.firstName}
    onChange={handleInputChange}
    required
    />
    </div>
    <div className="form-group">
    <label>Last Name:</label>
    <input
    type="text"
    name="lastName"
    value={formData.lastName}
    onChange={handleInputChange}
    required
    />
    </div>
    <div className="form-group">
    <label>Email:</label>
    <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    required
    />
    </div>
    <div className="form-group">
    <label>Password:</label>
    <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleInputChange}
    required
    />
    </div>
    <input
    onClick={handleSignUp}
    type="button"
    value="Sign Up"
    ></input>

    </form>
    </div>
    </div>
    );
  }

export default SignUp;
