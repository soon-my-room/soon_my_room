import React from 'react';
import styled, { css } from 'styled-components';

const BtnStyled = styled.button`
  width: 120px;
  line-height: 34px;
  display: block;
  background-color: var(--main-color);
  color: var(--disabled-text-color);
  border-radius: 30px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  ${(props) =>
    props.white &&
    css`
      background-color: white;
      color: var(--subtitle-text);
      border: 1px solid var(--border-gray);
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--main-disabled-color);
      cursor: not-allowed;
    `}

  ${(props) =>
    props.large &&
    css`
      width: 120px;
    `}
  ${(props) =>
    props.medium100 &&
    css`
      width: 100px;
    `}
  ${(props) => {
    props.medium120 &&
      css`
        line-height: 44px;
        border-radius: 44px;
      `;
  }}
  ${(props) =>
    props.small &&
    css`
      width: 90px;
      line-height: 32px;
      border-radius: 32px;
    `}
  ${(props) =>
    props.xSmall &&
    css`
      width: 56px;
      line-height: 28px;
      border-radius: 26px;
      font-weight: 400;
      font-size: 12px;
    `}
`;
export default function Btn({ onClick, children, ...props }) {
  return (
    <BtnStyled onClick={onClick} {...props}>
      {children}
    </BtnStyled>
  );
}
