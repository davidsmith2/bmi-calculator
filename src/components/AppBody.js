import React from 'react';
import {fromJS} from 'immutable';

import MetricForm from './MetricForm';
import Nav from './Nav';
import Result from './Result';
import StandardForm from './StandardForm';

import styles from '../styles';
import {calculators, validators} from '../utils';

export default class AppBody extends React.Component {
  static childContextTypes = {
    onInputChange: React.PropTypes.func.isRequired
  };

  getChildContext() {
    return {
      onInputChange: this.handleInputChange
    };
  }

  constructor(props) {
    super(props);
    this.state = this.__getInitialState__();
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  __getInitialState__(mode = 'standard') {
    return {
      mode: mode,
      modes: {
        standard: {
          lb: '', 
          ft: '', 
          in: ''
        },
        metric: {
          kg: '',
          cm: ''
        }
      }
    };
  }

  render() {
    return(
      <div style={styles.appBody.container}>
        <div style={styles.appBody.input}>
          <Nav onChange={this.handleModeChange} />
          {(this.state.mode === 'standard') ? <StandardForm /> : <MetricForm />}
        </div>
        <div style={styles.appBody.output}>
          <Result 
            formState={this.state.modes[this.state.mode]} 
            validator={validators[this.state.mode]}
            calculator={calculators[this.state.mode]}
          />
        </div>
      </div>
    );
  }
  
  handleModeChange(event) {
    event.preventDefault();
    const mode = event.target.href.split('#')[1];
    this.setState(this.__getInitialState__(mode));
  }

  handleInputChange(event) {
    event.preventDefault();
    const fieldName = event.target.name.split('.')[1];
    const fieldValue = Number(event.target.value);
    const data = fromJS(this.state).updateIn(
      ['modes', this.state.mode, fieldName],
      (val) => fieldValue
    );
    this.setState(data.toJS());
  }
  
}
