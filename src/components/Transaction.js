


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Transaction.css'; // Import CSS file for styling
// import { Link, useNavigate } from 'react-router-dom';
// import RouteProtection from '../services/RouteProtection';

// function TransactionForm() {
//   RouteProtection();
//   const [fromAccountNumber, setFromAccountNumber] = useState('');
//   const [toAccountNumber, setToAccountNumber] = useState('');
//   const [amount, setAmount] = useState('');
//   const [transactionStatus, setTransactionStatus] = useState('');
//   const [errorFromAccount, setErrorFromAccount] = useState('');
//   const [errorToAccount, setErrorToAccount] = useState('');
//   const [errorAmount, setErrorAmount] = useState('');
//   const [isAccountNumberValid, setIsAccountNumberValid] = useState(false);
//   const navigate = useNavigate();

//   const fetchAccountNumber = async (email) => {
//     try {
//       const response = await axios.get(`http://localhost:9898/api/user/account/${email}`);
//       if (response.status === 200) {
//         setFromAccountNumber(response.data);
//         localStorage.setItem('accountnumber', response.data);
//         const accountnumber = localStorage.getItem('accountnumber');
//       }
//     } catch (error) {
//       console.error('Error fetching account number:', error);
//     }
//   };

  
//   const validateToAccountNumber = () => {
//     const fromAccount = String(fromAccountNumber); // Convert to string explicitly
//     const toAccount = String(toAccountNumber); // Convert to string explicitly
  
//     if (toAccount.length !== 11) {
//       setErrorToAccount('Please enter a correct account number (exactly 11 digits).');
//       setIsAccountNumberValid(false);
//     } else if (toAccount === fromAccount) {
//       setErrorToAccount('Both account numbers should not match');
//       setIsAccountNumberValid(false);
//     } else {
//       setErrorToAccount('');
//       setIsAccountNumberValid(true);
//     }
//   };
  
  
  
//   const validateAmount = () => {
//     if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
//       setErrorAmount('Invalid amount. Please enter a correct amount.');
//       return false;
//     } else {
//       setErrorAmount('');
//       return true;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isAccountNumberValid || !validateAmount()) {
//       return;
//     }

//     const data = {
//       fromAccountNumber: String(fromAccountNumber),
//       toAccountNumber: toAccountNumber,
//       amount: amount
//     };

//     try {
//       const response = await axios.post('http://localhost:9898/api/transactions/transfer', data);
//       if (response.data === "Transaction successful") {
//         window.alert('Transaction successful');
//         navigate('/conformation');
//       } else {
//         window.alert('Transaction failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   useEffect(() => {
//     const userEmail = localStorage.getItem('email');
//     fetchAccountNumber(userEmail);
//   }, []);

//   return (
//     <div className="transaction-container">
//       <h1 className="transaction-heading">Funds Transfer</h1>
//       <Link to="/requestAtm">
//         <button className="request-atm-button blue-button">Request ATM</button>
//       </Link>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>From Account Number:</label>
//           <input
//             type="number"
//             value={fromAccountNumber}
//             onChange={(e) => setFromAccountNumber(e.target.value)}
//           />
//         </div>
//         {errorFromAccount && <div className="error">{errorFromAccount}</div>}
//         <div className="form-group">
//           <label>To Account Number:</label>
//           <input
//             type="number"
//             value={toAccountNumber}
//             onChange={(e) => setToAccountNumber(e.target.value)}
//             onBlur={validateToAccountNumber}
//           />
//           {errorToAccount && <div className="error">{errorToAccount}</div>}
//           {isAccountNumberValid && (
//             <span role="img" aria-label="checkmark">
//               ✔️
//             </span>
//           )}
//         </div>
//         <div className="form-group">
//           <label>Amount:</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             onBlur={validateAmount}
//           />
//           {errorAmount && <div className="error">{errorAmount}</div>}
//         </div>
//         <button className="transfer-button blue-button" type="submit">
//           Transfer
//         </button>
//       </form>
//       <div className="transaction-status">{transactionStatus}</div>
//       <Link to="/TransactionHistory">
//         <button className="next-button blue-button">Next</button>
//       </Link>
//     </div>
//   );
// }

// export default TransactionForm;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Transaction.css'; // Import CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import RouteProtection from '../services/RouteProtection';

function TransactionForm() {
  RouteProtection();
  const [fromAccountNumber, setFromAccountNumber] = useState('');
  const [toAccountNumber, setToAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');
  const [errorFromAccount, setErrorFromAccount] = useState('');
  const [errorToAccount, setErrorToAccount] = useState('');
  const [errorAmount, setErrorAmount] = useState('');
  const [isAccountNumberValid, setIsAccountNumberValid] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedPin, setGeneratedPin] = useState('');
  const navigate = useNavigate();

  const fetchAccountNumber = async (email) => {
    try {
      const response = await axios.get(`http://localhost:9898/api/user/account/${email}`);
      if (response.status === 200) {
        setFromAccountNumber(response.data);
        localStorage.setItem('accountnumber', response.data);
        const accountnumber = localStorage.getItem('accountnumber');
      }
    } catch (error) {
      console.error('Error fetching account number:', error);
    }
  };

  const validateToAccountNumber = () => {
    const fromAccount = String(fromAccountNumber); // Convert to string explicitly
    const toAccount = String(toAccountNumber); // Convert to string explicitly

    if (toAccount.length !== 11) {
      setErrorToAccount('Please enter a correct account number (exactly 11 digits).');
      setIsAccountNumberValid(false);
    } else if (toAccount === fromAccount) {
      setErrorToAccount('Both account numbers should not match');
      setIsAccountNumberValid(false);
    } else {
      setErrorToAccount('');
      setIsAccountNumberValid(true);
    }
  };

  const validateAmount = () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setErrorAmount('Invalid amount. Please enter a correct amount.');
      return false;
    } else {
      setErrorAmount('');
      return true;
    }
  };

  const generateRandomPin = () => {
    const pin = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit PIN
    setGeneratedPin(pin.toString()); // Convert to string and store in state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAccountNumberValid || !validateAmount()) {
      return;
    }

    // Logic to validate OTP
    if (otp !== generatedPin) {
      window.alert('Invalid OTP. Please enter the correct PIN.');
      return;
    }

    const data = {
      fromAccountNumber: String(fromAccountNumber),
      toAccountNumber: toAccountNumber,
      amount: amount
    };

    try {
      const response = await axios.post('http://localhost:9898/api/transactions/transfer', data);
      if (response.data === 'Transaction successful') {
        window.alert('Transaction successful');
        navigate('/conformation');
      } else {
        window.alert('Transaction failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    fetchAccountNumber(userEmail);
  }, []);

  return (
    <div className="transaction-container">
      <h1 className="transaction-heading">Funds Transfer</h1>
      <Link to="/requestAtm">
        <button className="request-atm-button blue-button">Request ATM</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>From Account Number:</label>
          <input
            type="number"
            value={fromAccountNumber}
            onChange={(e) => setFromAccountNumber(e.target.value)}
          />
        </div>
        {errorFromAccount && <div className="error">{errorFromAccount}</div>}
        <div className="form-group">
          <label>To Account Number:</label>
          <input
            type="number"
            value={toAccountNumber}
            onChange={(e) => setToAccountNumber(e.target.value)}
            onBlur={validateToAccountNumber}
          />
          {errorToAccount && <div className="error">{errorToAccount}</div>}
          {isAccountNumberValid && (
            <span role="img" aria-label="checkmark">
              ✔️
            </span>
          )}
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onBlur={validateAmount}
          />
          {errorAmount && <div className="error">{errorAmount}</div>}
        </div>
        <button className="transfer-button blue-button" type="button" onClick={generateRandomPin}>
          Generate OTP
        </button>
        {generatedPin && <div className="otp-display">OTP: {generatedPin}</div>}
        <div className="form-group">
          <label>Enter OTP:</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button className="transfer-button blue-button" type="submit">
          Transfer
        </button>
      </form>
      <div className="transaction-status">{transactionStatus}</div>
      <Link to="/TransactionHistory">
        <button className="next-button blue-button">Next</button>
      </Link>
    </div>
  );
}

export default TransactionForm;





