import { Route, Switch } from 'react-router-dom';
import ProfileSettingPage from './pages/ProfileSettingPage';
import LoginHomePage from './pages/LoginHomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import FeedPage from './pages/FeedPage';
import FollowPage from './pages/FollowPage';
import ProfileEditPage from './pages/ProfileEditPage';
import PostUploadPage from './pages/PostUploadPage';

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
        <Route path='/post/upload' exact component={PostUploadPage} />
      </Switch>
    </>
  );
}

export default App;
