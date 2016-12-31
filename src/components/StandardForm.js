import React from 'react';

import Input from './Input';

const StandardForm = (props) => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Weight</legend>
          <Input
            name="weight.lb"
            label="lb"
            value={props.currentState.lb}
          />
        </fieldset>
        <fieldset>
          <legend>Height</legend>
          <Input
            name="height.ft"
            label="ft"
            value={props.currentState.ft}
          />
          <Input
            name="height.in"
            label="in"
            value={props.currentState.in}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default StandardForm;