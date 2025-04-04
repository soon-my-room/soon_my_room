import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getUserInfo } from '../userInfo';
import { setAccessToken, setCurrentUser } from '../../apis/tokenStorage';
import { axiosRefreshToken } from '../../apis/profileApi';

export default function PrivateRoute({ children, ...rest }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const user = getUserInfo();

      if (user) {
        setIsAuthenticated(true);
        setIsLoading(false);
        return;
      }

      // 사용자 정보가 없으면 토큰 갱신 시도
      try {
        const response = await axiosRefreshToken();

        if (response.data && response.data.user) {
          const { token, ...userWithoutToken } = response.data.user;
          setAccessToken(token);
          setCurrentUser(userWithoutToken);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log('인증 실패:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
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
