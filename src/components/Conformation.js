

// import React from 'react';
// import './Conformation.css';
// import jsPDF from 'jspdf';

// const TransactionConfirmation = ({ transactionDetails }) => {
//   const handleDownloadPdf = () => {
//     const doc = new jsPDF();
//     // Add content to the PDF
//     doc.text('Transaction Details:', 10, 10);
//     // doc.text(`Amount: $${transactionDetails.amount}`, 10, 20);
//     // doc.text(`Date: ${transactionDetails.date}`, 10, 30);

//     doc.save('transaction_details.pdf');
//   };

//   return (
//     <div className="confirmation-container">
//       <img
//         src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif"
//         alt="Success GIF"
//         className="success-image"
//       />
//       <h1 className="success-heading">Transaction successful!</h1>
//       <button onClick={handleDownloadPdf}>Download Pdf</button>
//     </div>
//   );
// };

// export default TransactionConfirmation;
















 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

function TransactionConfirmation() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchUserTransactionHistory();
  }, []);

  const fetchUserTransactionHistory = async () => {
    
    try {
      const accountNumber = localStorage.getItem('accountnumber');
      const response = await axios.get(`http://localhost:9898/api/transactions/userHistory/${accountNumber}`);

      if (response.status === 200) {
        setTransactions(response.data);
      } else {
        console.error('Failed to fetch user transaction history');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    doc.text('Transaction History', 10, 10);

    let startY = 20;
    transactions.forEach((transaction, index) => {
      const { id, fromAccountNumber, toAccountNumber, amount, transactionDateTime } = transaction;
      doc.text(`ID: ${id}`, 10, startY);
      doc.text(`From Account: ${fromAccountNumber}`, 10, startY + 10);
      doc.text(`To Account: ${toAccountNumber}`, 10, startY + 20);
      doc.text(`Amount: ${amount}`, 10, startY + 30);
      doc.text(`Date: ${transactionDateTime}`, 10, startY + 40);

      startY += 50; // Adjust the vertical position for the next entry
      if (startY > 250) {
        doc.addPage(); // Add a new page if content exceeds the page height
        startY = 20;
      }
    });

    doc.save('UserTransactionHistory.pdf');
  };

  return (
    <div className="conformation-container">
      <img
        src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif"
        alt="Success GIF"
        className="success-image"
      />
      <h1 className="success-heading">Transaction successful!</h1>
      <button onClick={handleDownloadPdf}>Download PDF</button>
      {/* Display user transaction history */}
    </div>
  );
}

export default TransactionConfirmation;
