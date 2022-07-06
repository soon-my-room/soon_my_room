import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
      </Switch>
    </>
  );
}

export default App;
