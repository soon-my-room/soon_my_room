import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin-top: 54px;
  text-align: center;
  color: var(--main-title-color);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

const SubTxt = styled.p`
  margin-top: 12px;
  text-align: center;
  color: var(--subtitle-text);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;

export default function LoginTitle({ children, subTxt }) {
  return (
    <>
      <StyledTitle>{children}</StyledTitle>
      {subTxt && <SubTxt>나중에 언제든지 변경할 수 있습니다.</SubTxt>}
    </>
  );
}
//  프로필 설정 페이지에선 <LoginTitle subTxt> 로 컴포넌트 를 써줍니다.
