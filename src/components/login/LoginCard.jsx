import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import emailIcon from '../../assets/icon/icon-email.svg';
import signUpIcon from '../../assets/icon/icon-signup.svg';

const LoginBtn = styled(Link)`
  display: block;
  position: relative;
  width: 322px;
  height: 44px;
  background-color: var(--main-color);
  color: var(--main-subtext-color);
  font-size: 14px;
  cursor: pointer;
  border-radius: 44px;
  text-align: center;
  line-height: 44px;

  &::before {
    position: absolute;
    left: 16px;
    top: 50%;
    display: block;
    content: '';
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background-image: ${(props) =>
      props.to === '/login' ? `url(${emailIcon})` : `url(${signUpIcon})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px 24px;
  }
`;

const LoginItem = styled.li`
  margin-bottom: 20px;
`;

const LoginList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LoginCard() {
  return (
    <>
      <LoginList>
        <LoginItem>
          <LoginBtn to='/login'>이메일로 로그인</LoginBtn>
        </LoginItem>
        <LoginItem>
          <LoginBtn to='/join'>회원가입</LoginBtn>
        </LoginItem>
      </LoginList>
    </>
  );
}
