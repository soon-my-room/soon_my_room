import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import InputBox from '../common/input/InputBox';
import InputImageUploadBox from '../common/input/InputImageUploadBox';

const Form = styled.form`
  width: 322px;
  margin: 0 auto;
`;

const InputImageUploadBoxWrap = styled.div`
  margin: 30px 0;
`;

export default function ProductForm(props) {
  const imageRef = useRef();

  const [productInfo, setProductInfo] = useState({
    imageSrc: '',
    productName: '',
    productPrice: 0,
    productLink: '',
  });

  const handleChange = ({ target: { valueAsNumber, value } }, changeKey) => {
    setProductInfo((prev) => {
      return {
        ...prev,
        [changeKey]: valueAsNumber || value,
      };
    });
  };

  const setImageData = (imageSrc) => {
    const formData = new FormData();
    formData.append('image', imageRef.current.files[0]);

    setProductInfo((prev) => {
      return {
        ...prev,
        imageSrc,
        imageFormData: formData,
      };
    });
  };

  useEffect(() => {
    if (
      productInfo.imageSrc &&
      productInfo.productName &&
      productInfo.productPrice &&
      productInfo.productLink
    ) {
      props.setStorable(true);
      props.setFormInfo(productInfo);
    } else {
      props.setStorable(false);
    }
  }, [productInfo]);

  return (
    <Form>
      <InputImageUploadBoxWrap>
        <InputImageUploadBox
          labelText='이미지 등록'
          type='file'
          id='imgUpload'
          setImageData={setImageData}
          useRef={imageRef}
        />
      </InputImageUploadBoxWrap>
      <InputBox
        onChange={(e) => handleChange(e, 'productName')}
        labelText='상품명'
        placeholder='2~15자 이내여야 합니다.'
      />
      <InputBox
        onChange={(e) => handleChange(e, 'productPrice')}
        type='number'
        labelText='가격'
        placeholder='숫자만 입력 가능합니다.'
      />
      <InputBox
        onChange={(e) => handleChange(e, 'productLink')}
        labelText='판매 링크'
        placeholder='URL을 입력해 주세요.'
      />
    </Form>
  );
}
