import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TopNavUpload from '../components/common/nav/TopNavUpload';
import uploadFile from '../assets/upload-file.png';
import defaultImg from '../assets/symbol-logo-gray.png';
import deleteBtnImg from '../assets/icon/x.svg';

const FormAreaWrap = styled.section`
  margin: 20px 0 13px;
  text-align: center;
`;

const AuthorProfile = styled.img`
  width: 42px;
  margin-left: 16px;
  vertical-align: top;
`;

const Form = styled.form`
  display: inline;
  position: relative;
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

const UploadedImgArea = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  let { post_id } = useParams();
  const imgInputRef = useRef();
  const textAreaRef = useRef();

  const [textAreaValid, setTextAreaValid] = useState(false);
  const [img, setImg] = useState([]);

  const handleImgUpload = (e) => {
    setImg([...img, URL.createObjectURL(e.target.files[0])]);
    if (img.length > 2) {
      setImg(img.slice(0, 3));
    }
  };

  const handleImgDelete = (e) => {
    const s = img.filter((item, index) => index !== e);
    setImg(s);
  };

  const handleDefaultImg = (e) => {
    e.target.src = defaultImg;
  };

  const handletextAreaValid = ({ target }) => {
    const textLength = target.value.length;
    if (textLength > 0) {
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

  const { image, token } = userInfo.user;

  const handleSubmit = async () => {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = '/post';
    const reqData = {
      post: {
        content: textAreaRef.current.value,
        image: imgInputRef.current.value,
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
      const postData = await res.json();
      if (postData) {
        console.log(postData);
        props.history.push(`/post/${post_id}`);
      }
      return;
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
      />
      <FormAreaWrap>
        <AuthorProfile src={image} alt='작성자 프로필 이미지' />
        <Form name='post-upload'>
          <TextArea
            rows='30'
            cols='50'
            placeholder='게시글 입력하기...'
            ref={textAreaRef}
            onChange={handletextAreaValid}
          ></TextArea>
          {img.length > 0 &&
            img.map((item, index) => (
              <UploadedImgArea key={item}>
                <UploadedImg
                  src={item}
                  onError={handleDefaultImg}
                  alt={`${item}-${index}`}
                />
                <ImgDeleteBtn
                  type='button'
                  onClick={() => handleImgDelete(index)}
                >
                  <img src={deleteBtnImg} alt='이미지 삭제 버튼' />
                </ImgDeleteBtn>
              </UploadedImgArea>
            ))}
          <label htmlFor='imgUpload' title='이미지 파일 업로드'>
            <UploadFileImage src={uploadFile} alt='이미지 파일 업로드' />
          </label>
          <HiddenUploadFileInput
            type='file'
            multiple
            accept='image/*'
            id='imgUpload'
            ref={imgInputRef}
            onChange={handleImgUpload}
          />
        </Form>
      </FormAreaWrap>
    </>
  );
}
