import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import LoginTitle from '../components/login/LoginTitle';
import LongButton from '../components/common/button/LongButton';
import InputBox from '../components/input/InputBox';
import ErrorMessageBox from '../components/input/ErrorMessageBox';

const Form = styled.form`
  width: 322px;
  margin: 40px auto 0;
`;

export default function JoinPage(props) {
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [emailValidMessage, setEmailValidMessage] = useState('');
  const [passwordValidMessage, setPasswordValidMessage] = useState('');

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleEmailValidCheck = ({ target }) => {
    const emailValue = target.value;
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!emailRegex.test(emailValue)) {
      setEmailValidMessage('*잘못된 이메일 형식입니다.');
      setEmailValid(false);
      return;
    }
    setEmailValidMessage('');
    setEmailValid(true);
  };

  const emailValidCheck = async () => {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = '/user/emailvalid';
    const reqData = {
      user: {
        email: emailRef.current.value,
      },
    };
    try {
      const res = await fetch(url + reqPath, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(reqData),
      });
      const json = await res.json();
      const reqMsg = json.message;

      if (reqMsg === '이미 가입된 이메일 주소 입니다.') {
        setEmailValidMessage('*이미 가입된 이메일 주소입니다.');
        setEmailValid(false);
        emailRef.current.focus();
      } else {
        setEmailValidMessage('');
        setEmailValid(true);
      }
      return json;
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordValidCheck = ({ target }) => {
    const passwordLength = target.value.length;
    if (passwordLength < 6) {
      setPasswordValidMessage('*비밀번호는 6자 이상이어야 합니다.');
      setPasswordValid(false);
      return;
    }
    setPasswordValidMessage('');
    setPasswordValid(true);
  };

  const handleToNextPage = async (e) => {
    e.preventDefault();

    const { message } = await emailValidCheck();

    if (message === '사용 가능한 이메일 입니다.') {
      setEmailValidMessage('');
      props.history.push('/profile-setting', {
        userEmail: emailRef.current.value,
        userPw: passwordRef.current.value,
      });
      return;
    }
  };

  return (
    <>
      <LoginTitle>이메일로 회원가입</LoginTitle>
      <Form>
        <InputBox
          useRef={emailRef}
          onChange={handleEmailValidCheck}
          id='email'
          labelText='이메일'
          placeholder='이메일 주소를 입력해주세요'
        />
        {emailValidMessage && (
          <ErrorMessageBox>{emailValidMessage}</ErrorMessageBox>
        )}
        <InputBox
          type='password'
          useRef={passwordRef}
          onChange={handlePasswordValidCheck}
          id='password'
          labelText='비밀번호'
          placeholder='비밀번호를 설정해주세요'
        />
        {passwordValidMessage && (
          <ErrorMessageBox>{passwordValidMessage}</ErrorMessageBox>
        )}
      </Form>
      <LongButton
        disabled={!(emailValid && passwordValid)}
        onClick={handleToNextPage}
      >
        다음
      </LongButton>
    </>
  );
}
