import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../../assets/icon/icon-search.svg';
import { Link } from 'react-router-dom';

const SearchBtnImg = styled.img`
  margin: 12px 16px 12px 0px;
  width: 24px;
  height: 24px;
`;

export default function TopNavHome() {
  return (
    <Link to='/search'>
      <SearchBtnImg src={searchIcon} />
    </Link>
  );
}
