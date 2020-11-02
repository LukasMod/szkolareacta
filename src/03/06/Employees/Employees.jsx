import React, { useState } from 'react';
import { Details, List } from '03/06/Employees/index';
import './Employees.css';

const Employees = ({ data }) => {
  const [idSelected, setIdSelected] = useState(0);

  const handleSelect = (id) => {
    setIdSelected(id);
  };

  return (
    <div className='employees-wrapper'>
      <List data={data} idSelected={idSelected} handleSelect={handleSelect} />
      <Details data={data[idSelected - 1]} idSelected={idSelected} />
    </div>
  );
};

export default Employees;
