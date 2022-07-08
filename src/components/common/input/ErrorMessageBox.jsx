import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  margin: -10px 0 16px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: flex-end;
  color: var(--warning-color);
`;

export default function ErrorMessageBox({ children }) {
  return <ErrorMessage>{children}</ErrorMessage>;
}
