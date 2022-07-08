import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logoImg from '../assets/symbol-logo-W.png';
import LoginCard from '../components/login/LoginCard';
import Splash from '../components/splash/Splash';

const LoginContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
`;

const LoginLogoImg = styled.img`
  width: 144px;
  height: 144px;
  margin-bottom: 177px;
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
