import React, { useEffect } from 'react';
import styled from 'styled-components';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import FollowProfileList from '../components/followProfile/FollowProfileList';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 390px;
  border: 1px solid var(--border-gray);
`;

export default function FollowPage({ title, ...props }) {
  return (
    <Wrapper>
      <TopNavBasic title={title} />
      <FollowProfileList
        searchFollow={title.toLowerCase().slice(0, -1)}
        {...props}
      />
    </Wrapper>
  );
}
