

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RequestAtm.css';
import RouteProtection from '../services/RouteProtection';

export default function RequestATM() {
  RouteProtection();
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('Savings');
  const [atmType, setAtmType] = useState('VISA');
  const [address, setAddress] = useState('');
  const [data, setData] = useState([]);
  const handleRequestATM = async () => {
    try {
      console.log('Requesting ATM:', {
        name,
        accountNumber,
        accountType,
        atmType,
        address,
      });

      const response = await axios.post('http://localhost:9898/api/atm-requests/create', {
        name: data.name,
        accountNumber: accountNumber,
        accountType: accountType,
        atmType: atmType,
        address: data.address,
        // Add other necessary data to be sent to the backend
      });

      // Handle success
      alert(
        `Hello ${name} holding account number ${accountNumber} your request for ${atmType} ATM card is Successful. It will be delivered to your address.`
      );
      console.log('ATM request successful:', response.data); // Log successful response
    } catch (error) {
      // Handle error
      console.error('Error requesting ATM:', error.response); // Log detailed error response
      alert('Failed to request ATM. See console for details.'); // Display a generic error message to the user
    }
  };

  useEffect(() => {
    const account = localStorage.getItem('accountnumber');
    setAccountNumber(account);
    const email = localStorage.getItem('email');

    axios
      .get(`http://localhost:9898/api/user/getNameAddressBalance/${email}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='styles'>
    <div className="stylcontainer">
      <h1 className="mt-5 pt-5">Request ATM</h1>
      <div className="row align-items-center">
        <div className="card-body mt-4 col-6 rounded shadow p-3">
          <div className="d-flex my-4 row justify-content-between">
            <div className="col-md-4">
              <p className="text-start"> Account</p>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                maxLength={18}
                className="form-control"
                
                value={accountNumber}
                
                readOnly // Make it read-only
              />
            </div>
          </div>
          <div className="d-flex my-4 row justify-content-between">
            <div className="col-md-4">
              <p className="text-start">Name</p>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                maxLength={18}
                className="form-control"
                value={data.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex my-4 row justify-content-between">
            <div className="col-md-4">
              <p className="text-start">Account Type</p>
            </div>
            <div className="col-md-8">
              <select
                className="form-control"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="Savings">Savings</option>
                <option value="Salary">Salary</option>
              </select>
            </div>
          </div>
          <div className="d-flex my-4 row justify-content-between">
            <div className="col-md-4">
              <p className="text-start">ATM Card Type</p>
            </div>
            <div className="col-md-8">
              <select
                className="form-control"
                value={atmType}
                onChange={(e) => setAtmType(e.target.value)}
              >
                <option value="VISA">VISA</option>
                <option value="MASTER CARD">MASTER CARD</option>
                <option value="RUPAY">RUPAY</option>
                <option value="MAESTRO">MAESTRO</option>
              </select>
            </div>
          </div>
          <div className="d-flex my-4 row justify-content-between">
            <div className="col-md-4">
              <p className="text-start">Address</p>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                value={data.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleRequestATM} className="btn btn-info">
            Request ATM
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
