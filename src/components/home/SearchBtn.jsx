import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/icon/icon-search.svg';
import { Link } from 'react-router-dom';

const SearchBtnContainer = styled.div`
  margin: 12px 16px 12px 0px;
`;

const SearchBtnImg = styled.img`
  width: 24px;
  height: 24px;
`;

export default function SearchBtn() {
  return (
    <div>
      <SearchBtnContainer>
        <Link to='/search'>
          <SearchBtnImg src={searchIcon} />
        </Link>
      </SearchBtnContainer>
    </div>
  );
}
