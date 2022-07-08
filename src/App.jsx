import { Route, Switch } from 'react-router-dom';
import ProfileSettingPage from './pages/ProfileSettingPage';
import LoginHomePage from './pages/LoginHomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={LoginHomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/profile-setting' exact component={ProfileSettingPage} />
        <Route path='/join' exact component={JoinPage}/>
      </Switch>
    </>
  );
}

export default App;
