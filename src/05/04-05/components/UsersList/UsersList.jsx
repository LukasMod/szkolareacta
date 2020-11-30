import React from 'react';
import { useHistory } from 'react-router-dom';

import './UsersList.scss';

const UsersList = ({ users, handleClickId }) => {
  const history = useHistory();

  const handleClick = (e) => {
    const userId = e.target.id;
    history.push(`/users/${e.target.id}`);
    return handleClickId(userId);
  };

  const userListElement = users.map(
    ({ name: { first, last }, login: { uuid } }) => (
      <li
        className="usersList__item"
        key={uuid}
        id={uuid}
        onClick={handleClick}>
        {first} {last}
      </li>
    )
  );

  return (
    <div className="usersList">
      <ul className="usersList__list">{userListElement}</ul>
    </div>
  );
};

export default UsersList;
