import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import SearchBtn from './SearchBtn';
import BasicFeed from './BasicFeed';
import TabMenu from './TabMenu';

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-gray);
`;

export default function Home() {
  return (
    <>
      <HomeContainer>
        <NavContainer>
          <Header />
          <SearchBtn />
        </NavContainer>
        <BasicFeed />
        <TabMenu />
      </HomeContainer>
    </>
  );
}
