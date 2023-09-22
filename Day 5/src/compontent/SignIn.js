import React, { useState } from 'react';
import './SignIn.css'; 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  console.log(users);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const {  email, password } = formData;
    const userExists = users.some((user) => user.email === email);
    const user = users.find((user) => user.email === email);
    console.log(user);
    if (user.password !== password) {
      alert("Invalid password");
      return; 
    }
    if (userExists.password === password) {
      console.log("Login Successful");
      return; 
    }
    navigate('/');
  };

  return (
    <div className='signin'>
    <div className='sc'>
    <div className="signin-container">
    <h2>Sign In</h2>
    <form>
    <div className="form-group">
    <label>Email:</label>
    <input
      type="text"
      name="username"
      value={formData.username}
      onChange={handleInputChange}
      required/>
    </div>
    <div className="form-group">
    <label>Password:</label>
    <input
    type="password" 
    name="password"
    value={formData.password}
    onChange={handleInputChange}
      required/>
    </div>
    <input type='button' onClick={handleLogin} value='Login' />
    
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
    </div>
    </div>
    </div>
  );
}

export default SignIn;
