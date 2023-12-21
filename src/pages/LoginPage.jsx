import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import LoginTitle from '../components/login/LoginTitle';
import LongButton from '../components/common/button/LongButton';
import InputBox from '../components/common/input/InputBox';
import ErrorMessageBox from '../components/common/input/ErrorMessageBox';
import EmailSignUp from '../components/email/EmailSignUp';
import { API_URL } from '../apis';

const LoginForm = styled.form`
  width: 322px;
  margin: 0 auto;
  text-align: center;
`;

export default function LoginPage(props) {
  const userEmailRef = useRef('');
  const userPasswordRef = useRef('');

  const [errorMessage, setErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [loginlValid, setLoginValid] = useState(false);

  const handleUserEmailValidCheck = () => {
    const userEmail = userEmailRef.current.value;
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!userEmail.length) {
      setEmailErrorMessage('*필수 입력사항입니다.');
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage('*잘못된 이메일 형식입니다.');
      setLoginValid(false);
      return;
    }

    setEmailErrorMessage('');
    setErrorMessage('');
    setLoginValid(true);
  };

  const handleUserPasswordValidCheck = () => {
    const userPassword = userPasswordRef.current.value;

    if (!userPassword.length) {
      setErrorMessage('*필수 입력사항입니다.');
      return;
    }
    if (userPassword.length < 6) {
      setErrorMessage('*비밀번호는 6자 이상이어야 합니다.');
      return;
    }
    setErrorMessage('');
  };

  async function hendleLoginSubmit(e) {
    e.preventDefault();

    const reqPath = '/user/login';
    const userData = {
      user: {
        email: userEmailRef.current.value,
        password: userPasswordRef.current.value,
      },
    };
    try {
      const res = await fetch(API_URL + reqPath, {
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

        // userInfo객체의 구조가 userInfo: { user: { ...정보 }} 로 되어있어서 리팩토링하기위해 추가로 userInfo1 설정
        // 나중에 리팩토링이 끝나면 userInfo1을 userInfo로 바꿀 예정입니다.
        const { user } = resData;
        localStorage.setItem('userInfo1', JSON.stringify(user));

        props.history.push('/feed');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm>
        <InputBox
          id='email'
          labelText='이메일'
          type='text'
          onChange={handleUserEmailValidCheck}
          placeholder='이메일을 입력해주세요.'
          useRef={userEmailRef}
        />
        {emailErrorMessage && (
          <ErrorMessageBox>{emailErrorMessage}</ErrorMessageBox>
        )}
        <InputBox
          id='pw'
          labelText='비밀번호'
          type='password'
          onChange={handleUserPasswordValidCheck}
          placeholder='비밀번호를 입력해주세요.'
          useRef={userPasswordRef}
        />
        {errorMessage && <ErrorMessageBox>{errorMessage}</ErrorMessageBox>}
        <LongButton
          disabled={!(loginlValid && userPasswordRef.current.value)}
          onClick={hendleLoginSubmit}
        >
          로그인
        </LongButton>
        <EmailSignUp />
      </LoginForm>
    </>
  );
}
