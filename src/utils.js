import {
  isEqual,
  isNull,
  keys,
  pickBy
} from 'lodash';
import {browserHistory} from 'react-router';
import {encode} from 'querystring';

export const calculateBMI = (state, mode) => {
  let kg;
  let m;
  if (mode === 'standard') {
    kg = state.lb * 0.45;
    m = ((state.ft * 12) + state.in) * 0.025;
  }
  if (mode === 'metric') {
    kg = state.kg;
    m = state.cm / 100;
  }
  return (kg / Math.pow(m, 2)).toFixed(1);
};

export const validateForm = (state) => {
  return isEqual(
    keys(
      pickBy(
        state, (val) => !isNull(val)
      )
    ),
    keys(state)
  );
};

export const navigate = (state, mode) => {
    const query = encode(state);
    const path = `${process.env.PUBLIC_URL}/${mode}?${query}`;
    if (validateForm(state)) {
      browserHistory.push(path);
    }
};