import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileSettingPage from './pages/ProfileSettingPage';
import LoginHomePage from './pages/LoginHomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import FeedPage from './pages/FeedPage';
import FollowPage from './pages/FollowPage';
import ProfileEditPage from './pages/ProfileEditPage';
import PostAddPage from './pages/PostAddPage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './utils/route/PrivateRoute';
import ProductPage from './pages/ProductPage';
import PostEditPage from './pages/PostEditPage';

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
        <PrivateRoute path='/post/add' exact>
          <PostAddPage />
        </PrivateRoute>
        <PrivateRoute path='/post/edit' exact>
          <PostEditPage />
        </PrivateRoute>
        <Route path='/post/:post_id' exact component={PostPage} />
        <PrivateRoute path='/search' exact>
          <SearchPage />
        </PrivateRoute>
        <Route path='/profile/:userId' exact component={ProfilePage} />
        <PrivateRoute path='/profile' exact>
          <ProfilePage />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
