import React from 'react';
import {fromJS} from 'immutable';
import {partial} from 'lodash';

import MetricForm from './MetricForm';
import Nav from './Nav';
import Result from './Result';
import StandardForm from './StandardForm';
import styles from '../styles';
import {calculateBMI, validateForm, navigate} from '../utils';

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
    this.state = this.__getInitialState__(props.location.query);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  __getInitialState__(query) {
    return {
      modes: {
        standard: {
          lb: Number(query.lb) || null,
          ft: Number(query.ft) || null,
          in: Number(query.in) || null
        },
        metric: {
          kg: Number(query.kg) || null,
          cm: Number(query.cm) || null
        }
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state = this.__getInitialState__(nextProps.location.query);
  }

  render() {
    this.currentMode = this.props.params.mode || 'standard';
    this.currentState = this.state.modes[this.currentMode];
    return(
      <div style={styles.appBody.container}>
        <div style={styles.appBody.input}>
          <Nav route={this.currentMode} />
          {(this.currentMode === 'standard') ? <StandardForm currentState={this.currentState} /> : <MetricForm currentState={this.currentState} />}
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
    this.setState((prevState, props) => {
      const nextState = data.toJS();
      navigate(nextState.modes[this.currentMode], this.currentMode);
      return nextState;
    });
  }

}
