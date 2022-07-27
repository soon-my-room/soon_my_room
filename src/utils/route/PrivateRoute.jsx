import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getUserInfo } from '../userInfo';

export default function PrivateRoute({ children, ...rest }) {
  const userInfo = getUserInfo();

  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? (
          React.cloneElement(children, { ...props })
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
