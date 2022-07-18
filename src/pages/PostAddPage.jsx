import React from 'react';
import styled from 'styled-components';
import TopNavUpload from '../components/common/nav/TopNavUpload';
import basicProfile from '../assets/basic-profile.png';
import postExampleImg from '../assets/post-example-img.png';
import uploadFile from '../assets/upload-file.png';
import deleteBtnImg from '../assets/icon/x.svg';

const FormAreaWrap = styled.section`
  margin: 20px 16px 0;
  text-align: center;
`;

const AuthorProfile = styled.img`
  width: 42px;
  vertical-align: top;
`;

const Form = styled.form`
  display: inline-block;
`;

const TextArea = styled.textarea`
  margin: 12px 0 0 12px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 14px;
  color: var(--paragraph-text-color);
  outline: none;
  cursor: text;
  &::placeholder {
    color: var(--border-gray);
  }
`;

//이미지 업로드 시 뜨는 프리뷰 창 ol > li > img, button
const UploadedImgListWrap = styled.ol`
  margin-top: 16px;
`;

const UploadedImgList = styled.li`
  display: inline-block;
  position: relative;
  margin-right: 8px;
`;

const UploadedImg = styled.img`
  width: 304px;
  height: 228px;
  border: 0.5px solid var(--border-gray);
  border-radius: 10px;
  object-fit: cover;
  background-color: white;
`;

const ImgDeleteBtn = styled.button`
  position: absolute;
  top: 11.5px;
  right: 11.5px;
  width: 22px;
  cursor: pointer;
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

export default function PostAddPage() {
  return (
    <>
      <TopNavUpload buttonText='업로드' buttonDisabled />
      <FormAreaWrap>
        <AuthorProfile src={basicProfile} alt='글 작성자 프로필 이미지' />
        <Form>
          <TextArea cols='50' placeholder='게시글 입력하기...' />
        </Form>
        <UploadedImgListWrap>
          <UploadedImgList>
            <UploadedImg src={postExampleImg} alt='업로드된 이미지' />
            <ImgDeleteBtn type='button'>
              <img src={deleteBtnImg} alt='이미지 삭제 버튼' />
            </ImgDeleteBtn>
          </UploadedImgList>
        </UploadedImgListWrap>
        <label htmlFor='imgUpload' title='이미지 파일 업로드'>
          <UploadFileImage src={uploadFile} alt='이미지 파일 업로드' />
        </label>
        <HiddenUploadFileInput type='file' accept='image/*' id='imgUpload' />
      </FormAreaWrap>
      ''
    </>
  );
}
