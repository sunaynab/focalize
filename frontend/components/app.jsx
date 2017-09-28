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
import FollowingContainer from './following/following_container';
import ProfileContainer from './profile/profile_container';
import PhotoDetailContainer from './photos/photos_container';
import FeedContainer from './following/feed_container';


const App = () => (
  <div className="everything">
    <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <ProtectedRoute path="/photos/:photoId" component={PhotoDetailContainer} />
        <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
        <ProtectedRoute path="/following" component={FollowingContainer} />
        <ProtectedRoute path="/feed" component={FeedContainer} />
        <AuthRoute path="/sign-in" component={SessionFormContainer} />
        <AuthRoute path="/sign-up" component={SessionFormContainer} />
      </Switch>
  </div>
);

export default App;
