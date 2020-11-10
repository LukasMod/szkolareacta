import React, { useState } from 'react';

import FormFunc from './FormFunc';

const TAX = 23;

const CalcFunc = () => {
  const [tip, setTip] = useState('');
  const [tipRate, setTipRate] = useState('0.05');
  const [nettoPrice, setNettoPrice] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    const bruttoPrice = Math.floor(nettoPrice * TAX) / 100;
    const tip = Math.floor(bruttoPrice * tipRate * 100) / 100;
    setTip(tip);
  };

  const handleNettoPriceChange = (event) => {
    setNettoPrice(event.target.value);
  };

  const handleTipRateChange = (event) => {
    setTipRate(event.target.value);
  };

  const showForm = (
    <FormFunc
      nettoPrice={nettoPrice}
      handleNettoPriceChange={handleNettoPriceChange}
      tipRate={tipRate}
      handleTipRateChange={handleTipRateChange}
      handleClick={handleClick}
    />
  );

  const showTip = (
    <label>
      Your tip brutto: {tip} $ <p>includes TAX: {TAX}%</p>
    </label>
  );

  return (
    <div>
      <h3>Form functional</h3>
      {!tip ? showForm : showTip}
    </div>
  );
};

export default CalcFunc;
