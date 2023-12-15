// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import styles from './Registration.module.css';



// const Register = () => {
//   const [userData, setUserData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     accountnumber: '',
//     role:''
//   });
//   const [errorMessages, setErrorMessages] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [passwordsDoNotMatchError, setPasswordsDoNotMatchError] = useState('');

//   const onInputChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//     setErrorMessages({ ...errorMessages, [e.target.name]: '' });
//     setPasswordsDoNotMatchError(''); // Clear the "Passwords do not match" error message
//   }

//   const { email, password, confirmPassword, accountnumber } = userData;

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }

//   const validateForm = () => {
//     const errors = {};
//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!validateEmail(email)) {
//       errors.email = 'Invalid email format';
//     }
//     if (!password) {
//       errors.password = 'Password is required';
//     }
//     if (password !== confirmPassword) {
//       setPasswordsDoNotMatchError('Passwords do not match');
//     }
//     return errors;
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const errors = validateForm();
//     if (Object.keys(errors).length > 0 || passwordsDoNotMatchError) {
//       setErrorMessages(errors);
//       return;
//     } else {
//       const data = {
//         email: email,
//         password: password,
//         accountnumber: accountnumber,
//         role:'user'
//       }
//       userDataToSend(data);
//     }
//   }

//   const userDataToSend = (data) => {
//     axios.post("http://localhost:9898/register", data)
//       .then((response) => {
//         console.log(response);
//         alert("Registration successful");
//       })
//       .catch((error) => {
//         alert("Registraion failed");
//       });
//   }

//   return (
//     <div className={styles.card}>
   
//     <br></br>
//       <h2>Welcome to Registration Page</h2>
//       <div className={styles.scrollingTextContainer}>
//         <p className={styles.scrollingText}>You are just a few steps away!</p>
//       </div>
//       <div className={styles.container}>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email:</label>
//             <input type="text" name="email" value={email} onChange={onInputChange} />
//             <div className={styles.error}>{errorMessages.email}</div>
//           </div>
//           <div>
//             <label>Password: {errorMessages.password && <span className={styles.error}>{errorMessages.password}</span>}</label>
//             <input type="password" name="password" value={password} onChange={onInputChange} />
//           </div>
//           <div>
//             <label>Confirm Password:</label>
//             <input type="password" name="confirmPassword" value={confirmPassword} onChange={onInputChange} />
//             {passwordsDoNotMatchError && <div className={styles.error}>{passwordsDoNotMatchError}</div>}
//           </div>
//           <div>
//             <label>Account Number:</label>
//             <input type="password" name="accountnumber" value={accountnumber} onChange={onInputChange} />
//           </div>
//           <button type="submit">Register</button>
//           <div className={styles["login-link"]}>
//             Already have an account?/Successfully registered?<br /><Link to="/">Log in</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;





















import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Registration.module.css';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    accountnumber: '',
     name:'',
    address:'',
    balance:'',

  });

  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    accountnumber: '',
    name:'',
    address:'',
    balance:'',
  });

  const validateEmail = (email) => {
    return email.trim() !== '' && email.includes('@');
  };

  const validateForm = () => {
    const errors = {};

    if (!userData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(userData.email)) {
      errors.email = 'Please enter a valid email (including @)';
    }

    if (!userData.password) {
      errors.password = 'Password is required';
    }

    if (userData.password !== userData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (userData.accountnumber && userData.accountnumber.length !== 11) {
      errors.accountnumber = 'Account number should be 11 digits';
    }

    return errors;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const errors = validateForm();

    if (name === 'accountnumber') {
      errors.confirmPassword = userData.password !== userData.confirmPassword ? 'Passwords do not match' : '';
    }

    setErrorMessages({ ...errorMessages, [name]: errors[name] });
  };

  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrorMessages({ ...errorMessages, [e.target.name]: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    } else {
      const data = {
        email: userData.email,
        password: userData.password,
        accountnumber: userData.accountnumber,
        role: 'user',
        name: userData.name,
        address:userData.address,
        balance:userData.balance,
        
      };
      userDataToSend(data);
    }
  };

  const userDataToSend = (data) => {
    console.log(data);
    axios
      .post('http://localhost:9898/register', data)
      .then((response) => {
        console.log(response);
        alert('Registration successful');
      })
      .catch((error) => {
        alert('Registration failed');
      });
  };
  const backgroundStyle = {
    backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRERER...')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
  };
  return (
    <div style={backgroundStyle}>
    <div className='styles'>
    <div className={styles.card}>
      <br />
      <h2>Welcome to Registration Page</h2>
      <div className={styles.scrollingTextContainer}>
        <p className={styles.scrollingText}>You are just a few steps away!</p>
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={onInputChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>{errorMessages.email}</div>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={onInputChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>{errorMessages.password}</div>
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={onInputChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>{errorMessages.confirmPassword}</div>
          </div>
          <div>
            <label>Account Number:</label>
            <input
              type="text"
              name="accountnumber"
              value={userData.accountnumber}
              onChange={onInputChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>{errorMessages.accountnumber}</div>
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={onInputChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>{errorMessages.name}</div>
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={onInputChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>{errorMessages.address}</div>
          </div>
          <div>
            <label>Balance:</label>
            <input
              type="text"
              name="balance"
              value={userData.balance}
              onChange={onInputChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>{errorMessages.balance}</div>
          </div>
          <button type="submit">Register</button>
          <div className={styles['login-link']}>
            Already have an account?/Successfully registered?<br />
            <Link to="/">Log in</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Register;
