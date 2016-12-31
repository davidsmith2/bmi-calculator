import React from 'react';

import NavLink from './NavLink';
import {CONTEXT_ROOT} from '../utils';

const Nav = (props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={`${CONTEXT_ROOT}/standard`} label="Standard" route={props.route} />
        </li>
        <li>
          <NavLink to={`${CONTEXT_ROOT}/metric`} label="Metric" route={props.route} />
        </li>
      </ul>
    </div>
  );
};

export default Nav;