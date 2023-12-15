// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProfilePage() {
//   const [user, setUser] = useState({});
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     const email = localStorage.getItem('email');
//     try {
//       const response = await axios.get(`http://localhost:9898/api/user/getUser/${email}`);

//       if (response.status === 200) {
//         setUser(response.data);
//       } else {
//         console.error('Failed to fetch user data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleSave = async () => {
//     const email = localStorage.getItem('email');
//     try {
//       const response = await axios.put(`http://localhost:9898/api/user/putUser/${email}`, user);

//       if (response.status === 200) {
//         setEditMode(false);
//       } else {
//         console.error('Failed to update user data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <h1>Profile Page</h1>
//       {editMode ? (
//         <div>
//           <label>Name:</label><input type="text" name="name" value={user.name} onChange={handleChange} />
//           <label>Email:</label><input type="text" name="email" value={user.email} onChange={handleChange} />
          
          
//           <label>Address:</label><input type="text" name="address" value={user.address} onChange={handleChange} />
//           <label>Email:</label><input type="number" name="balance" value={user.balance} onChange={handleChange} />
//           <button onClick={handleSave}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           {/* Display other non-editable fields */}
//           <button onClick={handleEdit}>Edit</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';

function ProfilePage() {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const email = localStorage.getItem('email');
    try {
      const response = await axios.get(`http://localhost:9898/api/user/getUser/${email}`);

      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    const email = localStorage.getItem('email');
    try {
      const response = await axios.put(`http://localhost:9898/api/user/putUser/${email}`, user);

      if (response.status === 200) {
        setEditMode(false);
      } else {
        console.error('Failed to update user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


return (
  <div>
    <h1 className="profile-heading">Profile Page</h1>
  <div className="profile-container">
    <div className="profile-card">
      <div className="profile-card-header">
        <img className="profile-logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApQMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAABwEFBgQCAwj/xABCEAABAwMCAgUIBwYFBQAAAAABAAIDBAUGBxEhMRITQVFhFCIycYGRocEIFiNCUmKxFRdygsLRJCWSk7I0Q2Rzov/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC4oiICIiAiIgIsErn8gzXHsdaf2tc4IpOyFp6ch/lG5QdCsAgqQ3LXa2iQxWW0VdW77rpCGb+wbla796Od143tuJkNPLeGR/8AZBcFjcKIfX3VBnnPxYFo5/4R/wDdZZrLkVA/a9Yo9jR6TgHs/UbILeimdl1sxevLWVwqbfITtvKzpM97d1QLdc6K6U4qLdVwVUJG4fC8OCD2IiICIiAiIgIiICIiAiJugLS5Nk1rxi3msu1UyIfdj33e89zR2rV6g5vRYbazPLtNWS7impg7YvPee5o7VM8Uwq8ai3EZJmU0rKJzt4odiDI3uaPus/VBitzXNdRKx9Dh9JJQ28HZ8w4Hb88nIeoLfY/ojbIXNqckrZrjUOO742vLGE+J9I+9VK2W+ktlHHR0FPHBTxjZsbBsAvXsEGqtOOWW0RBlttdJTAfgiAPv5raAAchssogL4kijlb0ZY2vHc4br7RByWQaeYrfGuNXaYY5T/wB6n+yeD6xwPtU5uulWR4rMbhgt2nkLeJgLg2Q/0u9oVzWNh3II/h+sLhVNtOaUpoa1p6BqCwsbv+dp9E/BV2GVk8bJYXtkjcN2vadwVzGb4LacwpHMrYxFVtbtFVsb5zD4948FKrFkF+0ovTbHkbJKizSO+zlbuQ1v4oz+rUH9AIvNQVkFdSRVVLMyWCZoex7DuHAr0oCIiAiIgIiIC02V5BR4zZam6VztmRN2a3te7saPFbhx2UG1Dq6jUHUSjxS3SnyKjeRM5nLpffd7BwCBgON1uomRzZbkwc+gZIephdyeQeDQPwN+JV3jjEbWtY0Na0bANGwAXmtVtpbTb6egoYhFTwMDGMHYAvYgIiwTsgbhN1L881apbPVPtWPQ/tG5g9A7AmON3dw9I+AXLw47qnlw6+6XSS2U0h3Ebpeq4eDGfPigvG4TcKHO0jzCnHW0uXOMw4gGSVvH17rzOybUjAJm/WOB1xtodsZXbPG3hIOI/mQXtFzeF5lacvoDUW2U9bHwmgk4PjPzHiF0YO43QZPJaPLMaoMos8tuuMYIePs5APOjd2OC3iwRughGn99r9O8pkxHJHkUMr/sJSfMYTycPyu7e4q7t224clO9Z8NZkWOurqWP/ADKgBfGW83s+835j1L9NGss+seKxw1MvTrqDaGbfm5u3muPs/RBQUREBERAREQaPNr0Mfxe43Th1kMLuq3/GeDfip19H2xOjt1dkVWHOqK5/VxOdxPQB3cfa79F+v0i7kYcct9tYfOq6guI7wwf3IVDw62NtGL2uhaNuppmA+sjcoNyiIgweCmetWYz2O2RWi0vIuVw83dvpMj5HbxJ2AVMcoTb4xlevlU+o2fBbXPIbzG0WzR/9HdB2GlundPjdBHcbnEJrzO3pPe/j1AP3W+PeVRthzQDgsoMbL8qmnhqIHQTxNkieNnMcNwR4r9kQQDOcerNMskpsmxnptt0sm0kBPmxk82H8p7O5W6w3anvdnpblRu6UNRGHt8O8exeXM7RHfcZuNukaD11O7oHbk8Ddp96nn0dLm+px64W6R2/klQHsHcHjl72lBXkREHy8bjYjcd2yg1nYcB1qkoW7sttzJDWnl0H8W/6XcFe1FvpEURpjY77ANpYJjHv6vOb8QgtI5IvFZqxtwtNFWsO7Z4GSA+sAr2oCIiAsHksrBQQ3XQ+WZ3i9uPEEM4fxygf0q5AbDYcgoXrJ9nqrisruDNqfj6pzurqgIiIMFQzTLeg1ryWkm2D5fKeiT/7WuHwVzO+3BQzVKnnwzUa25hSxk01Q8dd0eReBs4H1t/RBcxyWV47VcaW626nrqGVs1POwPY9p3BC9iAiIg/GrmbT0000hAZHGXu37gCSot9G2F7n5DWEbMe6Fo9fnn5hdPrblsNjxmS2wSjy64sMYYD5zIz6Tv1C9+kGNvx3DadlRH0KurPlEwPME8gfUNkHcoiICnGvtOJdPZpCN+oqYn+rc9H+pUdT/AF2cG6b14PN0sIH+4D8kGy0oqPKtO7FITvtT9D/S4t+S65cVo4ws02socOJjkPvkcu1QEREBYKyiCJfSJgfT1uPXZg4RPfGT4gtcP0Ks1FUNq6OCpZxbNG149o3XD63Wc3XA6p8bd5aNwqG8N+A9L4Ffro5fG3nBaHdxdNSDyeUdoLeXvGyDukRYPJBlanKLDRZJZ5rZcW7wyDcEc2OHJw9S9lfcKW3UslVXTxwU8Y3dI87ABSHINYa251xteDWySpmO4bUSMLi7xazu8Sg0lFccl0guj6Gvp311hlk3Y8cGnftY7k13geaq1g1Hxa+RNNNc4YZDziqXCNw96mZ061Ay4CXJ722mhcekIpXl238jdgtjDoDRNZ/iL9UOeeZZTtA+JKCrTX+zwRmSW6ULWDjuahn91wOX6x2W2xPgsP8AmVceDC3hE0+J7fUFqv3BWwcf25Wf7LV463QN8fn2vIei8HcdfBtx9bTw9yD9MCwa65Pe/rXm/WbucHwU0rdi7bi0lp5NHYFbG8lBnfvTwT7SV5u1AzieJmbt/wAgu3wXVa0ZOWUlU39nXE8BDI7dsh/K75FBQ0XyDv2r6QFKfpFV3UYhSUYPnVNWD7GtJ+YVVJ271C9U5vrTqfZccpz0mU7mibbiASek73NHxQVfBKF1uw2zUjxs+Kkj6XrI3PxK3y+YmNjjYxnotAA9S+kBERAREQfjVwR1VPJTzsD4ZmFkjTyLSNiFCtOqiXANSLhjFweRR1rg2FzjwJG/Vu9oJCval2t2GyXm2xXu1tcLjbgXHocHPj58PEHiEFRXivFzpLPbKi43CURU1Owvkd4DsHeTy2XH6UZszLLG2GqlH7VpGBtQzkXjkHgeP6ridXbvWZVl1HhFmcTGJG+UFvIyHjx8Gjj60Gskff8AWXInthdLR4/Su7fRaPHsc8/D9bTi2K2fGKPya00kcZ28+Yt3kk/idzK/bF7FRY5Z6e2W+MNiibxdtxe7tcfFbdAREQE2REGNh3Kaah6WUF/jkrrHHHQ3Zp6Q6tvQZKfzbcj4qmIgjmleoFZFcG4hl3Wx3CJxigmm9Ikfcee/hwPb7eNiClGt2HittwyW2MLLjQbPlLODnxg8/W3mul0tyv614pDUzuHlsB6mqA/EBwd7Rx96DoMkvFNYbLVXOrcBFTsLtvxHsHtKkmh9pqbxfLpml0aXSSve2Au4+e47vI9Q833rx6k3yq1AymlxHHJOso4pftpW+i945uJ/C39SrRjtnpbDZaS2UTdoaeMMBPNx7SfEnig2Q5IiICIiAiIgL5c3pbg8WkbbL6RBC9Q8TuOE3z644kXNpw8vqIWjcREnjuPwH4JoJEy65Fer9WyRvr3HzWbjpAOO7nAd3IK4yRMka5sjQ5rhs5rhuCO5RfNtMa+z3L6x4FI6GWM9N1JGdiD29DvH5UFpbsvpSPDNZKWZwt2XQut9czzTOW7RuP5hzafgqrBVQ1MDZqeWOWJwBa+NwIPtQfuiwOKygIiICL5c7bsWnyLKLPjdMZ7xXRQDsZvu93gG8yg2k0bJYpI5AHMc0hwPcea/lllbdbBfr5jeLS9cy4TmnZ1HnOcNzt0dvA7E+C6+95tkupFW6zYhRzUlvd5sspOxLfzuHBo8AqLp1p3b8Opesd0am6SN2kqSPRHczuCD50uwOHELYZKgiW6VLQZ5Oxg4+Y3w4nfvXcjfbigG3JZQEREBERAREQEREBY2CyiDlcvwGwZW3pXGkDKrbZtVD5sg9Z7faplUadZ1h8zqjDru+pgB4QtkDXbeLHeaVd0QQ2HVnL7G7qcnxtzi30pGxujPzC29JrzYZGjyq3V0J7ej0XfNViSNkrejIxr29zhutXU41Y6vc1VooZD+eBp+SDhHa6YsGktguBPd1Q/utbV680b3GO1WSqnkPo9Y4Df2DcqitwvGGkEWG3Aj/wAdq2NLaLdSf9LQU0O3LoRAfJBFpco1Sy4dXZrXJbqZ/AyMj6Gw/jf8gtjYNFn1M4rczuklbMeLoYpHHfwLzx9yso4BZ2QeK02mgs9GyktlJDTU7OTI27D1nvPivZssogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//Z" alt="Profile Logo" />
      </div>
      <div className="profile-card-body">
        
        {editMode ? (
    <div>
  <label>Name:</label><input type="text" name="name" value={user.name} onChange={handleChange} />
 <label>Email:</label><input type="text" name="email" value={user.email} onChange={handleChange} />
                                       
                                       
 <label>Address:</label><input type="text" name="address" value={user.address} onChange={handleChange} />
  <label>Balance:</label><input type="number" name="balance" value={user.balance} onChange={handleChange} />
  <button onClick={handleSave}>Save</button>
  </div>
        ) : (
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Balance:</strong> {user.balance}</p>
            <button onClick={handleEdit} className="edit-button">Edit</button>
          </div>
        )}
      </div>
    </div>
  </div>
  </div>
);
}

export default ProfilePage;
