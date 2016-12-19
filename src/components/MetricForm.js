import React from 'react';

const MetricForm = (props) => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Weight</legend>
          <label>
            <input name="weight.kg" onChange={props.onInputChange} />
            kg
          </label>
        </fieldset>
        <fieldset>
          <legend>Height</legend>
          <label>
            <input name="height.cm" onChange={props.onInputChange} />
            cm
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default MetricForm;