import React from 'react';
import styled from 'styled-components';

const ModalLi = styled.li`
  padding: 0 26px;
  margin: 0 10px;
  &:hover {
    background-color: var(--border-gray);
    border-radius: 15px;
  }
`;
const ModalBtn = styled.button`
  width: 100%;
  text-align: left;
  display: block;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 46px;
`;

export default function ModalList({ children, onClick }) {
  return (
    <ModalLi>
      <ModalBtn onClick={onClick}>{children}</ModalBtn>
    </ModalLi>
  );
}
