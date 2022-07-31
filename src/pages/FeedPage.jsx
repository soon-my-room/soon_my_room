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

const Title = styled.h1`
  margin: 13px 0px 13px 16px;
  text-align: left;
  color: var(--main-title-color);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export default function FeedPage(props) {
  const [followingFeedList, setFollowingFeedList] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  useEffect(() => {
    axiosGetFollowingFeedList().then(setFollowingFeedList);
  }, [isRefresh]);

  return (
    <HomeContainer>
      <NavContainer>
        <Title onClick={() => setIsRefresh(!isRefresh)}>금방내방 피드</Title>
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
