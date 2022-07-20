import React, { useState, useRef, useEffect } from 'react';
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

export default function SearchBar(props) {
  const [keyword, setKeyword] = useState('');
  const searchRef = useRef();

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  async function searchUser(token, keyword) {
    console.log('searchUserFunction');
    console.log('token', token);
    console.log('keyword', keyword);
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
    } catch (err) {
      console.error(err);
    }
  }

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (!userInfo) {
      console.log('로그인 정보가 없습니다.');
      props.history.push('/login');
      return;
    }
  }, []);
  return (
    <SearchInput
      type='text'
      placeholder='계정 검색'
      onChange={(e) => {
        const token = userInfo?.user?.token;
        const searchValue = searchRef.current.value;

        onChangeKeyword(e);
        searchUser(token, searchValue);
      }}
      ref={searchRef}
    />
  );
}
