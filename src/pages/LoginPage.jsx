import React from 'react';
import styled from 'styled-components';
import LoginTitle from '../components/login/LoginTitle';
import InputBox from '../components/input/InputBox';
import ErrorMessageBox from '../components/input/ErrorMessageBox';
import LongBtn from '../components/login/LongBtn';
import EmailSignUp from '../components/email/EmailSignUp';
import { useState } from 'react';

const LoginForm = styled.form`
  width: 322px;
  margin: 0 auto;
  text-align: center;
`;
export default function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [emailValid, setEmailValid] = useState(false);

  const emailValidCheck = ({ target }) => {
    const emailValue = target.value;
    setEmail(emailValue);
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!emailRegex.test(emailValue)) {
      setEmailErrorMessage('*잘못된 이메일 형식입니다.');
      if (emailValue.length < 1) {
        setEmailErrorMessage('*필수 입력사항입니다.');
      }
      setEmailValid(false);
      return;
    }
    setEmailErrorMessage('');
    setErrorMessage('');
    setEmailValid(true);
  };

  const onPassword = ({ target }) => {
    const passwordValue = target.value;
    if (passwordValue.length < 1) {
      setErrorMessage('*필수 입력사항입니다.');
      return;
    }
    setPassword(passwordValue);
    setErrorMessage('');
  };

  async function login(e) {
    e.preventDefault();

    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = '/user/login';
    const userData = {
      user: {
        email: email,
        password: password,
      },
    };
    try {
      const res = await fetch(url + reqPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const resData = await res.json();
      if (resData.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        setErrorMessage('*이메일 또는 비밀번호가 일치하지 않습니다.');
      } else {
        localStorage.setItem('userInfo', JSON.stringify(resData));
        props.history.push('/feed');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <LoginForm>
        <LoginTitle>로그인</LoginTitle>
        <InputBox
          id='email'
          labelText='이메일'
          type='text'
          onChange={emailValidCheck}
          placeholder='이메일을 입력해주세요.'
        />
        {emailErrorMessage && (
          <ErrorMessageBox>{emailErrorMessage}</ErrorMessageBox>
        )}
        <InputBox
          id='pw'
          labelText='비밀번호'
          type='password'
          onChange={onPassword}
          placeholder='비밀번호를 입력해주세요.'
        />
        {errorMessage && <ErrorMessageBox>{errorMessage}</ErrorMessageBox>}
        <LongBtn disabled={!(emailValid && password)} onClick={login}>
          로그인
        </LongBtn>
        <EmailSignUp />
      </LoginForm>
    </>
  );
}
