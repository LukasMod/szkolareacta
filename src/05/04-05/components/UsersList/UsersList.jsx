import React from 'react';

import './UsersList.scss';

const UsersList = ({ users }) => {
  const userListElement = users.map((item) => (
    <li className="usersList__item" key={`id_${item.login.uuid}`}>
      {item.name.first} {item.name.last}
      hello
    </li>
  ));

  return (
    <div className="usersList">
      <ul className="usersList__list">{userListElement}</ul>
    </div>
  );
};

export default UsersList;
