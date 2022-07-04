import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Header from './components/home/Header';
import SearchBtn from './components/home/SearchBtn';
import BasicFeed from './components/home/BasicFeed';
import Menu from './components/home/TabMenu';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/header' exact component={Header} />
        <Route path='/search' exact component={SearchBtn} />
        <Route path='/basic' exact component={BasicFeed} />
        <Route path='/menu' exact component={Menu} />
      </Switch>
    </>
  );
}

export default App;
