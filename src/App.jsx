import { Route, Switch } from 'react-router-dom';
import ProfileSettingPage from './pages/ProfileSettingPage';
import LoginHomePage from './pages/LoginHomePage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={LoginHomePage} />
        <Route path='/profile-setting' exact component={ProfileSettingPage} />
      </Switch>
    </>
  );
}

export default App;
