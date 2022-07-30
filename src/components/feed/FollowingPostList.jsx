import React from 'react';
import styled from 'styled-components';
import FollowingFeedItem from '../post/PostItem';

const Wrapper = styled.ul`
  margin: 70px 16px 95px;
  width: 358px;
  & > li + li {
    margin-top: 20px;
  }
`;

export default function FollowingPostList({ followingFeedList }) {
  return (
    <Wrapper>
      {followingFeedList.map((followingFeed) => (
        <FollowingFeedItem key={followingFeed.id} post={followingFeed} />
      ))}
    </Wrapper>
  );
}
