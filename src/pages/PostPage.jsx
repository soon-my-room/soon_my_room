import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosGetPostComments, axiosGetPostDetail } from '../apis/postApi';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import CommentAddBox from '../components/post/CommentAddBox';
import CommentItem from '../components/post/CommentItem';
import PostItem from '../components/post/PostItem';

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
  const [postId] = useState(match.params.post_id);

  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axiosGetPostDetail(postId).then(({ post }) => {
      setPost(post);
    });

    axiosGetPostComments(postId).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  useEffect(() => {
    axiosGetPostDetail(postId).then(({ post }) => {
      setPost(post);
    });
  }, [comments]);

  return (
    <>
      <TopNavBasic viewMore {...props} />
      <PostItemWrap>
        {post && <PostItem post={post} />}
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
