import React from 'react';
import styled from 'styled-components';

import SearchCard from './SearchCard';

const Wrapper = styled.ul`
  margin: 20px 0 75px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export default function SearchCardList({ searchData, ...props }) {
  if (!searchData.length) {
    console.log('SearchCard Return');
    return;
  }
  return (
    <>
      <Wrapper>
        {searchData.map((Data) => (
          <SearchCard
            key={Data.accountname}
            src={Data.image}
            accountname={Data.accountname}
            username={Data.username}
          />
        ))}
      </Wrapper>
    </>
  );
}
