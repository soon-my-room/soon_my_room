import React, { useState, useRef } from 'react';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import TopNavSearch from '../components/common/nav/TopNavSearch';
import SearchCardList from '../components/search/SearchCardList';
import styled from 'styled-components';
import { axiosGetSearchResult } from '../apis/searchApi';
import { useDebounce } from '../hooks/useDebounce';
import { useEffect } from 'react';

const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 19px 0 16px;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid var(--border-gray);
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: #f2f2f2;
  color: var(--main-title-color);
  border: none;
  border-radius: 32px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  padding-left: 16px;
`;

const DEBOUNCE_DELAY = 500;

export default function SearchPage(props) {
  const [keyword, setKeyword] = useState('');
  const [searchData, setSearchData] = useState([]);
  const debounceValue = useDebounce(keyword, DEBOUNCE_DELAY);

  const handleChangeSearchInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
      setSearchData([]);
      return;
    }

    setKeyword(searchValue);
  };

  useEffect(() => {
    if (debounceValue) {
      axiosGetSearchResult(debounceValue).then((result) => {
        setSearchData(result);
        setKeyword(debounceValue);
      });
    }
  }, [debounceValue]);

  return (
    <>
      <Container>
        <TopNavSearch />
        <SearchInput
          type='text'
          placeholder='계정 검색'
          onChange={handleChangeSearchInput}
        />
      </Container>
      <SearchCardList keyword={keyword} searchData={searchData} />
      <BottomNavMenu type='feed' />
    </>
  );
}
