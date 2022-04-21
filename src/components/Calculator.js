import { Component } from 'react';
import Button from './Buttons';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <Button />
      </div>
    );
  }
}

export default Calculator;
