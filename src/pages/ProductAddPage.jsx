import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { axiosImageSave } from '../apis/imageApi';
import { axiosSaveProduct } from '../apis/productApi';
import TopUploadNav from '../components/common/nav/TopNavUpload';
import ProductForm from '../components/product/ProductForm';

const ProfileEditWrap = styled.div`
  width: 390px;
  margin: 0 auto;
`;

export default function ProductAddPage(props) {
  const [storable, setStorable] = useState(false);
  const [formInfo, setFormInfo] = useState({});

  const handleAddProduct = async () => {
    try {
      const productImageUrl = await axiosImageSave(formInfo.imageFormData);
      const productInfo = {
        product: {
          itemName: formInfo.productName,
          price: formInfo.productPrice,
          link: formInfo.productLink,
          itemImage: productImageUrl,
        },
      };

      const { product } = await axiosSaveProduct(productInfo);
      if (product) {
        props.history.push('/profile');
      } else {
        alert('에러가 발생했습니다. 관리자에게 문의해주세요.');
      }
    } catch (error) {
      console.error('handleAddProduct error', error);
    }
  };

  return (
    <ProfileEditWrap>
      <TopUploadNav
        buttonText='저장'
        buttonDisabled={!storable ? true : null}
        onClick={handleAddProduct}
        {...props}
      />
      <ProductForm setStorable={setStorable} setFormInfo={setFormInfo} />
    </ProfileEditWrap>
  );
}
