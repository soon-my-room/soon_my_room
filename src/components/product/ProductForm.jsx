import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import InputBox from '../common/input/InputBox';
import InputImageUploadBox from '../common/input/InputImageUploadBox';
import Button from '../common/button/Button';
import { axiosImageSave } from '../../apis/imageApi';
import { axiosSaveProduct, axiosUpdateProduct } from '../../apis/productApi';

const Form = styled.form`
  width: 322px;
  margin: 0 auto;
`;

const SaveFormButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 16px;
`;

const InputImageUploadBoxWrap = styled.div`
  margin: 30px 0;
`;

export default function ProductForm(props) {
  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const linkRef = useRef();

  const isEditPage = useRef(false);

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

  async function handleSaveProductClick(e) {
    e.preventDefault();

    try {
      if (!isEditPage.current) {
        productInfo.imageSrc = await axiosImageSave(productInfo.imageFormData);
      }

      const productForm = {
        product: {
          id: productInfo.id,
          itemName: productInfo.productName,
          price: productInfo.productPrice,
          link: productInfo.productLink,
          itemImage: productInfo.imageSrc,
        },
      };

      const { product } = !isEditPage.current
        ? await axiosSaveProduct(productForm)
        : await axiosUpdateProduct(productForm);

      if (product) {
        props.history.push('/profile');
      } else {
        alert('에러가 발생했습니다. 관리자에게 문의해주세요.');
      }
    } catch (error) {
      console.error('상품 저장 에러', error);
    }
  }

  // 상품 수정페이지에서 사용하는 컴포넌트이면면 useEffect 실행
  useEffect(() => {
    if (props?.match?.path === '/product/edit') {
      isEditPage.current = true;
      const editData = props.location.state;
      /*
       * 상품 수정페이지는 상품데이터를 가지고와서 이미지, 상품명, 가격, 판매링크를
       * 보여주고 수정할 수 있게 해줘야하는데 상품 데이터를 가지고 오지 않고
       * 상품 수정페이지에 들어오면 보여줄 데이터가 없어서 에러가 발생하여 아래왁 같이 처리
       */
      if (!editData) {
        alert('수정할 데이터가 없습니다. 올바른 경로를 이용해주세요.');
        props.history.goBack();
        return;
      }

      const { id, name, price, imgSrc, link } = editData;

      nameRef.current.value = name;
      priceRef.current.value = price;
      linkRef.current.value = link;

      setProductInfo({
        id,
        imageSrc: imgSrc,
        productName: name,
        productPrice: price,
        productLink: link,
      });
    }
  }, []);

  return (
    <Form>
      <InputImageUploadBoxWrap>
        <InputImageUploadBox
          labelText='이미지 등록'
          type='file'
          id='imgUpload'
          setImageData={setImageData}
          useRef={imageRef}
          EditImageUrl={productInfo.imageSrc}
        />
      </InputImageUploadBoxWrap>
      <InputBox
        onChange={(e) => handleChange(e, 'productName')}
        labelText='상품명'
        placeholder='2~15자 이내여야 합니다.'
        useRef={nameRef}
      />
      <InputBox
        onChange={(e) => handleChange(e, 'productPrice')}
        type='number'
        labelText='가격'
        placeholder='숫자만 입력 가능합니다.'
        useRef={priceRef}
      />
      <InputBox
        onChange={(e) => handleChange(e, 'productLink')}
        labelText='판매 링크'
        placeholder='URL을 입력해 주세요.'
        useRef={linkRef}
      />
      <SaveFormButton
        small
        disabled={
          !(
            productInfo.imageSrc &&
            productInfo.productName &&
            productInfo.productPrice &&
            productInfo.productLink
          )
        }
        onClick={handleSaveProductClick}
      >
        저장
      </SaveFormButton>
    </Form>
  );
}
