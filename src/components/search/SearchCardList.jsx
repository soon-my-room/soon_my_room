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

export default function SearchCardList({ keyword, searchData, ...props }) {
  return (
    !!searchData.length && (
      <Wrapper>
        {searchData.map((data) => (
          <SearchCard
            key={data.accountname}
            src={data.image}
            accountname={data.accountname}
            username={data.username}
            keyword={keyword}
          />
        ))}
      </Wrapper>
    )
  );
}
