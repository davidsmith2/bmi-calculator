import React from 'react';
import ReactDOM from 'react-dom';
import {
	browserHistory, 
	IndexRoute,
	Route,
	Router
} from 'react-router';

import App from './App';
import AppBody from './components/AppBody';
import './index.css';
import {CONTEXT_ROOT} from './utils';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={AppBody} />
			<Route path={`${CONTEXT_ROOT}/:mode`} component={AppBody} />
		</Route>
	</Router>,
	document.getElementById('root')
);
