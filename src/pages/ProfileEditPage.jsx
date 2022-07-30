import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import InputBox from '../components/common/input/InputBox';
import ProfileImg from '../components/profileImg/ProfileImg';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import { getUserInfo } from '../utils/userInfo';
import ErrorMessageBox from '../components/common/input/ErrorMessageBox';
import Button from '../components/common/button/Button';
import {
  axiosProfileInfoEdit,
  axiosUserIdValidCheck,
} from '../apis/profileApi';
import { axiosImageSave } from '../apis/imageApi';

const ProfileEditWrap = styled.div`
  position: relative;
  width: 390px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 322px;
  margin: 0 auto;
`;

const SaveFormButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 16px;
`;

const ProfileWrapper = styled.div`
  width: 110px;
  height: 110px;
  margin: 30px auto;
`;

export default function ProfileEditPage(props) {
  const [userInfo, setUserInfo] = useState(getUserInfo);

  const [manageUserName, setManageUserName] = useState({
    errorMessage: '',
    isValid: true,
  });

  const [manageUserId, setManageUserId] = useState({
    errorMessage: '',
    isValid: true,
  });

  const [manageUserIntro, setManageUserIntro] = useState({
    errorMessage: '',
    isValid: true,
  });

  const userNameRef = useRef('');
  const userIdRef = useRef('');
  const userIntroduceRef = useRef('');

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
      const userId = userIdRef.current.value;
      const message = await axiosUserIdValidCheck(userId);

      if (message === '이미 가입된 계정ID 입니다.') {
        setManageUserId({
          errorMessage: '*이미 가입된 계정ID 입니다.',
          isValid: false,
        });
        userIdRef.current.focus();
        return;
      }

      if (message === '잘못된 접근입니다.') {
        setManageUserId({
          errorMessage: '*잘못된 접근입니다.',
          isValid: false,
        });
        return;
      }

      if (!message) {
        setManageUserId({
          errorMessage: '*관리자에게 문의해주세요.',
          isValid: false,
        });
        return;
      }

      return true;
    } catch (err) {
      console.error(err);
    }
  };

  const getUserImageUrl = async () => {
    const file = document.getElementById('imgUpload').files;
    if (!file.length) {
      return userInfo.image;
    }

    const formData = new FormData();
    formData.append('image', file[0]);

    const saveImageUrl = await axiosImageSave(formData);
    return saveImageUrl;
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();

    // 새롭게 입력된 계정ID 와 로컬스토리지에 저장된 계정ID가 같지 않으면 유효성검사를 한다.
    const userId = userIdRef.current.value;
    if (userId !== userInfo.accountname) {
      const userIdValidResult = await userIdValidCheck();
      if (!userIdValidResult) {
        return;
      }
    }

    // 서버에 이미지 주소를 요청
    const imageUrl = await getUserImageUrl();

    const editUserInfo = {
      user: {
        username: userNameRef.current.value,
        accountname: userIdRef.current.value,
        intro: userIntroduceRef.current.value,
        image: imageUrl,
      },
    };

    // 프로필 수정을 서버에 요청
    const profileEditResult = await axiosProfileInfoEdit(editUserInfo);

    if (profileEditResult.status === 200) {
      const userInfo = getUserInfo();
      const updateUserInfo = {
        ...userInfo,
        accountname: profileEditResult.data.user.accountname,
        image: profileEditResult.data.user.image,
        intro: profileEditResult.data.user.intro,
        username: profileEditResult.data.user.username,
      };

      localStorage.setItem('userInfo1', JSON.stringify(updateUserInfo));
      localStorage.setItem(
        'userInfo',
        JSON.stringify({ user: updateUserInfo }),
      ); // 나중에 안정화 되면 삭제해야함

      props.history.push('/profile');
    } else {
      alert('에러가 발생했습니다.');
      console.log(profileEditResult);
    }
  };

  useEffect(() => {
    userNameRef.current.value = userInfo.username;
    userIdRef.current.value = userInfo.accountname;
    userIntroduceRef.current.value = userInfo.intro;
  }, []);

  return (
    <ProfileEditWrap>
      <TopNavBasic {...props} />
      <Form>
        <ProfileWrapper>
          <ProfileImg profileImage={userInfo.image} />
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
        <SaveFormButton
          small
          disabled={
            !(
              manageUserName.isValid &&
              manageUserId.isValid &&
              manageUserIntro.isValid
            )
          }
          onClick={handleSaveClick}
        >
          저장
        </SaveFormButton>
      </Form>
    </ProfileEditWrap>
  );
}
