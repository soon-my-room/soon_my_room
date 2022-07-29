import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopNavHome from '../components/common/nav/TopNavHome';
import BasicFeed from '../components/feed/BasicFeed';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import FollowingPostList from '../components/feed/FollowingPostList';

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
  const [followingList, setFollowingList] = useState([]);
  async function getFollowingList(token) {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = `/post/feed`;

    try {
      const res = await fetch(url + reqPath, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const resJson = await res.json();
      setFollowingList(resJson);
    } catch (err) {}
  }
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = userInfo?.user?.token;

  useEffect(() => {
    if (!userInfo) {
      props.history.push('/login');
      return;
    }
    getFollowingList(token);
  }, []);

  return (
    <HomeContainer>
      <NavContainer>
        <TopNavHome />
      </NavContainer>
      {followingList != 0 ? (
        <FollowingPostList followingList={followingList} />
      ) : (
        <BasicFeed />
      )}
      <BottomNavMenu type='feed' />
    </HomeContainer>
  );
}
