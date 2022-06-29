import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import EmailLoginPage from './pages/EmailLoginPage';
import JoinPage from './pages/JoinPage';
import ProfileSet from './pages/ProfileSetPage';
import FeedHome from './pages/FeedHomePage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/emailLogin' exact component={EmailLoginPage} />
        <Route path='/join' exact component={JoinPage} />
        <Route path='/profileSet' exact component={ProfileSet} />
        <Route path='/feed' exact component={FeedHome} />
      </Switch>
    </>
  );
}

export default App;
