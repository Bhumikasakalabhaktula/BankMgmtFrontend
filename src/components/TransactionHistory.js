

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './TransactionHistory.module.css'; // Import CSS file for styling


// function TransactionHistory() {
//   const [transactions, setTransactions] = useState([]);
  
//   // const [fromAccountNumber, setFromAccountNumber] = useState('');
  
//   useEffect(() => {
//     const userRole = localStorage.getItem('role');
//     console.log ("userRole :",userRole );


//     if (userRole === 'admin') {
//       fetchTransactionHistory();
//     } else {
//       fetchTransactionHistoryUser();
//     }
//   }, []);

//   const fetchTransactionHistory = async () => {
//     try {
//       const response = await axios.get('http://localhost:9898/api/transactions/history');

//       if (response.status === 200) {
//         setTransactions(response.data);
//       } else {
//         console.error('Failed to fetch transaction history');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const fetchTransactionHistoryUser = async () => {
//     try {
//       const accountnumber = localStorage.getItem('accountnumber');
//       const response = await axios.get(`http://localhost:9898/api/transactions/userHistory/${accountnumber}`,{
//       timeout: 5000*6, });

//       if (response.status === 200) {
//         setTransactions(response.data);
//       } else {
//         console.error('Failed to fetch transaction history');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
      
//       <h2>Transaction History</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>From Account</th>
//             <th>To Account</th>
//             <th>Amount</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>{transaction.id}</td>
//               <td>{transaction.fromAccountNumber}</td>
//               <td>{transaction.toAccountNumber}</td>
//               <td>{transaction.amount}</td>
//               <td>{transaction.transactionDateTime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
  
//   );
// }

// export default TransactionHistory;



  




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TransactionHistory.module.css'; // Import CSS file for styling
// import RouteProtection from '../services/RouteProtection';

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const userRole = localStorage.getItem('role');
  
  const [fromAccountNumber, setFromAccountNumber] = useState('');

  useEffect(() => {
    if (userRole === 'admin') {
      fetchAllTransactionHistory();
    } else {
      fetchUserTransactionHistory();
    }
  }, []);

  const fetchAllTransactionHistory = async () => {
    // RouteProtection();
    try {
      const response = await axios.get('http://localhost:9898/api/transactions/history');

      if (response.status === 200) {
        setTransactions(response.data);
      } else {
        console.error('Failed to fetch transaction history');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchUserTransactionHistory = async () => {
    try {
      const AccountNumber = localStorage.getItem('accountnumber'); // Modified variable name
      const response = await axios.get(`http://localhost:9898/api/transactions/userHistory/${AccountNumber}`);

      if (response.status === 200) {
        setTransactions(response.data);
      } else {
        console.error('Failed to fetch user transaction history');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9898/api/transactions/delete/${id}`);

      if (response.status === 200) {
        if (userRole === 'admin') {
          fetchAllTransactionHistory();
        } else {
          fetchUserTransactionHistory();
        }
      } else {
        console.error('Failed to delete transaction');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>From Account</th>
            <th>To Account</th>
            <th>Amount</th>
            <th>Date</th>
            {userRole === 'admin' && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.fromAccountNumber}</td>
              <td>{transaction.toAccountNumber}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.transactionDateTime}</td>
              {userRole === 'admin' && (
                <td>
                  
                  <button onClick={() => handleDelete(transaction.fromAccountNumber)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;