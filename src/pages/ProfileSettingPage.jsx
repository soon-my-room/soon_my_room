import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import InputBox from '../components/common/input/InputBox';
import ErrorMessageBox from '../components/common/input/ErrorMessageBox';
import LongButton from '../components/common/button/LongButton';
import LoginTitle from '../components/login/LoginTitle';
import ProfileImg from '../components/profileImg/ProfileImg';
import { axiosUserIdValidCheck } from '../apis/profileApi';
import { axiosImageSave, DEFAULT_IMAGE_URL } from '../apis/imageApi';

const Form = styled.form`
  width: 322px;
  margin: 0 auto;
`;

const ProfileWrapper = styled.div`
  width: 110px;
  height: 110px;
  margin: 30px auto;
`;

export default function ProfileSettingPage(props) {
  const [manageUserName, setManageUserName] = useState({
    errorMessage: '',
    isValid: false,
  });

  const [manageUserId, setManageUserId] = useState({
    errorMessage: '',
    isValid: false,
  });

  const [manageUserIntro, setManageUserIntro] = useState({
    errorMessage: '',
    isValid: false,
  });

  const userNameRef = useRef('');
  const userIdRef = useRef('');
  const userIntroduceRef = useRef('');

  const [userEmail, setUserEmail] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleUserNameValidCheck = ({ target }) => {
    const userNameLength = target.value.length;
    if (userNameLength < 2 || userNameLength > 10) {
      setManageUserName({
        errorMessage: '*2~10자 이내여야 합니다.',
        isValid: false,
      });
      return;
    }

    setManageUserName({
      errorMessage: '',
      isValid: true,
    });
  };

  const handleUserIdValidCheck = ({ target }) => {
    const userId = target.value;
    const validCheck = /^[a-zA-Z0-9._]*$/;

    if (!userId) {
      setManageUserId({
        errorMessage: '*계정 ID를 입력해 주세요.',
        isValid: false,
      });
      return;
    }

    if (!validCheck.test(userId)) {
      setManageUserId({
        errorMessage: '*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.',
        isValid: false,
      });
      return;
    }

    setManageUserId({
      errorMessage: '',
      isValid: true,
    });
  };

  const handleUserIntroduceValidCheck = ({ target }) => {
    const userIntro = target.value;
    if (!userIntro) {
      setManageUserIntro({
        errorMessage: '*소개를 입력해 주세요.',
        isValid: false,
      });
      return;
    }

    setManageUserIntro({
      errorMessage: '',
      isValid: true,
    });
  };

  const userIdValidCheck = async () => {
    try {
      const message = await axiosUserIdValidCheck(userIdRef.current.value);
      const errorMessages = [
        '이미 가입된 계정ID 입니다.',
        '잘못된 접근입니다.',
      ];

      if (errorMessages.includes(message)) {
        setManageUserId({
          errorMessage: `*${errorMessages[errorMessages.indexOf(message)]}`,
          isValid: false,
        });
        userIdRef.current.focus();
        return;
      }

      return true;
    } catch (err) {
      console.error(err);
    }
  };

  const getUserImageUrl = async () => {
    const imageFiles = document.getElementById('imgUpload').files;

    if (!imageFiles.length) {
      return DEFAULT_IMAGE_URL;
    }

    const formData = new FormData();
    formData.append('image', imageFiles[0]);

    try {
      const saveImageUrl = await axiosImageSave(formData);
      return saveImageUrl;
    } catch (error) {
      console.log('유저 이미지 저장 에러', error);
    }
  };

  const join = async () => {
    const url = 'https://mandarin.api.weniv.co.kr';
    const imageUrl = await getUserImageUrl();

    try {
      const path = '/user';
      const res = await fetch(`${url}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: userNameRef.current.value,
            email: userEmail,
            password: userPw,
            accountname: userIdRef.current.value,
            intro: userIntroduceRef.current.value,
            image: imageUrl,
          },
        }),
      });

      const joinResult = await res.json();
      return joinResult;
    } catch (err) {
      console.error(err);
    }
  };

  const handleStartMarketClick = async (e) => {
    e.preventDefault();

    const userIdValidResult = await userIdValidCheck();
    if (!userIdValidResult) {
      return;
    }

    const joinResult = await join();
    if (joinResult.message === '회원가입 성공') {
      props.history.push('/login');
    } else {
      alert(joinResult.message);
    }
  };

  useEffect(() => {
    if (props?.location?.state) {
      const { userEmail, userPw } = props.location.state;
      setUserEmail(userEmail);
      setUserPw(userPw);
    } else {
      props.history.push('join');
    }
  }, []);

  return (
    <>
      <LoginTitle subTxt>프로필 설정</LoginTitle>
      <Form>
        <ProfileWrapper>
          <ProfileImg />
        </ProfileWrapper>
        <InputBox
          useRef={userNameRef}
          onChange={handleUserNameValidCheck}
          id='userName'
          labelText='사용자 이름'
          placeholder='2~10자 이내여야 합니다.'
        />
        {manageUserName.errorMessage && (
          <ErrorMessageBox>{manageUserName.errorMessage}</ErrorMessageBox>
        )}
        <InputBox
          useRef={userIdRef}
          onChange={handleUserIdValidCheck}
          id='userId'
          labelText='계정 ID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
        />
        {manageUserId.errorMessage && (
          <ErrorMessageBox>{manageUserId.errorMessage}</ErrorMessageBox>
        )}
        <InputBox
          useRef={userIntroduceRef}
          onChange={handleUserIntroduceValidCheck}
          id='userIntroduce'
          labelText='소개'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
        />
        {manageUserIntro.errorMessage && (
          <ErrorMessageBox>{manageUserIntro.errorMessage}</ErrorMessageBox>
        )}
        <LongButton
          disabled={
            !(
              manageUserName.isValid &&
              manageUserId.isValid &&
              manageUserIntro.isValid
            )
          }
          onClick={handleStartMarketClick}
        >
          감귤마켓 시작하기
        </LongButton>
      </Form>
    </>
  );
}
