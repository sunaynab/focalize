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
import Home from './home/home';
import Following from './following/following';
import ProfileContainer from './profile/profile_container';



const App = () => (
  <div className="everything">
    <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
        <ProtectedRoute path="/following" component={Following} />
        <AuthRoute path="/sign-in" component={SessionFormContainer} />
        <AuthRoute path="/sign-up" component={SessionFormContainer} />
      </Switch>
  </div>
);

export default App;
