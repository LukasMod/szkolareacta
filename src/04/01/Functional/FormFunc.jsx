import React from 'react';

const FormFunc = (props) => {
  const {
    nettoPrice,
    handleNettoPriceChange,
    tipRate,
    handleTipRateChange,
    handleClick,
  } = props;

  return (
    <form>
      <input
        type='number'
        placeholder='netto'
        value={nettoPrice}
        onChange={handleNettoPriceChange}
      />
      <select
        name='tip'
        id='tip'
        value={tipRate}
        onChange={handleTipRateChange}>
        <option value='0.05'>5%</option>
        <option value='0.10'>10%</option>
        <option value='0.15'>15%</option>
        <option value='0.20'>20%</option>
      </select>
      <button type='submit' onClick={handleClick}>
        Do the math
      </button>
    </form>
  );
};

export default FormFunc;
