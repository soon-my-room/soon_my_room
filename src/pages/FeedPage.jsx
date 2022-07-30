import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopNavHome from '../components/common/nav/TopNavHome';
import BasicFeed from '../components/feed/BasicFeed';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import FollowingPostList from '../components/feed/FollowingPostList';
import { axiosGetFollowingFeedList } from '../apis/feedApi';

const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-gray);
  background-color: white;
  z-index: 1;
`;

export default function FeedPage(props) {
  const [followingFeedList, setFollowingFeedList] = useState([]);
  useEffect(() => {
    axiosGetFollowingFeedList().then(setFollowingFeedList);
  }, []);

  return (
    <HomeContainer>
      <NavContainer>
        <TopNavHome />
      </NavContainer>
      {followingFeedList.length ? (
        <FollowingPostList followingFeedList={followingFeedList} />
      ) : (
        <BasicFeed />
      )}
      <BottomNavMenu type='feed' />
    </HomeContainer>
  );
}
