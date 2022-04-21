import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Button.css';

function Button({ clickHandler }) {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <div className="buttonContainer">
      <div className="row-2">
        <button type="button" className="button" buttonName="AC" clickHandler={handleClick}>AC</button>
        <button type="button" className="button" buttonName="+/-" clickHandler={handleClick}>+/-</button>
        <button type="button" className="button" buttonName="%" clickHandler={handleClick}>%</button>
        <button type="button" className="button main" buttonName="/" clickHandler={handleClick}>/</button>
      </div>
      <div className="row-3">
        <button type="button" className="button" buttonName="7" clickHandler={handleClick}>7</button>
        <button type="button" className="button" buttonName="8" clickHandler={handleClick}>8</button>
        <button type="button" className="button" buttonName="9" clickHandler={handleClick}>9</button>
        <button type="button" className="button main" buttonName="*" clickHandler={handleClick}>*</button>
      </div>
      <div className="row-4">
        <button type="button" className="button" buttonName="4" clickHandler={handleClick}>4</button>
        <button type="button" className="button" buttonName="5" clickHandler={handleClick}>5</button>
        <button type="button" className="button" buttonName="6" clickHandler={handleClick}>6</button>
        <button type="button" className="button main" buttonName="-" clickHandler={handleClick}>-</button>
      </div>
      <div className="row-5">
        <button type="button" className="button" buttonName="1" clickHandler={handleClick}>1</button>
        <button type="button" className="button" buttonName="2" clickHandler={handleClick}>2</button>
        <button type="button" className="button" buttonName="3" clickHandler={handleClick}>3</button>
        <button type="button" className="button main" buttonName="+" clickHandler={handleClick}>+</button>
      </div>
      <div className="row-6">
        <button type="button" className="button double" buttonName="0" clickHandler={handleClick}>0</button>
        <button type="button" className="button" buttonName="." clickHandler={handleClick}>.</button>
        <button type="button" className="button main" buttonName="=" clickHandler={handleClick}>=</button>
      </div>
    </div>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
