import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const send = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: fullName,
          to_email: email,
          message: message,
        },
        'YOUR_USER_ID' // Replace with your user ID
      );

      if (response.status === 200) {
        alert('Your request has been sent.');
        setFullName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send the request. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send the request. Please try again later.');
    }
  };

  return (
    <div className="container contact-container">
      <div className="row justify-content-around" style={{ margin: '3%' }}>
        <div className="col-md-5">
          <div className="box contact-form">
            <form onSubmit={send}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="enter your message"
                ></textarea>
              </div>
              <div className="btn-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
