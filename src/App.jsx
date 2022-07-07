import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
