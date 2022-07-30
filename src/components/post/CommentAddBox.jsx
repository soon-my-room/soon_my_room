import React from 'react';
import styled from 'styled-components';
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

export default function CommentAddBox({ onClick, ...props }) {
  const { inputRefProps } = props;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const { image } = userInfo.user;
  if (!userInfo) {
    console.log('로그인을 먼저 해주세요.');
    props.history.push('/login');
    return;
  }

  return (
    <Wrap>
      <AuthorProfile size='tiny' src={image} alt='댓글 작성자 프로필 이미지' />
      <CommentInput
        placeholder='댓글 입력하기'
        size='35'
        ref={inputRefProps}
        required='required'
      />
      <AddBtn onClick={onClick}>게시</AddBtn>
    </Wrap>
  );
}
