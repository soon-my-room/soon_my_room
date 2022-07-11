import React from 'react';
import styled from 'styled-components';
import ProductOnSales from './ProductOnSales';

const Wrapper = styled.section`
  padding: 20px 16px 0;
  height: 200px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const ProductList = styled.ul`
  display: flex;
`;

export default function ProductListOnSales({ title, products }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ProductList>
        {products.map((product) => (
          <ProductOnSales
            key={product.id}
            name={product.itemName}
            price={product.price}
            src={product.itemImage}
          ></ProductOnSales>
        ))}
      </ProductList>
    </Wrapper>
  );
}
