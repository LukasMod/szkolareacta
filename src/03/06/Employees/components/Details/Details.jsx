import React from 'react';
import './Details.css';

const Details = ({ data, idSelected }) => {
  console.log(idSelected);
  return (
    <div className='details-wrapper'>
      <h2>Employee info</h2>
      {idSelected === 0 ? (
        <strong>Choose an employee</strong>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Surname:</strong> {data.surname}
          </p>
          <p>
            <strong>Date of birth:</strong> {data.birth}
          </p>
          <p>
            <strong>Position:</strong> {data.position}
          </p>
        </div>
      )}
    </div>
  );
};

export default Details;
