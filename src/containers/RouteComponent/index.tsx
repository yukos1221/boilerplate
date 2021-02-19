import React, { FC } from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import AboutPage from '../../pages/About'
import MainPage from '../../pages/Main'

const RouteComponent: FC = () => (
	<Router>
		<Switch>
			<Route path="/">
				<MainPage />
			</Route>
			<Route path="/about">
				<AboutPage />
			</Route>
		</Switch>
	</Router>
)

export default RouteComponent
