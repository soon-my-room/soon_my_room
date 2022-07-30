import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const ModalWrap = styled.div`
  margin: auto;
  position: absolute;
  width: 252px;
  height: 110px;
  inset: 0;
  z-index: 10;
  background: var(--bg-color);
  border-radius: 10px;
`;

const Message = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  line-height: 64px;
`;

const ButtonWrap = styled.div`
  position: relative;
  border-top: 1px solid var(--border-gray);

  button {
    width: 50%;
    height: 46px;
  }

  button:last-child {
    color: var(--main-text-color);
  }

  &::after {
    content: '';
    position: absolute;
    border-right: 1px solid var(--border-gray);
    margin: 0 auto;
    top: 0;
    bottom: 0;
    left: 50%;
    height: 44px;
  }
`;

export default function DeleteModal({
  title,
  onCloseClick,
  onDeleteClick,
  children,
}) {
  return (
    <ModalBackground>
      <ModalWrap>
        <Message>{title}</Message>
        <ButtonWrap>
          <button onClick={onCloseClick}>취소</button>
          <button onClick={onDeleteClick}>{children}</button>
        </ButtonWrap>
      </ModalWrap>
    </ModalBackground>
  );
}
