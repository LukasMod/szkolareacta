import React from 'react';

import './App.css';

export function sum(a, b) {
  const sum = a + b;
  return sum;
}

const App = () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);

  return (
    <div className="App">
      <h2>08/01</h2>
      <div>a: {a}</div>
      <div>b: {b}</div>
      <div>sum: {sum(a, b)}</div>
    </div>
  );
};

export default App;
