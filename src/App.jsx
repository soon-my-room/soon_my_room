import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileSettingPage from './pages/ProfileSettingPage';
import LoginHomePage from './pages/LoginHomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import FeedPage from './pages/FeedPage';
import FollowPage from './pages/FollowPage';
import ProfileEditPage from './pages/ProfileEditPage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './utils/route/PrivateRoute';
import ProductPage from './pages/ProductPage';
import PostUploadPage from './pages/PostUploadPage';

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
        <PrivateRoute path='/feed' exact>
          <FeedPage />
        </PrivateRoute>
        <PrivateRoute path='/profile/edit' exact>
          <ProfileEditPage />
        </PrivateRoute>
        <PrivateRoute path={['/product/add', '/product/edit']}>
          <ProductPage />
        </PrivateRoute>
        <PrivateRoute path={['/post/add', '/post/edit']} exact>
          <PostUploadPage />
        </PrivateRoute>
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
