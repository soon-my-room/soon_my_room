import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  background-color: #f2f2f2;
  color: #c4c4c4;
  border: none;
  border-radius: 32px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;

  padding-left: 16px;
`;

export default function SearchBar() {
  return (
    <>
      <SearchInput type='text' placeholder='계정 검색' />
    </>
  );
}
