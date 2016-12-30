import React from 'react';
import {fromJS} from 'immutable';
import {partial} from 'lodash';

import MetricForm from './MetricForm';
import Nav from './Nav';
import Result from './Result';
import StandardForm from './StandardForm';

import styles from '../styles';
import {calculateBMI, validateForm} from '../utils';

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
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  __getInitialState__() {
    return {
      modes: {
        standard: {
          lb: null, 
          ft: null, 
          in: null
        },
        metric: {
          kg: null,
          cm: null
        }
      }
    };
  }

  render() {
    this.currentMode = this.props.params.mode || 'standard';
    this.currentState = this.state.modes[this.currentMode];
    return(
      <div style={styles.appBody.container}>
        <div style={styles.appBody.input}>
          <Nav route={this.currentMode} />
          {(this.currentMode === 'standard') ? <StandardForm /> : <MetricForm />}
        </div>
        <div style={styles.appBody.output}>
          <Result
            calculateBMI={partial(calculateBMI, this.currentState, this.currentMode)}
            validateForm={partial(validateForm, this.currentState)}
          />
        </div>
      </div>
    );
  }
  
  handleInputChange(event) {
    event.preventDefault();
    const fieldName = event.target.name.split('.')[1];
    const fieldValue = Number(event.target.value);
    const data = fromJS(this.state).updateIn(
      ['modes', this.currentMode, fieldName],
      (val) => fieldValue || null
    );
    this.setState(data.toJS());
  }

}
