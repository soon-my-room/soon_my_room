import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' exact component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
