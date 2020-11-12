import React from 'react';
import './List.css';
import ListElement from './../ListElement/ListElement';

const List = ({ data }) => {
  console.log(data);

  const handleDelete = () => {
    console.log('handleDelete');
  };

  return (
    <div className='container-wrapper'>
      <h2>List of Incomes</h2>
      <table className='table-wrapper'>
        <tbody>
          {data.map((element) => {
            return (
              <ListElement
                key={element.id}
                data={element}
                handleDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
