import React, { useState } from 'react';

import './App.css';

import Snackbar from './Snackbar/Snackbar';
import Button from './Button/Button';
import { useEffect } from 'react';

const App = () => {
  const [activeSnackbar, setActiveSnackbar] = useState(false);

  const showSnackbar = () => {
    setActiveSnackbar((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h2>05/02</h2>

      <Button handleClick={showSnackbar} solo>
        Show snackbar
      </Button>

      <Snackbar
        activeSnackbar={activeSnackbar}
        setActiveSnackbar={setActiveSnackbar}
        position="top-left"
        type="success"
        showTime={5000}>
        Some text here. Types: error, warning, information, success.
      </Snackbar>
    </div>
  );
};

export default App;
