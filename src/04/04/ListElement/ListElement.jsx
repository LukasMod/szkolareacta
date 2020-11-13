import React from 'react';
import './ListElement.css';

const ListElement = ({ data, onDelete }) => {
  const handleDelete = (id, type) => {
    onDelete(id, type, 'delete');
  };

  return (
    <tr className='tr-element'>
      <td className='text-wrapper'>{data.text}</td>
      <td className='value-wrapper'>{data.value}$</td>
      <td className='category-wrapper'>{data.category}</td>
      <td className='delete-wrapper'>
        <button
          id={data.id}
          onClick={() => handleDelete(data.id, data.type)}
          title='delete'>
          X
        </button>
      </td>
    </tr>
  );
};

export default ListElement;
