import React from 'react';
import styled from 'styled-components';
import TopUploadNav from '../components/common/nav/TopNavUpload';
import InputBox from '../components/common/input/InputBox';
import ProfileImg from '../components/profileImg/ProfileImg';
import uploadFileButton from '../assets/upload-file-button-gray.svg';
import InputImageUploadBox from '../components/common/input/InputImageUploadBox';

const ProfileEditWrap = styled.div`
  width: 390px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 322px;
  margin: 0 auto;
`;

const InputImageUploadBoxWrap = styled.div`
  margin: 30px 0;
`;

export default function ProductUploadPage() {
  return (
    <ProfileEditWrap>
      <TopUploadNav buttonText='저장' buttonDisabled />
      <Form>
        <InputImageUploadBoxWrap />
        <InputImageUploadBox
          htmlFor='imgUpload'
          labelText='이미지 등록'
          type='file'
          id='imgUpload'
        />
        <InputImageUploadBoxWrap />
        <InputBox labelText='상품명' placeholder='2~15자 이내여야 합니다.' />
        <InputBox
          type='number'
          labelText='가격'
          placeholder='숫자만 입력 가능합니다.'
        />

        <InputBox labelText='판매 링크' placeholder='URL을 입력해 주세요.' />
      </Form>
    </ProfileEditWrap>
  );
}
