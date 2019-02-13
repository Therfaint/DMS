/**
 * Created by therfaint- on 26/12/2018.
 */
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Login from '../page/login/';

class DMS extends Component {
  render() {
    return <div>DMS</div>;
  }
}

// TODO extract params and use config to generate routes and menu

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/dms" component={DMS}/>
    </Switch>
  </Router>
);

export default routes;
