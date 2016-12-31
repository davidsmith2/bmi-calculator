import React from 'react';

import NavLink from './NavLink';

const Nav = (props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/standard" label="Standard" route={props.route} />
        </li>
        <li>
          <NavLink to="/metric" label="Metric" route={props.route} />
        </li>
      </ul>
    </div>
  );
};

export default Nav;