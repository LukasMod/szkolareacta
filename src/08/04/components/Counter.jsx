import React, { useState } from 'react';

// import './Counter.css';

const Counter = ({ start = 0 }) => {
  const [result, setResult] = useState(start);
  const [inputValue, setInputValue] = useState('');

  const handleClickSubtract = () => {
    setResult(result - 1);
  };
  const handleClickAdd = () => {
    setResult(result + 1);
  };
  const handleClickChange = () => {
    setResult(inputValue);
    setInputValue('');
  };
  const handleClickReset = () => {
    setResult(start);
  };

  const handleChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleChange} />
      <button className="change" onClick={handleClickChange}>
        change counter
      </button>
      <button className="subtract" onClick={handleClickSubtract}>
        subtract 1
      </button>
      <span>{result}</span>
      <button className="add" onClick={handleClickAdd}>
        add 1
      </button>
      <button className="reset" onClick={handleClickReset}>
        reset
      </button>
    </div>
  );
};

export default Counter;
