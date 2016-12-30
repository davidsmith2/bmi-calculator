import React from 'react';

import Input from './Input';

const MetricForm = (props) => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Weight</legend>
          <Input
            name="weight.kg"
            label="kg"
            value={props.currentState.kg}
          />
        </fieldset>
        <fieldset>
          <legend>Height</legend>
          <Input
            name="height.cm"
            label="cm"
            value={props.currentState.cm}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default MetricForm;