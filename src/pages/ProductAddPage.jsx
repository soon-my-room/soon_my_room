import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import TopUploadNav from '../components/common/nav/TopNavUpload';
import ProductForm from '../components/product/ProductForm';

const ProfileEditWrap = styled.div`
  width: 390px;
  margin: 0 auto;
`;

export default function ProductAddPage() {
  const [storable, setStorable] = useState(false);
  const [formInfo, setFormInfo] = useState({});

  const url = 'https://mandarin.api.weniv.co.kr';
  const saveProductImage = async () => {
    try {
      const path = '/image/uploadfile';
      const response = await fetch(`${url}${path}`, {
        method: 'POST',
        body: formInfo.imageFormData,
      });

      const saveImageResult = await response.json();
      return saveImageResult;
    } catch (err) {
      console.error(err);
    }
  };

  const saveProduct = async (formInfo, imagePath) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { user } = userInfo;
    const { token } = user;

    try {
      const path = '/product';
      const response = await fetch(`${url}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: {
            itemName: formInfo.productName,
            price: formInfo.productPrice,
            link: formInfo.productLink,
            itemImage: `${url}/${imagePath}`,
          },
        }),
      });

      debugger;
      const saveImageResult = await response.json();
      return saveImageResult;
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProduct = async () => {
    const getUserImageUrl = await saveProductImage();
    const { filename } = getUserImageUrl;
    const message = await saveProduct(formInfo, filename);
    console.log(message);
  };

  return (
    <ProfileEditWrap>
      <TopUploadNav
        buttonText='저장'
        buttonDisabled={!storable ? 'buttonDisabled' : null}
        onClick={handleAddProduct}
      />
      <ProductForm setStorable={setStorable} setFormInfo={setFormInfo} />
    </ProfileEditWrap>
  );
}
