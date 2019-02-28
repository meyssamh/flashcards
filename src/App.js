import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Library from './containers/Library/Library';
import Cards from './containers/Cards/Cards';
import Edit from './containers/Edit/Edit';

class App extends Component {
	render() {

		return (
			<Switch>
				<Route path={'/'} exact component={Library} />
				<Route path={'/cards'} exact component={Cards} />
				<Route path={'/edit'} exact component={Edit} />
			</Switch>
		);
	}
}

export default App;