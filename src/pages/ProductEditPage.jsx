import React, { useState } from 'react';
import styled from 'styled-components';
import TopUploadNav from '../components/common/nav/TopNavUpload';
import ProductForm from '../components/product/ProductForm';

const ProfileEditWrap = styled.div`
  width: 390px;
  margin: 0 auto;
`;

export default function ProductEditPage(props) {
  const [storable, setStorable] = useState(true);
  const [formInfo, setFormInfo] = useState({});

  return (
    <ProfileEditWrap>
      <TopUploadNav
        buttonText='저장'
        buttonDisabled={!storable ? 'buttonDisabled' : null}
        {...props}
      />
      <ProductForm
        setStorable={setStorable}
        setFormInfo={setFormInfo}
        {...props}
      />
    </ProfileEditWrap>
  );
}
