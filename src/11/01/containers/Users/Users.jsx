import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

const USERS_NUMBER = 10;

const Users = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch(`https://randomuser.me/api/?results=${USERS_NUMBER}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((item) => {
        return <div key={item.login.uuid}>{item.name.first}</div>;
      })}
    </div>
  );
};

export default Users;
