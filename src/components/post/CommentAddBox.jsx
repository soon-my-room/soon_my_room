import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { axiosWriteComment } from '../../apis/postApi';
import { getUserInfo } from '../../utils/userInfo';
import UserProfile from '../profileImg/UserProfileImg';

const Wrap = styled.div`
  width: 390px;
  position: fixed;
  bottom: 0;
  padding: 12.5px 20px 12px 16px;
  border-top: 0.5px solid var(--border-gray);
  background-color: white;
`;

const AuthorProfile = styled(UserProfile)`
  width: 36px;
  margin-right: 16px;
  vertical-align: top;
`;

const CommentInput = styled.input`
  display: inline-block;
  margin-top: 10.5px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  border: none;
  cursor: text;
  &::placeholder {
    color: var(--border-gray);
  }
  &:valid + button {
    color: var(--main-color);
    cursor: pointer;
  }
`;

const AddBtn = styled.button`
  margin-top: 10.5px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 14px;
  color: var(--border-gray);
  cursor: not-allowed;
  float: right;
`;

export default function CommentAddBox({ postId, ...props }) {
  const inputRef = useRef();
  const [userImage, setUserImage] = useState();

  async function handleWriteComment(postId, commentValue) {
    const { comment } = await axiosWriteComment(postId, commentValue);
    inputRef.current.value = '';
  }

  useEffect(() => {
    const { image } = getUserInfo();
    setUserImage(image);
  }, []);

  return (
    <Wrap>
      <AuthorProfile
        size='tiny'
        src={userImage}
        alt='댓글 작성자 프로필 이미지'
      />
      <CommentInput
        placeholder='댓글 입력하기'
        size='35'
        ref={inputRef}
        required='required'
      />
      <AddBtn
        onClick={() => handleWriteComment(postId, inputRef.current.value)}
      >
        게시
      </AddBtn>
    </Wrap>
  );
}
