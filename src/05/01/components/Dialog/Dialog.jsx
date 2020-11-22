import React from 'react';

import './Dialog.scss';

const Dialog = ({ isDialogOpen, children }) => {
  return (
    <div className={`dialog ${isDialogOpen ? 'dialog--open' : 'dialog--hide'}`}>
      {children}
    </div>
  );
};

export default Dialog;
