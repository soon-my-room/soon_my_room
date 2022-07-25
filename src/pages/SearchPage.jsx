import React, { useState, useRef, useEffect } from 'react';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import TopNavSearch from '../components/common/nav/TopNavSearch';
import SearchCardList from '../components/search/SearchCardList';
import styled from 'styled-components';

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

export default function SearchPage(props) {
  const [keyword, setKeyword] = useState('');
  const searchRef = useRef();
  const [searchData, setSearchData] = useState([]);

  const onChangeKeyword = (e) => {
    setKeyword(e.value);
  };

  async function searchUser(token, keyword) {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = `/user/searchuser/?keyword=${keyword}`;
    try {
      const res = await fetch(url + reqPath, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const resJson = await res.json();
      console.log(resJson);
      setSearchData(resJson);
    } catch (err) {
      console.error(err);
    }
  }
  console.log(searchData);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = userInfo?.user?.token;

  useEffect(() => {
    if (!userInfo) {
      console.log('로그인 정보가 없습니다.');
      props.history.push('/login');
      return;
    }
  }, []);
  return (
    <>
      <Container>
        <TopNavSearch />
        <SearchInput
          type='text'
          placeholder='계정 검색'
          onChange={(e) => {
            const searchValue = searchRef.current.value;
            onChangeKeyword(e.target.value);
            searchUser(token, searchValue);
          }}
          ref={searchRef}
        />
      </Container>
      <SearchCardList searchData={searchData} />
      <BottomNavMenu type='feed' />
    </>
  );
}
