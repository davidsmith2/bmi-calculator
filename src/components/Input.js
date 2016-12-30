import React from 'react';

const Input = (props, context) => {
	return (
      <label>
        <input
        	name={props.name}
        	onChange={context.onInputChange}
        />
        {props.label}
      </label>
	);
}

Input.contextTypes = {
	onInputChange: React.PropTypes.func.isRequired
};

export default Input;