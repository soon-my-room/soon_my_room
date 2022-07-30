import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/symbol-logo-W-01.svg';
import { Link } from 'react-router-dom';

const FeedContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const LogoImg = styled.img``;

const BasicTxt = styled.p`
  color: var(--subtitle-text);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;

const SearchBigBtn = styled.button`
  width: 120px;
  border-radius: 44px;
  background-color: var(--main-color);
  color: var(--disabled-text-color);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
  cursor: pointer;
`;

export default function BasicFeed() {
  return (
    <FeedContainer>
      <LogoContainer>
        <LogoImg src={Logo} />
      </LogoContainer>
      <BasicTxt>유저를 검색해 팔로우 해보세요!</BasicTxt>
      <Link to='/search'>
        <SearchBigBtn>검색하기</SearchBigBtn>
      </Link>
    </FeedContainer>
  );
}
