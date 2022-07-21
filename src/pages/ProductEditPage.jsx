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
      const path = `/product/${formInfo.id}`;
      const response = await fetch(`${url}${path}`, {
        method: 'PUT',
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

      const saveImageResult = await response.json();
      return saveImageResult;
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProduct = async () => {
    let message;

    if (!formInfo.imageSrc.includes('https://mandarin.api.weniv.co.kr')) {
      const getUserImageUrl = await saveProductImage();
      const { filename } = getUserImageUrl;
      message = await saveProduct(formInfo, filename);
    } else {
      const [, filename] = formInfo.imageSrc.split(
        'https://mandarin.api.weniv.co.kr/',
      );
      message = await saveProduct(formInfo, filename);
    }

    if (message?.product) {
      props.history.push('/profile');
    } else {
      alert('에러가 발생했습니다. 관리자에게 문의해주세요.');
    }
  };

  return (
    <ProfileEditWrap>
      <TopUploadNav
        buttonText='저장'
        buttonDisabled={!storable ? 'buttonDisabled' : null}
        {...props}
        onClick={handleAddProduct}
      />
      <ProductForm
        setStorable={setStorable}
        setFormInfo={setFormInfo}
        {...props}
      />
    </ProfileEditWrap>
  );
}
