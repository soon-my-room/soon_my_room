import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import TopNavUpload from '../components/common/nav/TopNavUpload';
import UserProfile from '../components/profileImg/UserProfileImg';
import defaultImg from '../assets/symbol-logo-gray.png';
import uploadFile from '../assets/upload-file.svg';
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
  const textAreaRef = useRef();
  const [textAreaValid, setTextAreaValid] = useState(false);
  const [imgBlob, setImgBlob] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [imgName, setImgName] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (!userInfo) {
    console.log('로그인을 먼저 해주세요.');
    props.history.push('/login');
    return;
  }

  const AuthorProfileImg = userInfo.user.image;
  const { token } = userInfo.user;

  const handleTextAreaValid = ({ target }) => {
    const textAreaLength = target.value.length;
    if (textAreaLength) {
      setTextAreaValid(true);
    } else {
      setTextAreaValid(false);
    }
    return;
  };

  const handleImgUpload = async (e) => {
    const files = e.target.files[0];
    const maxValue = 10 * 1024 * 1024;

    //파일 타입, 사이즈 유효성 체크 후 데이터 state와 프리뷰용 blob state에 넣어주기.
    if (files.type === '') {
      e.target.value = null;
      alert('이미지 파일만 업로드가 가능합니다.');
    } else if (files.size > maxValue) {
      e.target.value = null;
      alert('파일의 용량이 10MB를 초과했습니다.');
    } else {
      setImgData([...imgData, files]);
      setImgBlob([...imgBlob, URL.createObjectURL(files)]);
      e.target.value = '';
    }

    //파일 3장까지만 받도록 처리.
    if (imgData.length > 2) {
      setImgData(imgData.slice(0, 3));
      alert('3개 이하의 파일을 업로드 하세요.');
    }

    if (imgBlob.length > 2) {
      setImgBlob(imgBlob.slice(0, 3));
    }
  };

  //이미지 삭제 버튼 누르면 데이터와 프리뷰용 blob 둘다 제거.
  const handleImgDelete = (idx) => {
    setImgBlob(imgBlob.filter((item, index) => index !== idx));
    setImgData(imgData.filter((item, index) => index !== idx));
  };

  //img를 load하는 과정에서 error가 발생하면 defaultImg 표시
  const handleDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const url = 'https://mandarin.api.weniv.co.kr';

  const handleSubmit = async () => {
    const formData = new FormData();
    imgData.map((value) => {
      return formData.append('image', value);
    });

    //여러개 이미지 포스트 api
    try {
      const reqImgPath = '/image/uploadfiles';
      const resImg = await fetch(url + reqImgPath, {
        method: 'POST',
        body: formData,
      });
      const imgRes = await resImg.json();
      for (let i of imgRes) {
        setImgName([...imgName, imgName.push(i['filename'])]);
      }
    } catch (err) {
      console.error(err);
    }
    //img url을 합친 문자열 만들기
    const imgNameJoin = imgName
      .map((value) => 'https://mandarin.api.weniv.co.kr/' + value)
      .join(',');

    //게시글 작성 api
    const reqPath = '/post';
    const reqData = {
      post: {
        content: textAreaRef.current.value,
        image: imgNameJoin,
      },
    };

    try {
      const res = await fetch(url + reqPath, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(reqData),
      });
      const submitRes = await res.json();
      if (submitRes) {
        props.history.push(`/post/${submitRes.post.id}`, {
          post: submitRes.post,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <TopNavUpload
        buttonText='업로드'
        buttonDisabled={!textAreaValid}
        onClick={handleSubmit}
        {...props}
      />
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
            ref={textAreaRef}
            onChange={handleTextAreaValid}
          />
          <UploadedImgListWrap>
            {imgBlob.length > 0 &&
              imgBlob.map((image, index) => (
                <UploadedImgList key={index}>
                  <UploadedImg
                    style={{
                      width: imgBlob.length === 1 ? '304px' : '168px',
                      height: imgBlob.length === 1 ? '228px' : '126px',
                    }}
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
