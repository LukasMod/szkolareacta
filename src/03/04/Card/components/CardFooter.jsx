import React from 'react';

const CardFooter = ({ text1, text2, text3, text4, text5 }) => {
  return (
    <div className='card-text-extra'>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{text4}</p>
      <p>{text5}</p>
    </div>
  );
};

export default CardFooter;
