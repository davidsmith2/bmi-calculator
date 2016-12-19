import React from 'react';

const Nav = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a href="#standard" onClick={props.onChange}>Standard</a>
        </li>
        <li>
          <a href="#metric" onClick={props.onChange}>Metric</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;