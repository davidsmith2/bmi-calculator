import React from 'react';

const StandardForm = (props) => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Weight</legend>
          <label>
            <input name="weight.lb" onChange={props.onInputChange} />
            lb
          </label>
        </fieldset>
        <fieldset>
          <legend>Height</legend>
          <label>
            <input name="height.ft" onChange={props.onInputChange} />
            ft
          </label>
          <label>
            <input name="height.in" onChange={props.onInputChange} />
            in
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default StandardForm;