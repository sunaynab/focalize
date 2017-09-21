import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './navbar/navbar';

const App = () => (
  <div>
    <NavBar />
      <Switch>
        <AuthRoute path="/sign-in" component={SessionFormContainer} />
        <AuthRoute path="/sign-up" component={SessionFormContainer} />
      </Switch>
  </div>
);

export default App;
