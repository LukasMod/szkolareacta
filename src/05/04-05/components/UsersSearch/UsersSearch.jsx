import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './UsersSearch.scss';

const UsersSearch = () => {
  return (
    <div className="usersSearch">
      <input className="usersSearch__input" type="text" />
      <button className="usersSearch__button">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default UsersSearch;
