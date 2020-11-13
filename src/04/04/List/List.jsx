import React from 'react';
import './List.css';
import ListElement from './../ListElement/ListElement';

const List = ({ data, defaultType, onDelete, totalAmount }) => {
  return (
    <div className='container-wrapper'>
      <h2>List of {defaultType}</h2>
      <h3>{totalAmount}</h3>
      <table className='table-wrapper'>
        <tbody>
          {data.map((element) => {
            return (
              <ListElement
                key={element.id}
                data={element}
                onDelete={onDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
