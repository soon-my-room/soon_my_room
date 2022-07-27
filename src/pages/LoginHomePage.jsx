import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logoImg from '../assets/full-logo-01.svg';
import LoginCard from '../components/login/LoginCard';
import Splash from '../components/splash/Splash';

const LoginContainer = styled.main`
  margin: 0 -1500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
`;

const LoginLogoImg = styled.img`
  width: 200px;
  /* margin-bottom: 120px; */
  margin: 0 auto 120px;
`;

export default function LoginHomePage(props) {
  const [isLoginToken, setIsLoginToken] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo?.user.token) {
      setTimeout(() => {
        props.history.push('/feed');
      }, 1000);
      setIsLoginToken(true);
    }
  }, []);

  return (
    <>
      <Splash />
      {!isLoginToken && (
        <LoginContainer>
          <LoginLogoImg src={logoImg} />
          <LoginCard />
        </LoginContainer>
      )}
    </>
  );
}
