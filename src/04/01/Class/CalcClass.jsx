import React, { Component } from 'react';

import FormFunc from './FormFunc';

const TAX = 23;

class CalcClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: '',
      tipRate: '0.05',
      nettoPrice: '',
    };
  }
  render() {
    const { nettoPrice, tipRate, tip } = this.state;

    const handleClick = (event) => {
      event.preventDefault();
      const bruttoPrice = Math.floor(nettoPrice * TAX) / 100;
      const tip = Math.floor(bruttoPrice * tipRate * 100) / 100;
      this.setState({
        tip: tip,
      });
    };

    const handleNettoPriceChange = (event) => {
      this.setState({
        nettoPrice: event.target.value,
      });
    };

    const handleTipRateChange = (event) => {
      this.setState({
        tipRate: event.target.value,
      });
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
        <h3>Form class</h3>
        {!tip ? showForm : showTip}
      </div>
    );
  }
}

export default CalcClass;
