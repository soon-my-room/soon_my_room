import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/join' exact component={JoinPage} />
      </Switch>
    </>
  );
}

export default App;
