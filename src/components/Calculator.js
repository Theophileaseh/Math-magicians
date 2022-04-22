import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Buttons';
import Display from './Display';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
  }

  handleClick = (buttonName) => {
    const { total } = calculate(this.state, buttonName);
    const { next } = calculate(this.state, buttonName);
    const { operation } = calculate(this.state, buttonName);
    this.setState({ total, next, operation });
  };

  render() {
    const { total, next, operation } = this.state;

    return (
      <div id="app">
        <Display total={total} next={next} operation={operation} />
        <Button clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
