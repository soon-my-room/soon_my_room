import React, { useEffect, useState, useRef } from 'react';
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
  const inputRef = useRef();

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const { token } = userInfo.user;

  async function handleAddComment() {
    const pathname = location.pathname;
    const url = 'https://mandarin.api.weniv.co.kr';
    const req = `${pathname}/comments`;
    const reqData = {
      comment: {
        content: inputRef.current.value,
      },
    };
    try {
      const resPost = await fetch(url + req, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(reqData),
      });
      const postResponse = await resPost.json();
      inputRef.current.value = '';
      return postResponse.data;
    } catch (err) {
      console.error('error');
    }
  }

  useEffect(() => {
    const { post_id } = match.params;
    axiosGetPostComments(post_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [comments]);

  return (
    <>
      <TopNavBasic viewMore {...props} />
      <PostItemWrap>
        <PostItem post={location.state.post} />
        <CommentListWrap>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </CommentListWrap>
      </PostItemWrap>
      <CommentAddBox
        inputRefProps={inputRef}
        onClick={handleAddComment}
        color={'var(--border-gray)'}
      />
    </>
  );
}
