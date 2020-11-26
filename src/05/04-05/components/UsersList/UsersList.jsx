import React from 'react';

import './UsersList.scss';

const UsersList = ({ users }) => {
  const userListElement = [users].map((item) => (
    <li className="usersList__item" key={`id_${item.id}`}>
      {item.name}
    </li>
  ));
  console.log(users.results);

  return (
    <div className="usersList">
      <ul className="usersList__list">
        {userListElement}
        <li className="usersList__item">Kolega1 Zabawny2</li>
        <li className="usersList__item">Kolega1 Zabawny2</li>
        <li className="usersList__item">Kolega1 Zabawny2</li>
      </ul>
    </div>
  );
};

export default UsersList;
