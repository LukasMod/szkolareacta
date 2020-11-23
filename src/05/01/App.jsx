import React, { useState } from 'react';

import './App.css';

import Button from './components/Button/Button';
import {
  Dialog,
  DialogHeader,
  DialogBar,
  DialogButtons,
  DialogContent,
} from './components/Dialog';

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const toggleDialog = () => {
    setIsDialogOpen((prevState) => !prevState);
  };

  const actionSave = () => {
    console.log('Save');
    toggleDialog();
  };

  const actionCancel = () => {
    console.log('Cancel');
    toggleDialog();
  };

  return (
    <div className="App">
      <h2>05/01</h2>
      <Button handleClick={toggleDialog} solo>
        Show Dialog
      </Button>
      <br />
      <br />
      <Dialog isDialogOpen={isDialogOpen}>
        <DialogBar handleClick={toggleDialog} />
        <DialogHeader>Reminder</DialogHeader>
        <DialogContent>Would you like to save your progress now?</DialogContent>
        <DialogButtons>
          <Button handleClick={actionSave}>Save</Button>
          <Button handleClick={actionCancel}>Cancel</Button>
        </DialogButtons>
      </Dialog>
    </div>
  );
};

export default App;
