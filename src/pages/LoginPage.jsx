import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/login/Login';
import Profile from '../components/profileImg/Profile';

export default function LoginPage() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/profile' exact component={Profile} />
      </Switch>
    </>
  );
}
