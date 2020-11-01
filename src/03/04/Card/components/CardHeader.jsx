import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const CardHeader = ({ category, date, title }) => {
  return (
    <div className='card-header'>
      <div className='card-header-category'>{category}</div>
      <div className='card-header-info'>
        <h2 className='card-header-info-title'>{title}</h2>
        <p className='card-header-info-date'>{date}</p>
      </div>
      <div className='card-header-edit'>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
};

export default CardHeader;
