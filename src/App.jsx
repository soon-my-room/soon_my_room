import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/emailLogin' exact component={EmailLoginPage} />
        <Route path='/join' exact component={EmailJoinPage} />
        <Route path='/profileSet' exact component={ProfileSet} />
        <Route path='/feed' exact component={FeedHome} />
      </Switch>
    </>
  );
}

export default App;
