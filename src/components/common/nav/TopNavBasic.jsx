import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconArrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import iconMore from '../../../assets/icon/icon-more-vertical.svg';

const Container = styled.nav`
  padding: 12px 12px 12px 16px;
  width: 100%;
  height: 48px;

  &::after {
    content: '';
    clear: both;
    display: block;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  width: 22px;
  height: 22px;
  background-image: url(${iconArrowLeft});
  background-repeat: no-repeat;
`;

const OpenModal = styled.button`
  float: right;
  width: 22px;
  height: 22px;
  background-image: url(${iconMore});
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  margin-left: 8px;
  display: inline-block;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
`;

export default function TopNavBasic({ title, onClick }) {
  return (
    <>
      <Container>
        <BackLink to='../' />
        {title && <Title>{title}</Title>}
        <OpenModal onClick={onClick} />
      </Container>
    </>
  );
}
