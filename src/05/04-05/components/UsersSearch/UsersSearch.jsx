import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './UsersSearch.scss';

const UsersSearch = ({ searchText, handleSearchText, handleResetButton }) => {
  const handleChange = (e) => {
    handleSearchText(e.target.value);
  };

  return (
    <div className="usersSearch">
      <input
        className="usersSearch__input"
        type="text"
        onChange={handleChange}
        value={searchText}
      />
      <button className="usersSearch__button" onClick={handleResetButton}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default UsersSearch;
