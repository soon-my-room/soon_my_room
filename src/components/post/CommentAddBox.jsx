import React, { useRef } from 'react';
import styled from 'styled-components';
import basicProfile from '../../assets/basic-profile.png';

const Wrap = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 0.5px solid var(--border-gray);
  background-color: white;
`;

const AuthorProfile = styled.img`
  width: 36px;
  margin: 13px 18px 12px 16px;
  vertical-align: top;
`;

const CommentInput = styled.input`
  display: inline-block;
  padding: 23px 0;
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
`;

const AddBtn = styled.button`
  padding: 23px 16px 20px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.color};
  float: right;
`;

export default function CommentAddBox({ ...props }) {
  const inputRef = useRef();

  return (
    <Wrap>
      <AuthorProfile src={basicProfile} alt='작성자 프로필 이미지' />
      <CommentInput placeholder='댓글 입력하기' size='75' ref={inputRef} />
      <AddBtn {...props}>게시</AddBtn>
    </Wrap>
  );
}
