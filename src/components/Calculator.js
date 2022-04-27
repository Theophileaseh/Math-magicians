import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Buttons';
import Display from './Display';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div id="app">
      <Display total={total} next={next} operation={operation} />
      <Button clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
