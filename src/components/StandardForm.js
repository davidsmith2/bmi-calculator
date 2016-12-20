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
          />
        </fieldset>
        <fieldset>
          <legend>Height</legend>
          <Input
            name="height.ft"
            label="ft"
          />
          <Input
            name="height.in"
            label="in"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default StandardForm;