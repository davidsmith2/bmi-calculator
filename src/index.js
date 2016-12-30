import React from 'react';
import ReactDOM from 'react-dom';
import {
	hashHistory, 
	IndexRoute,
	Route,
	Router
} from 'react-router';

import App from './App';
import AppBody from './components/AppBody';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={AppBody} />
		<Route path="/:mode" component={AppBody} />
	</Route>
  </Router>,
  document.getElementById('root')
);
