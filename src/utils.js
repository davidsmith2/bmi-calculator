import {
  isEqual,
  keys,
  pickBy,
  identity
} from 'lodash';

const validate = (state, validKeys) => {
  return isEqual(
    keys(
      pickBy(state, identity)
    ),
    validKeys
  );
};

const validators = {
  standard: (state) => {
    return validate(state, ['lb', 'ft', 'in']);
  },
  metric: (state) => {
    return validate(state, ['kg', 'cm']);
  }
};

const calculate = (weightInKilograms, heightInMeters) => {
  return (weightInKilograms / Math.pow(heightInMeters, 2)).toFixed(1);
};

const calculators = {
  standard: (state) => {
    const weightInKilograms = state.lb * 0.45;
    const heightInMeters = ((state.ft * 12) + state.in) * 0.025;
    return calculate(weightInKilograms, heightInMeters);
  },
  metric: (state) => {
    const weightInKilograms = Number(state.kg);
    const heightInMeters = state.cm / 100;
    return calculate(weightInKilograms, heightInMeters);
  }
};

export {validators};
export {calculators};