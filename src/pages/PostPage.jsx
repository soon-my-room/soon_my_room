import React from 'react';
import styled from 'styled-components';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import PostItem from '../components/post/PostItem';
import CommentAddBox from '../components/post/CommentAddBox';
import CommentItem from '../components/post/CommentItem';

const PostItemWrap = styled.main`
  margin: 20px 16px 24px;
`;
const CommentListWrap = styled.section`
  margin: 20px 16px 66px;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--border-gray);
  }
`;
export default function PostPage({ postList }) {
  console.log(postList);
  return (
    <>
      <TopNavBasic viewMore />
      <PostItemWrap>
        <PostItem />
        <CommentListWrap>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </CommentListWrap>
      </PostItemWrap>
      <CommentAddBox color={'var(--border-gray)'} />
    </>
  );
}
