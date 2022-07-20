import React, { useState } from 'react';
import styled from 'styled-components';
import TopNavUpload from '../components/common/nav/TopNavUpload';
import UserProfile from '../components/profileImg/UserProfileImg';
import defaultImg from '../assets/symbol-logo-gray.png';
import uploadFile from '../assets/upload-file.png';
import deleteBtnImg from '../assets/icon/x.svg';

const FormAreaWrap = styled.section`
  margin: 20px 16px 0;
`;

const AuthorProfile = styled(UserProfile)`
  vertical-align: top;
`;

const TextArea = styled.textarea`
  margin: 12px 0 0 12px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 14px;
  color: var(--paragraph-text-color);
  height: 280px;
  cursor: text;
  &::placeholder {
    color: var(--border-gray);
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--border-gray);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--main-color);
    border-radius: 10px;
  }
`;

//이미지 업로드 시 뜨는 프리뷰 창 ol > li > img, button
const UploadedImgListWrap = styled.ol`
  margin-top: 16px;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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

export default function PostAddPage({ ...props }) {
  const [textAreaValid, setTextAreaValid] = useState(false);
  const [imgFile, setImgFile] = useState([]);

  const handleTextAreaValid = ({ target }) => {
    const textAreaLength = target.value.length;
    if (textAreaLength > 0) {
      setTextAreaValid(true);
    } else {
      setTextAreaValid(false);
    }
    return;
  };

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (!userInfo) {
    console.log('로그인을 먼저 해주세요.');
    props.history.push('/login');
    return;
  }

  const AuthorProfileImg = userInfo.user.image;

  //해당 파일의 전체 내용을 URL 텍스트로 변환하여 이미지 프리뷰 3장까지만 업로드
  const handleImgUpload = (e) => {
    setImgFile([...imgFile, URL.createObjectURL(e.target.files[0])]);
    e.target.value = '';
    if (imgFile.length > 2) {
      setImgFile(imgFile.slice(0, 3));
    }
  };

  //이미지 프리뷰 삭제. 클릭한 요소가 아닌 요소들만 모은 배열을 반환하여 ImgFile에 저장하는 방식.
  const handleImgDelete = (e) => {
    setImgFile(imgFile.filter((item, index) => index !== e));
  };

  //img를 load하는 과정에서 error가 발생하면 defaultImg 표시
  const handleDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <>
      <TopNavUpload buttonText='업로드' buttonDisabled={!textAreaValid} />
      <FormAreaWrap>
        <form>
          <AuthorProfile
            size='small'
            src={AuthorProfileImg}
            alt='글 작성자 프로필 이미지'
          />
          <TextArea
            placeholder='게시글 입력하기...'
            cols='40'
            onChange={handleTextAreaValid}
          />
          <UploadedImgListWrap>
            {imgFile.length > 0 &&
              imgFile.map((image, index) => (
                <UploadedImgList key={index}>
                  <UploadedImg
                    src={image}
                    onError={handleDefaultImg}
                    alt={`${image}=${index}`}
                  />
                  <ImgDeleteBtn
                    type='button'
                    onClick={() => handleImgDelete(index)}
                  >
                    <img src={deleteBtnImg} alt='이미지 삭제 버튼' />
                  </ImgDeleteBtn>
                </UploadedImgList>
              ))}
          </UploadedImgListWrap>
        </form>
        <label htmlFor='imgUpload' title='이미지 파일 업로드'>
          <UploadFileImage src={uploadFile} alt='이미지 파일 업로드' />
        </label>
        <HiddenUploadFileInput
          type='file'
          multiple
          accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
          id='imgUpload'
          onChange={handleImgUpload}
        />
      </FormAreaWrap>
    </>
  );
}
