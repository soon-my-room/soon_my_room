import React from 'react';
import styled from 'styled-components';

const Title = styled.header`
  margin: 13px 0px 13px 16px;
  text-align: left;
  color: var(--main-title-color);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export default function Header() {
  return (
    <div>
      <Title>감귤마켓 피드</Title>
    </div>
  );
}
