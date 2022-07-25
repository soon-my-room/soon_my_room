import React from 'react';
import styled from 'styled-components';
import iconArrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import Button from '../button/Button';

const Container = styled.nav`
  padding: 8px 16px;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid var(--border-gray);

  &::after {
    content: '';
    clear: both;
    display: block;
  }
`;

const BackButton = styled.button`
  margin-top: 5px;
  width: 22px;
  height: 22px;
  background-image: url(${iconArrowLeft});
  background-repeat: no-repeat;
`;

const SaveButton = styled(Button)`
  float: right;
`;

export default function TopUploadNav({
  onClick,
  buttonText,
  buttonDisabled,
  history,
}) {
  return (
    <>
      <Container>
        <BackButton type='button' onClick={() => history.goBack()} />
        <SaveButton
          type='button'
          small
          disabled={buttonDisabled}
          onClick={onClick}
        >
          {buttonText}
        </SaveButton>
      </Container>
    </>
  );
}
