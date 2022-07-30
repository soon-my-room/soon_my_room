import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import PostItem from '../components/post/PostItem';
import CommentAddBox from '../components/post/CommentAddBox';
import CommentItem from '../components/post/CommentItem';
import { axiosGetPostComments } from '../apis/postApi';

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
export default function PostPage({ location, match, ...props }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const { post_id } = match.params;
    axiosGetPostComments(post_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <TopNavBasic viewMore {...props} />
      <PostItemWrap>
        <PostItem post={location.state.post} />
        <CommentListWrap>
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              setComments={setComments}
            />
          ))}
        </CommentListWrap>
      </PostItemWrap>
      <CommentAddBox
        setComments={setComments}
        postId={match.params.post_id}
        color={'var(--border-gray)'}
      />
    </>
  );
}
