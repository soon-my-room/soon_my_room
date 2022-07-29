import React from 'react';
import styled from 'styled-components';
import TopUploadNav from '../components/common/nav/TopNavUpload';
import ProductForm from '../components/product/ProductForm';

const ProfileEditWrap = styled.div`
  width: 390px;
  margin: 0 auto;
`;

export default function ProductPage(props) {
  return (
    <ProfileEditWrap>
      <TopUploadNav {...props} />
      <ProductForm {...props} />
    </ProfileEditWrap>
  );
}
