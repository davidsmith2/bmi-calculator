import React from 'react';

import {calculators, validators} from '../utils';

class Result extends React.Component {
  render() {
    return (
      <div>
        <div>
          <strong>{this.getValue()}</strong>
        </div>
        <div>
          {this.getDescription()} BMI
        </div>
      </div>
    );
  }
  
  getValue() {
    if (this.validateForm()) {
      return this.calculateBMI();
    }
    return '--.-';
  }
  
  getDescription() {
    const BMI = this.calculateBMI();
    if (this.validateForm()) {
      if (BMI < 18.5) {
        return 'Underweight';
      } else if (BMI < 25) {
        return 'Normal weight';
      } else if (BMI < 30) {
        return 'Overweight';
      } else {
        return 'Obsese';
      }
    }
    return '';
  }

  validateForm() {
    return this.props.validator(this.props.formState, validators.validate);
  }

  calculateBMI() {
    return this.props.calculator(this.props.formState, calculators.calculate);
  }
  
}

export default Result;