import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShareAlt,
  faHeart,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

const CardMain = ({ handleClick, image, isOpen, text }) => {
  return (
    <>
      <div className='card-img-wrapper'>
        <img src={image} alt='paella' />
      </div>
      <p className='card-text-short'>{text}</p>
      <div className='card-icons'>
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <span>
          <FontAwesomeIcon icon={faShareAlt} />
        </span>
        <span
          onClick={handleClick}
          className={`card-icons-arrow ${!isOpen ? 'down' : ''}`}>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>
    </>
  );
};

export default CardMain;
