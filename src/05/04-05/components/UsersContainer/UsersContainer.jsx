import React, { useState, useEffect } from 'react';

import { UsersSearch, UsersList, User } from './../';

import './UsersContainer.scss';

const URL =
  'https://randomuser.me/api/?results=10&inc=login,name,phone,picture&noinfo';

const UsersContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [isUserClicked, setIsUserClicked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setUsersData(data.results);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleUserId = (id) => {
    setUserId(id);
    setIsUserClicked(true);
  };

  return (
    <div className="usersContainer">
      <div className="usersContainer__list">
        <UsersSearch />
        {isLoading ? (
          <div className="usersContainer__loading">loading </div>
        ) : (
          <UsersList users={usersData} handleClickId={handleUserId}></UsersList>
        )}
      </div>
      <User
        users={usersData}
        userId={userId}
        isUserClicked={isUserClicked}></User>
    </div>
  );
};

export default UsersContainer;
