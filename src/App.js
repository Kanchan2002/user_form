import React, { useState } from 'react';

import AddUser from './Components/users/AddUser';
import UsersList from './Components/users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName,ucollege, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName,college:ucollege, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

