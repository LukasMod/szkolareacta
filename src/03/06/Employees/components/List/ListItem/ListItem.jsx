import React from 'react';
import './ListItem.css';

const ListItem = ({ name, surname, id, handleSelect }) => {
  const handleClick = (event) => {
    handleSelect(event.target.id);
  };

  return (
    <li className='list-link' onClick={handleClick} id={id}>
      {name} {surname}
    </li>
  );
};

export default ListItem;
