import React, { useEffect, useRef, useState } from 'react';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import ProfileContainer from '../components/userProfile/ProfileContainer';
import ProductListOnSales from '../components/product/ProductListOnSales';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import styled from 'styled-components';
import PostList from '../components/post/PostList';
import ModalContainer from '../components/common/modal/ModalContainer';
import AlertModal from '../components/common/modal/AlertModal';
import ModalList from '../components/common/modal/ModalList';
import { getUserInfo } from '../utils/userInfo';
import {
  axiosGetProductListOnSales,
  axiosRemoveProduct,
} from '../apis/productApi';

const ProductListOnSalesWrap = styled(ProductListOnSales)`
  border-top: 6px solid #e0e0e0;
  border-bottom: 6px solid #e0e0e0;
`;

const PostListWrap = styled(PostList)`
  padding-bottom: 62px;
`;

export default function ProfilePage(props) {
  const [isLoding, setIsLoding] = useState(false);
  const [showProductListOnSalesModal, setShowProductListOnSalesModal] =
    useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isModalAlert, setIsModalAlert] = useState(false);
  const [productListOnSalesData, setProductListOnSalesData] = useState([]);
  const modalRef = useRef();

  const handleRemoveProduct = async () => {
    try {
      const { data } = await axiosRemoveProduct(selectedProduct.id);
      if (data.status === '200') {
        setIsModalAlert(false);
        setShowProductListOnSalesModal(false);
        setProductListOnSalesData((prev) =>
          prev.filter((product) => product.id !== selectedProduct.id),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userInfo = getUserInfo();

    if (props.match.path === '/profile') {
      props.match.params = {
        ...props.match.params,
        userId: userInfo.accountname,
      };
    }
  }, []);

  useEffect(() => {
    const { userId } = props.match.params;
    axiosGetProductListOnSales(userId).then(({ data }) => {
      setProductListOnSalesData(data.product);
      setIsLoding(true);
    });
  }, []);

  useEffect(() => {
    const checkClickModalOutside = (event) => {
      // 모달이 켜져있고 클릭한곳이 모달을 포함하고있지 않으면 모달 끄기
      if (
        showProductListOnSalesModal &&
        !modalRef.current.contains(event.target)
      ) {
        setShowProductListOnSalesModal(false);
      }
    };

    document.addEventListener('mousedown', checkClickModalOutside);

    return () => {
      document.removeEventListener('mousedown', checkClickModalOutside);
    };
  }, [showProductListOnSalesModal]);

  function handleViewWebsiteProductClick() {
    const productLink = !selectedProduct.link.includes('http')
      ? `http://${selectedProduct.link}`
      : selectedProduct.link;

    window.open(productLink, '_blank', 'noopener,noreferrer');
  }

  function handleCloseClick() {
    setIsModalAlert(false);
  }

  return (
    isLoding && (
      <>
        <TopNavBasic viewMore {...props} />
        <ProfileContainer userId={props.match.params.userId} />
        <ProductListOnSalesWrap
          title='판매 중인 상품'
          products={productListOnSalesData}
          setShowProductListOnSalesModal={setShowProductListOnSalesModal}
          setSelectedProduct={setSelectedProduct}
          {...props}
        />
        <PostListWrap userId={props.match.params.userId} />
        <BottomNavMenu type='profile' {...props} />
        {showProductListOnSalesModal && (
          <ModalContainer useRef={modalRef}>
            <ModalList onClick={() => setIsModalAlert(true)}>삭제</ModalList>
            <ModalList
              onClick={() => {
                props.history.push('/product/edit', selectedProduct);
              }}
            >
              수정
            </ModalList>
            <ModalList onClick={handleViewWebsiteProductClick}>
              웹사이트에서 상품 보기
            </ModalList>
          </ModalContainer>
        )}
        {isModalAlert && (
          <AlertModal
            title='상품'
            submitText='삭제'
            onCloseClick={handleCloseClick}
            onSubmitClick={handleRemoveProduct}
          />
        )}
      </>
    )
  );
}
