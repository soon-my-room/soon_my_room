import React from 'react';
import styled from 'styled-components';

const ModalStyled = styled.ul`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 36px 0 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

const LineDiv = styled.div`
  width: 50px;
  height: 4px;
  margin: 0 auto 16px;
  background: var(--border-gray);
  border-radius: 5px;
`;

export default function ModalContainer({ children }) {
  return (
    <ModalStyled>
      <LineDiv />
      {children}
    </ModalStyled>
  );
}
