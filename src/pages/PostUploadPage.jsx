import React, { useRef } from 'react';
import styled from 'styled-components';
import uploadFile from '../assets/upload-file.png';
import basicProfile from '../assets/basic-profile.png';
import TopNavUpload from '../components/common/nav/TopNavUpload';

const Container = styled.section`
  width: 390px;
  margin: 0 auto;
`;

const AuthorProfile = styled.img`
  width: 42px;
  margin: 20px 0 0 16px;
  vertical-align: top;
`;

const TextArea = styled.form`
  display: inline-block;
  margin-top: 32px;
  margin-left: 13px;
`;
const Input = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  outline: none;
  cursor: text;
  max-width: 304px;
  /* overflow: hidden; */
  overflow-y: hidden;
  &:empty:before {
    content: attr(placeholder);
    color: var(--border-gray);
  }
`;
const UploadFileImage = styled.img`
  width: 50px;
  cursor: pointer;
  position: fixed;
  bottom: 16px;
  right: 16px;
`;
const HiddenInput = styled.input`
  display: none;
`;

export default function PostUploadPage() {
  const imgInputRef = useRef();
  const textAreaRef = useRef();
  return (
    <>
      <TopNavUpload buttonText='업로드' buttonDisabled onClick>
        업로드
      </TopNavUpload>
      <Container>
        <AuthorProfile src={basicProfile} alt='작성자 프로필 이미지' />
        <TextArea name='post-upload'>
          <Input
            placeholder='게시글 입력하기...'
            contentEditable='true'
            ref={textAreaRef}
          />
          <label htmlFor='imgUpload'></label>
          <HiddenInput type='file' id='imgUpload' ref={imgInputRef} />
        </TextArea>
      </Container>

      <UploadFileImage src={uploadFile} alt='파일 업로드' onClick />
    </>
  );
}
