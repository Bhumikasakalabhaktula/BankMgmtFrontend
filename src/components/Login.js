import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';


const Login = () => {

  useEffect(()=>{
    localStorage.clear();
  })
  
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const { email, password } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:9898/login', data);
      console.log(response);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('email', email);
      
      const userRole=  localStorage.getItem('role');
      if(userRole==='user'){
        alert(' User Login successful');
        navigate('/home');
      }
      else{
        alert('Admin Login successful');
        navigate('/adminHome');
      }
          
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data === 'Invalid email or password.') {
        alert(error.response.data);
      } else {
        alert('Login failed. Please try again.');
      }
    }
  };
  return (
        <div className={styles.container}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className={`${styles.form} ${styles.addGuideForm}`}>
            <div className={styles.formGroup}>
              <input
                className={`${styles.emailInput}`}
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onInputChange}
              />
              <input
                className={`${styles.passwordInput}`}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onInputChange}
              />
            </div>
              <button type="submit" className={`${styles.submitButton} ${styles['addGuideForm button']}`}>
              Login
            </button>
            <div className={styles.registerLink}>
              New User? <Link to="/register" className={styles.createAccountLink}>Create Account</Link>
            </div>
          </form>
        </div>
  );
};

export default Login;
