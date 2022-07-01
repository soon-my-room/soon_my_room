import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DisabledBtn = styled(Link)`
  display: block;
  position: relative;
  text-align: center;
  top: 266px;
  margin: 0 auto;
  width: 322px;
  border-radius: 44px;
  background-color: var(--main-disabled-color);
  color: var(--disabled-text-color);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
`;

const AbledBtn = styled(DisabledBtn)`
  background-color: var(--main-color);
`;

export default function LongBtn({ children, nextPage }) {
  if (nextPage === 'join') {
    return <AbledBtn to='/join'>{children}</AbledBtn>;
  } else if (nextPage === 'profileSet') {
    return <AbledBtn to='/profileSet'>{children}</AbledBtn>;
  } else if (nextPage === 'feed') {
    return <AbledBtn to='/feed'>{children}</AbledBtn>;
  } else {
    return <DisabledBtn>{children}</DisabledBtn>;
  }
}
//  활성화된 버튼엔 <LongBtn nextPage='경로이름'> 로 컴포넌트 를 써줍니다.
