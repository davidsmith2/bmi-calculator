import {
  isEqual,
  isNull,
  keys,
  pickBy
} from 'lodash';

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