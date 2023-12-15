// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:9898/api/user/getAll');

//       if (response.status === 200) {
//         setUsers(response.data);
//       } else {
//         console.error('Failed to fetch users');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDelete = async (userId) => {
//     try {
//       const response = await axios.delete(`http://localhost:9898/api/user/${userId}`);

//       if (response.status === 200) {
//         // Remove the deleted user from the state
//         setUsers(users.filter((user) => user.id !== userId));
//       } else {
//         console.error('Failed to delete user');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>User List (Admin)</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Email</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.email}</td>
//               <td>{user.name}</td>
//               <td>{user.role}</td>
//               <td>
//                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//                 {/* Add update functionality here */}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserList;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:9898/api/user/getAll');

      if (response.status === 200) {
        setUsers(response.data);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:9898/api/user/${userId}`);

      if (response.status === 200) {
        setUsers(users.filter((user) => user.id !== userId));
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:9898/api/user/${editUser.id}`, editUser);

      if (response.status === 200) {
        setEditUser(null);
        fetchUsers(); // Fetch users again to update the user list after successful update
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditUser(null);
  };

  return (
    <div>
      <h1>User List (Admin)</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>
                {editUser && editUser.id === user.id ? (
                  <input
                    type="text"
                    value={editUser.name}
                    onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>{user.role}</td>
              <td>
                {editUser && editUser.id === user.id ? (
                  <div>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

