import React from 'react';
import './ListItem.css';

const ListItem = ({ name, surname, id, handleSelect, isActive }) => {
  const handleClick = (event) => {
    handleSelect(event.target.id);
  };

  return (
    <li
      className={`list-link ${isActive && 'isActive'}`}
      onClick={handleClick}
      id={id}>
      {name} {surname}
    </li>
  );
};

export default ListItem;
