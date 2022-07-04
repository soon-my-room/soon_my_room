import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import ProfileSettingPage from './pages/ProfileSettingPage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/profile-setting' exact component={ProfileSettingPage} />
      </Switch>
    </>
  );
}

export default App;
