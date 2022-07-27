import React from 'react';
import styled from 'styled-components';
// import SearchButton from '../../feed/SearchButton';
import searchIcon from '../../../assets/icon/icon-search.svg';
import { Link } from 'react-router-dom';

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

const SearchBtnImg = styled.img`
  margin: 12px 16px 12px 0px;
  width: 24px;
  height: 24px;
`;

export default function TopNavHome() {
  return (
    <>
      <Title>금방내방 피드</Title>
      <Link to='/search'>
        <SearchBtnImg src={searchIcon} />
      </Link>
    </>
  );
}
