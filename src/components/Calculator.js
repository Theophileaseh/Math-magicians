import { Component } from 'react';
import Button from './Buttons';
import Display from './Display';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <Display />
        <Button />
      </div>
    );
  }
}

export default Calculator;
