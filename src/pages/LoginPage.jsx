import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/login/Login';

export default function LoginPage() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
      </Switch>
    </>
  );
}
