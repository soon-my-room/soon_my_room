import React, { useState } from 'react';
import styled from 'styled-components';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import PostItem from '../components/post/PostItem';
import CommentAddBox from '../components/post/CommentAddBox';
import CommentItem from '../components/post/CommentItem';
import ModalContainer from '../components/common/modal/ModalContainer';
import ModalList from '../components/common/modal/ModalList';

const PostItemWrap = styled.main`
  margin: 20px 16px 24px;
`;
const CommentListWrap = styled.section`
  position: relative;
  margin: 20px 16px 66px;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--border-gray);
  }
`;

export default function PostPage({ location, ...props }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <TopNavBasic viewMore />
      <PostItemWrap>
        <PostItem post={location.state.post} />
        <CommentListWrap>
          <CommentItem onClick={handleModalOpen} />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </CommentListWrap>
      </PostItemWrap>
      <CommentAddBox color={'var(--border-gray)'} />
      {modalOpen && (
        <ModalContainer>
          <ModalList>신고하기</ModalList>
        </ModalContainer>
      )}
    </>
  );
}
