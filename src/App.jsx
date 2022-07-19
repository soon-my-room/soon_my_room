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
import ProfilePage from './pages/ProfilePage';

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
        <Route path='/profile/:userId' exact component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
