import React from 'react';
import styled from 'styled-components';

const DisabledBtn = styled.button`
  display: block;
  text-align: center;
  margin: 14px auto 0;
  width: 322px;
  border-radius: 44px;
  background-color: var(--main-disabled-color);
  color: var(--disabled-text-color);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
  cursor: not-allowed;
`;

const AbledBtn = styled(DisabledBtn)`
  background-color: var(--main-color);
  cursor: pointer;
`;

export default function LongBtn({ children, onClick, disabled }) {
  return <>{disabled ? <DisabledBtn disabled> {children} </DisabledBtn> : <AbledBtn onClick={onClick}>{children}</AbledBtn>}</>;
}
