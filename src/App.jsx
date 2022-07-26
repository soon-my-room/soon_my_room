import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProfileSettingPage from './pages/ProfileSettingPage';
import LoginHomePage from './pages/LoginHomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import FeedPage from './pages/FeedPage';
import FollowPage from './pages/FollowPage';
import ProfileEditPage from './pages/ProfileEditPage';
import ProductAddPage from './pages/ProductAddPage';
import ProductEditPage from './pages/ProductEditPage';
import PostAddPage from './pages/PostAddPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import { getUserInfo } from './utils/userInfo';

function PrivateRoute({ children, ...rest }) {
  const [userInfo] = useState(getUserInfo);
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? (
          React.cloneElement(children, { ...props })
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={LoginHomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/profile-setting' exact component={ProfileSettingPage} />
        <Route path='/join' exact component={JoinPage} />
        <Route
          path='/follower'
          exact
          render={(props) => <FollowPage title='Followers' {...props} />}
        />
        <Route
          path='/following'
          exact
          render={(props) => <FollowPage title='Followings' {...props} />}
        />
        <Route path='/feed' exact component={FeedPage} />
        <Route path='/profile/edit' exact component={ProfileEditPage} />
        <Route path='/product/add' exact component={ProductAddPage} />
        <Route path='/product/edit' exact component={ProductEditPage} />
        <Route path='/post/add' exact component={PostAddPage} />
        <Route path='/search' exact component={SearchPage} />
        <Route path='/profile/:userId' exact component={ProfilePage} />
        <PrivateRoute path='/profile' exact>
          <ProfilePage />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
