import {
  isEqual,
  keys,
  pickBy,
  identity
} from 'lodash';

export const calculators = {
  standard: (state, func) => {
    const weightInKilograms = state.lb * 0.45;
    const heightInMeters = ((state.ft * 12) + state.in) * 0.025;
    return func.call(this, weightInKilograms, heightInMeters);
  },
  metric: (state, func) => {
    const weightInKilograms = Number(state.kg);
    const heightInMeters = state.cm / 100;
    return func.call(this, weightInKilograms, heightInMeters);
  },
  calculate: (weightInKilograms, heightInMeters)  => {
    return (weightInKilograms / Math.pow(heightInMeters, 2)).toFixed(1);
  }
};

export const validators = {
  standard: (state, func) => {
    return func.call(this, state, ['lb', 'ft', 'in']);
  },
  metric: (state, func) => {
    return func.call(this, state, ['kg', 'cm']);
  },
  validate: (state, validKeys) => {
    return isEqual(
      keys(
        pickBy(state, identity)
      ),
      validKeys
    );
  }
};