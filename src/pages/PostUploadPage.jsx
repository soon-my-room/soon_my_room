import React, { useRef } from 'react';
import styled from 'styled-components';
import uploadFile from '../assets/upload-file.png';
import basicProfile from '../assets/basic-profile.png';
import TopNavUpload from '../components/common/nav/TopNavUpload';

const TextAreaWrap = styled.section`
  text-align: center;
`;

const AuthorProfile = styled.img`
  width: 42px;
  margin: 20px 0 0 16px;
  vertical-align: top;
`;

const Form = styled.form`
  display: inline-block;
  margin: 32px 0 0 13px;
`;
const TextArea = styled.textarea`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 14px;
  color: var(--main-title-color);
  outline: none;
  cursor: text;
  &::placeholder {
    color: var(--border-gray);
  }
`;

const HiddenImgBox = styled.div`
  top: 16px;
  width: 304px;
  height: 228px;
  border: 0.5px solid var(--border-gray);
  border-radius: 10px;
  display: none;
`;
const UploadFileImage = styled.img`
  width: 50px;
  cursor: pointer;
  position: fixed;
  bottom: 16px;
  right: 16px;
`;
const HiddenUploadFileInput = styled.input`
  display: none;
`;
export default function PostUploadPage() {
  const imgInputRef = useRef();
  const textAreaRef = useRef();
  return (
    <>
      <TopNavUpload buttonText='업로드' buttonDisabled onClick />
      <TextAreaWrap>
        <AuthorProfile src={basicProfile} alt='작성자 프로필 이미지' />
        <Form name='post-upload'>
          <TextArea
            rows='80'
            cols='50'
            placeholder='게시글 입력하기...'
            ref={textAreaRef}
          />
          <HiddenImgBox />
          <label htmlFor='imgUpload'></label>
          <HiddenUploadFileInput type='file' id='imgUpload' ref={imgInputRef} />
        </Form>
      </TextAreaWrap>

      <UploadFileImage src={uploadFile} alt='파일 업로드' onClick />
    </>
  );
}
