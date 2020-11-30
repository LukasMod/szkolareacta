import React, { useState, useEffect } from 'react';

import { UsersSearch, UsersList, User } from './../';

import './UsersContainer.scss';

const URL =
  'https://randomuser.me/api/?results=10&inc=login,name,phone,picture&noinfo';

const UsersContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [fetchedUsersData, setFetchedUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [searchText, setSearchText] = useState('');

  async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();
    setUsersData(data.results);
    setFetchedUsersData(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectedUser = (id) => {
    setUserId(id);
    setIsUserClicked(true);
  };

  const filterData = (text) => {
    const filteredUserData = fetchedUsersData.filter((item) => {
      const fullName = [item.name.first, item.name.last].join('');
      return fullName.toLowerCase().includes(text);
    });
    setUsersData(filteredUserData);
  };

  const handleSearchText = (text) => {
    setSearchText(text);
    filterData(text);
  };

  const handleResetButton = () => {
    setSearchText('');
    setUsersData(fetchedUsersData);
  };

  useEffect(() => {
    if (searchText.length === 0) {
      setUsersData(fetchedUsersData);
    }
  }, [fetchedUsersData, searchText]);

  return (
    <div className="usersContainer">
      <div className="usersContainer__list">
        <UsersSearch
          searchText={searchText}
          handleSearchText={handleSearchText}
          handleResetButton={handleResetButton}
        />
        {isLoading ? (
          <div className="usersContainer__loading">loading </div>
        ) : (
          <UsersList
            users={usersData}
            handleClickId={handleSelectedUser}></UsersList>
        )}
      </div>
      <User
        users={fetchedUsersData}
        userId={userId}
        isUserClicked={isUserClicked}></User>
    </div>
  );
};

export default UsersContainer;
