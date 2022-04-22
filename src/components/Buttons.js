import React from 'react';
import PropTypes from 'prop-types';
import OneButton from './SingleButton';
import '../styles/Button.css';

function Button({ clickHandler }) {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  const defaultClass = 'button';

  return (
    <div className="buttonContainer">
      <div className="row-2">
        <OneButton className={defaultClass} buttonName="AC" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="+/-" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="%" clickHandler={handleClick} />
        <OneButton className={`${defaultClass} main`} buttonName="÷" clickHandler={handleClick} />
      </div>
      <div className="row-3">
        <OneButton className={defaultClass} buttonName="7" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="8" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="9" clickHandler={handleClick} />
        <OneButton className={`${defaultClass} main`} buttonName="x" clickHandler={handleClick} />
      </div>
      <div className="row-4">
        <OneButton className={defaultClass} buttonName="4" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="5" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="6" clickHandler={handleClick} />
        <OneButton className={`${defaultClass} main`} buttonName="-" clickHandler={handleClick} />
      </div>
      <div className="row-5">
        <OneButton className={defaultClass} buttonName="1" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="2" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="3" clickHandler={handleClick} />
        <OneButton className={`${defaultClass} main`} buttonName="+" clickHandler={handleClick} />
      </div>
      <div className="row-6">
        <OneButton className={`${defaultClass} double`} buttonName="0" clickHandler={handleClick} />
        <OneButton className={defaultClass} buttonName="." clickHandler={handleClick} />
        <OneButton className={`${defaultClass} main`} buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
