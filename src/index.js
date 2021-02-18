import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/Main'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from './pages/About';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
