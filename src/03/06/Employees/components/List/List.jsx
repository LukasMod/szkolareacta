import React from 'react';
import ListItem from '03/06/Employees/components/List/ListItem/ListItem';
import './List.css';

const List = ({ data, handleSelect }) => {
  const listContent = data.map((employee) => (
    <ListItem
      key={`elem-${employee.id}`}
      id={employee.id}
      name={employee.name}
      surname={employee.surname}
      handleSelect={handleSelect}
    />
  ));

  return <ul className='list-wrapper'>{listContent}</ul>;
};

export default List;
