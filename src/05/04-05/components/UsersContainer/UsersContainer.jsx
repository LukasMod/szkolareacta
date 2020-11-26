import React, { useState, useEffect } from 'react';

import { UsersSearch, UsersList, User } from './../';

import './UsersContainer.scss';

const URL =
  'https://randomuser.me/api/?results=10&inc=id,name,phone,picture&noinfo';

const UsersContainer = () => {
  const [usersData, setUsersData] = useState('');

  const fetchUsers = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsersData(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(usersData.results);

  return (
    <div className="usersContainer">
      <div className="usersContainer__list">
        <UsersSearch />
        {/* <UsersList users={usersData}></UsersList> */}
      </div>
      <User></User>
    </div>
  );
};

export default UsersContainer;
