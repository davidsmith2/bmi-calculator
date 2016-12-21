import React from 'react';

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
    if (this.props.validateForm()) {
      return this.props.calculateBMI();
    }
    return '--.-';
  }
  
  getDescription() {
    const BMI = this.props.calculateBMI();
    if (this.props.validateForm()) {
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

}

export default Result;