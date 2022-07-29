import React from 'react';
import styled from 'styled-components';
import PostItem from '../post/PostItem';

const Wrapper = styled.ul`
  margin: 70px 16px 95px;
  width: 390px;
  & > li + li {
    margin-top: 20px;
  }
`;

export default function FollowingPostList({ followingList }) {
  return (
    <Wrapper>
      {followingList.posts.map((data) => (
        <PostItem key={data.id} post={data} />
      ))}
    </Wrapper>
  );
}
