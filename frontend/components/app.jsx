import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>focalize</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute path="/sign-in" component={SessionFormContainer} />
      <AuthRoute path="/sign-up" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
