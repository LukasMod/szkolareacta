import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faInfo,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import './Snackbar.scss';

//TYPES:
const icon = {
  error: <FontAwesomeIcon icon={faExclamationCircle} />,
  warning: <FontAwesomeIcon icon={faExclamationTriangle} />,
  information: <FontAwesomeIcon icon={faInfo} />,
  success: <FontAwesomeIcon icon={faCheckCircle} />,
};

//POSITIONS:
//top-left, top-center, top-right
//bottom-left, bottom-center, bottom-right

const Snackbars = ({
  activeSnackbar,
  setActiveSnackbar,
  children,
  type = 'information',
  position = 'bottom-right',
  showTime,
}) => {
  const [showIcon] = useState(icon[type]);

  useEffect(() => {
    const snackbarInterval = setInterval(() => {
      setActiveSnackbar((prevState) => false);
    }, showTime);
    return () => clearInterval(snackbarInterval);
  }, [setActiveSnackbar, showTime]);

  return (
    <div
      className={`snackbar snackbar--${
        activeSnackbar ? 'active' : 'hide'
      } snackbar--${position} snackbar--${type}`}>
      <span className="snackbar__icon"> {showIcon}</span>
      {children}
    </div>
  );
};

export default Snackbars;
