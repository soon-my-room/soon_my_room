import React from 'react';
import styled from 'styled-components';
import InputBox from '../components/common/input/InputBox';
import ProfileImg from '../components/profileImg/ProfileImg';
import TopNavBasic from '../components/common/nav/TopNavBasic';

const ProfileEditWrap = styled.div`
  position: relative;
  width: 390px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 322px;
  margin: 0 auto;
`;

const SaveFormButton = styled.button`
  background-color: var(--main-color);
  color: var(--disabled-text-color);
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  width: 90px;
  line-height: 32px;
  border-radius: 32px;
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
  return (
    <ProfileEditWrap>
      <TopNavBasic {...props} />
      <Form>
        <ProfileWrapper>
          <ProfileImg />
        </ProfileWrapper>
        <InputBox
          labelText='사용자 이름'
          placeholder='2~10자 이내여야 합니다.'
        />
        <InputBox
          labelText='계정 ID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
        />

        <InputBox
          labelText='소개'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
        />
        <SaveFormButton>저장</SaveFormButton>
      </Form>
    </ProfileEditWrap>
  );
}
