import React from 'react';

import './DialogHeader.scss';

const DialogHeader = ({ children }) => {
  return <h3 className="DialogHeader">{children}</h3>;
};

export default DialogHeader;
