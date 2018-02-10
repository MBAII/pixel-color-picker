"use strict";

import React, {Component} from 'react';
import {Switch, Link, Router, Route, Redirect} from 'react-router-dom';
import {accessLevel} from '../lib/config';

import Main from './scenes/main';
import App from './scenes/app';

const Routes = () => (
	<div>
		<Link to="/Home">Home</Link>
		<br></br>
		<Link to="/About">About</Link>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/Home" component={Main} />
			<Route path="/About" component={App} />
		</Switch>
	</div>
);

export default Routes;
