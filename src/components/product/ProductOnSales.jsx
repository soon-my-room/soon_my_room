import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  margin: 0 10px 6px 0;
  width: 140px;
  height: 90px;
  border: 0.5px solid var(--border-gray);
  border-radius: 8px;
`;

const ItemName = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`;

const ItemPrice = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #f26e22;
`;

export default function ProductOnSales({
  id,
  name,
  price,
  src,
  link,
  ...props
}) {
  const handleProductClick = () => {
    const productInfo = {
      id,
      name,
      price,
      imgSrc: src,
      link,
    };

    // 클릭(선택) 된 품목 정보 저장
    props.setSelectedProduct(productInfo);
    // 모달창 open
    props.setShowProductListOnSalesModal(true);
  };

  return (
    <>
      <ProductContainer onClick={handleProductClick}>
        <ItemImage src={src} />
        <ItemName>{name}</ItemName>
        <ItemPrice>{price}원</ItemPrice>
      </ProductContainer>
    </>
  );
}
