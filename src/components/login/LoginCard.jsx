import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmailIcon from '../../assets/icon/icon-email.svg';
import SignUpIcon from '../../assets/icon/icon-signup.svg';

const LoginBtn = styled.button`
  position: relative;
  width: 322px;
  height: 44px;
  background-color: var(--bg-color);
  color: var(--subtitle-text);
  font-size: 14px;
  border-radius: 44px;
  cursor: pointer;
  &::before {
    position: absolute;
    display: block;
    top: 50%;
    left: 16px;
    content: '';
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background-image: ${(props) => (props.name === 'email' ? `url(${EmailIcon})` : `url(${SignUpIcon})`)};
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
  bottom: -14rem;
`;

export default function LoginCard() {
  return (
    <>
      <LoginList>
        <LoginItem>
          <Link to='/login'>
            <LoginBtn name='email'>이메일로 로그인</LoginBtn>
          </Link>
        </LoginItem>
        <LoginItem>
          <LoginBtn name='signUp'>회원가입</LoginBtn>
        </LoginItem>
      </LoginList>
    </>
  );
}
