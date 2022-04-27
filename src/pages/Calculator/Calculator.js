import React from 'react';
import Calculator from '../../components/Calculator';
import './Calculator.css';

const Calculators = () => (
  <div className="calculatorContainer">
    <div className="text">
      <p className="test-desc">Let&apos;s do some math!</p>
    </div>
    <div className="maincalculator">
      <Calculator />
    </div>
  </div>
);

export default Calculators;
