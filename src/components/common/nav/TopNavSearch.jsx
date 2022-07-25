import React from 'react';
import styled from 'styled-components';
import iconArrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import { Link } from 'react-router-dom';

const BackLink = styled(Link)`
  display: inline-block;
  width: 22px;
  height: 22px;
  background-image: url(${iconArrowLeft});
  background-repeat: no-repeat;
`;

export default function TopNavSearch() {
  return <BackLink to='/feed' />;
}
