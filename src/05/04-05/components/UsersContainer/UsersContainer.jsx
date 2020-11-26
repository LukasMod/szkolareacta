import React, { useState, useEffect } from 'react';

import { UsersSearch, UsersList, User } from './../';

import './UsersContainer.scss';

const URL =
  'https://randomuser.me/api/?results=10&inc=login,name,phone,picture&noinfo';

const UsersContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setUsersData(data.results);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  console.log(usersData);

  return (
    <div className="usersContainer">
      <div className="usersContainer__list">
        <UsersSearch />
        {isLoading ? (
          <div>loading </div>
        ) : (
          <UsersList users={usersData}></UsersList>
        )}
      </div>
      <User></User>
    </div>
  );
};

export default UsersContainer;
