import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './utils/route/PrivateRoute';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={LoginHomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/profile-setting' exact component={ProfileSettingPage} />
        <Route path='/join' exact component={JoinPage} />
        <PrivateRoute path={['/follower', '/following']} exact>
          <FollowPage />
        </PrivateRoute>
        <Route path='/feed' exact component={FeedPage} />
        <PrivateRoute path='/profile/edit' exact>
          <ProfileEditPage />
        </PrivateRoute>
        <Route path='/product/add' exact component={ProductAddPage} />
        <Route path='/product/edit' exact component={ProductEditPage} />
        <Route path='/post/add' exact component={PostAddPage} />
        <Route path='/post/:post_id' exact component={PostPage} />
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
