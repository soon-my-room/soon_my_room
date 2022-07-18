import React from 'react';
import styled from 'styled-components';
import iconArrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import { Link } from 'react-router-dom';
import SearchBar from '../../search/SearchBar';

const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 19px 0 16px;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid var(--border-gray);
`;

const BackLink = styled(Link)`
  display: inline-block;
  width: 22px;
  height: 22px;
  background-image: url(${iconArrowLeft});
  background-repeat: no-repeat;
`;

export default function TopNavSearch() {
  return (
    <>
      <Container>
        <BackLink to='/feed' />
        <SearchBar />
      </Container>
    </>
  );
}
