import React from 'react';
import ReactDOM from 'react-dom';
import {
	browserHistory, 
	IndexRoute,
	Route,
	Router
} from 'react-router';
import {useBasename} from 'history';

import App from './App';
import AppBody from './components/AppBody';
import './index.css';

ReactDOM.render(
  <Router history={useBasename(() => browserHistory)({basename: process.env.PUBLIC_URL})}>
  	<Route path="/" component={App}>
  		<IndexRoute component={AppBody} />
		<Route path="/:mode" component={AppBody} />
	</Route>
  </Router>,
  document.getElementById('root')
);
