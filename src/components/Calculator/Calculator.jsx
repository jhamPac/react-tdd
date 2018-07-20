import React, { Component } from 'react';

export default class Calculator extends Component {

  state = {
    displayValue: 0,
    numbers: [],
    operators: [],
    selectedOperator: '',
    storedValue: ''
  }

  render() {
    return(
      <div className="calculator-container">
      </div>
    );
  }

  callOperator() {
    console.log('call operation');
  }

  setOperator() {
    console.log('set operation');
  }

  updateDisplay() {
    console.log('update display');
  }
}
