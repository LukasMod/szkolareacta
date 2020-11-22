import React from 'react';

import './DialogBar.scss';

const DialogBar = ({ handleClick }) => {
  return (
    <div className="DialogBar">
      <div className="DialogBar__button" onClick={handleClick}>
        X
      </div>
    </div>
  );
};

export default DialogBar;
