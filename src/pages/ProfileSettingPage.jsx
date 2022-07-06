import React, { useRef, useState, useEffect } from 'react';
import LoginTitle from '../components/login/LoginTitle';
import InputBox from '../components/input/InputBox';
import styled from 'styled-components';
import LongBtn from '../components/login/LongBtn';
import ErrorMessageBox from '../components/input/ErrorMessageBox';
import Profile from '../components/profileImg/Profile';

const Form = styled.form`
  width: 322px;
  margin: 0 auto;
`;

export default function ProfileSettingPage(props) {
  const [userNameValidMessage, setUserNameValidMessage] = useState('');
  const [userIdValidMessage, setUserIdValidMessage] = useState('');
  const [userIntroduceValidMessage, setUserIntroduceValidMessage] =
    useState('');

  const [userNameValid, setUserNameValid] = useState(false);
  const [userIdValid, setUserIdValid] = useState(false);
  const [userIntroduceValid, setUserIntroduceValid] = useState(false);

  const userIdRef = useRef('');

  const handleUserNameValidCheck = ({ target }) => {
    const userNameLength = target.value.length;
    if (userNameLength < 2 || userNameLength > 10) {
      setUserNameValidMessage('*2~10자 이내여야 합니다.');
      setUserNameValid(false);
      return;
    }

    setUserNameValidMessage('');
    setUserNameValid(true);
  };

  const handleUserIdValidCheck = ({ target }) => {
    const userId = target.value;
    const validCheck = /^[a-zA-Z0-9._]*$/;

    if (!userId) {
      setUserIdValidMessage('*계정 ID를 입력해 주세요.');
      setUserIdValid(false);
      return;
    }

    if (!validCheck.test(userId)) {
      setUserIdValidMessage('*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.');
      setUserIdValid(false);
      return;
    }

    setUserIdValidMessage('');
    setUserIdValid(true);
  };

  const handleUserIntroduceValidCheck = ({ target }) => {
    const userIntroduce = target.value;
    if (!userIntroduce) {
      setUserIntroduceValidMessage('*소개를 입력해 주세요.');
      setUserIntroduceValid(false);
      return;
    }

    setUserIntroduceValidMessage('');
    setUserIntroduceValid(true);
  };

  const userIdValidCheck = async () => {
    const url = 'https://mandarin.api.weniv.co.kr';

    try {
      const res = await fetch(url + '/user/accountnamevalid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            accountname: userIdRef.current.value,
          },
        }),
      });

      return await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  const handleStartMarketClick = async (e) => {
    e.preventDefault();

    const { message } = await userIdValidCheck();

    if (message === '이미 가입된 계정ID 입니다.') {
      setUserIdValidMessage('*이미 가입된 계정ID 입니다.');
      userIdRef.current.focus();
      return;
    }

    if (message === '잘못된 접근입니다.') {
      setUserIdValidMessage('*잘못된 접근입니다.');
      return;
    }

    if (!message) {
      setUserIdValidMessage('*관리자에게 문의해주세요.');
      return;
    } else {
      // 모든 유효성 검사 통과 후 feed 페이지로 이동
      props.history.push('/profile-setting', {
        userEmail: userIdRef.current.value,
        userPw: userIdRef.current.value,
      });
    }
  };

  return (
    <>
      <LoginTitle subTxt>프로필 설정</LoginTitle>
      <Form>
        <Profile />
        <InputBox
          onChange={handleUserNameValidCheck}
          id='userName'
          labelText='사용자 이름'
          placeholder='2~10자 이내여야 합니다.'
        />
        {userNameValidMessage && (
          <ErrorMessageBox>{userNameValidMessage}</ErrorMessageBox>
        )}
        <InputBox
          useRef={userIdRef}
          onChange={handleUserIdValidCheck}
          id='userId'
          labelText='계정 ID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
        />
        {userIdValidMessage && (
          <ErrorMessageBox>{userIdValidMessage}</ErrorMessageBox>
        )}
        <InputBox
          onChange={handleUserIntroduceValidCheck}
          id='userIntroduce'
          labelText='소개'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
        />
        {userIntroduceValidMessage && (
          <ErrorMessageBox>{userIntroduceValidMessage}</ErrorMessageBox>
        )}
        <LongBtn
          disabled={!(userNameValid && userIdValid && userIntroduceValid)}
          onClick={handleStartMarketClick}
        >
          감귤마켓 시작하기
        </LongBtn>
      </Form>
    </>
  );
}
