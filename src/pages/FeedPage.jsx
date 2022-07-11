import React from 'react';
import styled from 'styled-components';
import TopNavHome from '../components/common/nav/TopNavHome';
import BasicFeed from '../components/feed/BasicFeed';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
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
`;

export default function FeedPage() {
  return (
    <HomeContainer>
      <NavContainer>
        <TopNavHome />
      </NavContainer>
      <BasicFeed />
      <BottomNavMenu type='feed' />
    </HomeContainer>
  );
}
