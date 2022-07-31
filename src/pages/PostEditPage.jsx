import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import TopNavUpload from '../components/common/nav/TopNavUpload';
import UserProfile from '../components/profileImg/UserProfileImg';
import defaultImg from '../assets/symbol-logo-gray.png';
import uploadFile from '../assets/upload-file.svg';
import deleteBtnImg from '../assets/icon/x.svg';
import { getUserInfo } from '../utils/userInfo';
import { axiosImageSave } from '../apis/imageApi';
import { axiosEditPost } from '../apis/postApi';

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

export default function PostEditPage({ ...props }) {
  const [imgBlob, setImgBlob] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [possibleUpload, setPossibleUpload] = useState(false);

  const textAreaRef = useRef();

  const userInfo = useCallback(getUserInfo(), []);

  const handleTextAreaValidCheck = ({ target }) => {
    const textAreaLength = target.value.length;
    textAreaLength ? setPossibleUpload(true) : setPossibleUpload(false);
  };

  const handleImgUpload = async (e) => {
    const files = e.target.files[0];
    const maxValue = 10 * 1024 * 1024;

    //파일 3장까지만 받도록 처리.
    if (imgBlob.length > 2) {
      // setImgBlob(imgBlob.slice(0, 3));
      alert('3개 이하의 파일을 업로드 하세요.');
      return;
    }

    //파일 타입, 사이즈 유효성 체크 후 데이터 state와 프리뷰용 blob state에 넣어주기.
    if (files.type === '') {
      e.target.value = null;
      alert('이미지 파일만 업로드가 가능합니다.');
      return;
    }

    if (files.size > maxValue) {
      e.target.value = null;
      alert('파일의 용량이 10MB를 초과했습니다.');
      return;
    }

    setImgData([...imgData, files]);
    setImgBlob([...imgBlob, URL.createObjectURL(files)]);
    e.target.value = '';

    if (textAreaRef.current.value) {
      setPossibleUpload(true);
    }
  };

  //이미지 삭제 버튼 누르면 데이터와 프리뷰용 blob 둘다 제거.
  const handleImgDelete = (idx) => {
    setImgBlob(imgBlob.filter((_, index) => index !== idx));
    setImgData(imgData.filter((_, index) => index !== idx));

    if (textAreaRef.current.value) {
      setPossibleUpload(true);
    }
  };

  //img를 load하는 과정에서 error가 발생하면 defaultImg 표시
  const handleDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const handleSubmit = async () => {
    let imageUrlList = [];

    // 새롭게 등록된 이미지를 처리하는 로직
    for (let imageData of imgData) {
      if (imageData.constructor === File) {
        const formData = new FormData();
        formData.append('image', imageData);

        // 이미지를 서버에 저장하고 url을 바로 배열에 넣어준다.
        const imageUrl = await axiosImageSave(formData);
        imageUrlList.push(imageUrl);
      } else {
        // 이미 과거에 서버에 저장한 이미지라서 url을 바로 배열에 넣어준다.
        imageUrlList.push(imageData);
      }
    }
    //img url을 합친 문자열 만들기
    const convertImageUrlArrayToString = imageUrlList.join(',');

    //게시글 수정 api

    try {
      const { id } = props.location.state.post;
      const { post } = await axiosEditPost(
        id,
        textAreaRef.current.value,
        convertImageUrlArrayToString,
      );

      if (post) {
        props.history.push(`/post/${post.id}`, {
          post,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!props.location?.state?.post) {
      props.history.push('/profile');
      return;
    }

    const { content, image } = props.location?.state?.post;
    const images = image.split(',');

    textAreaRef.current.value = content;
    setImgBlob(images);
    setImgData(images); // 이미지를 수정하면서 삭제했을 때 같은 인덱스를 삭제해야하기 때문에 여기도 넣어줌
  }, []);

  return (
    <>
      <TopNavUpload
        buttonText='업로드'
        buttonDisabled={!possibleUpload}
        onClick={handleSubmit}
        {...props}
      />
      <FormAreaWrap>
        <form>
          <AuthorProfile
            size='small'
            src={userInfo.image}
            alt='글 작성자 프로필 이미지'
          />
          <TextArea
            placeholder='게시글 입력하기...'
            cols='40'
            ref={textAreaRef}
            onChange={handleTextAreaValidCheck}
          />
          {!!imgBlob.length && (
            <UploadedImgListWrap>
              {imgBlob.map((image, index) => (
                <UploadedImgList key={index}>
                  <UploadedImg
                    style={
                      imgBlob.length === 1
                        ? { width: '304px', height: '228px' }
                        : { width: '168px', height: '126px' }
                    }
                    src={image}
                    onError={handleDefaultImg}
                    alt={`업로드이미지-${index}`}
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
          )}
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
