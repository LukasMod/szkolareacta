import React, { useEffect, useState } from 'react';

import User from './../User/User';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log(error));
  }, []);

  console.log(users);

  return users.map((user) => <User key={user.login.uuid} user={user} />);
};

export default UserList;
