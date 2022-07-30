import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import ProfileContainer from '../components/userProfile/ProfileContainer';
import ProductListOnSales from '../components/product/ProductListOnSales';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import styled from 'styled-components';
import PostList from '../components/post/PostList';
import ModalContainer from '../components/common/modal/ModalContainer';
import ModalList from '../components/common/modal/ModalList';
import DeleteModal from '../components/common/modal/DeleteModal';
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
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [showProductListOnSalesModal, setShowProductListOnSalesModal] =
    useState(false);
  const [productListOnSalesData, setProductListOnSalesData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const profileModalRef = useRef();
  const modalRef = useRef();

  const history = useHistory();

  const handleRemoveProduct = async () => {
    try {
      const { accountname } = getUserInfo();
      const userId = accountname; // 서버에서 보내주는 accountname을 userId로 쓰고있어서 재할당했습니다.

      const { data } = await axiosRemoveProduct(selectedProduct.id);
      if (data.status === '200') {
        const { data } = await axiosGetProductListOnSales(userId);

        setProductListOnSalesData(data.product);
        setShowProductListOnSalesModal(false);
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
    let requestUrl = 'http://';
    if (!selectedProduct.link.includes('http')) {
      requestUrl += selectedProduct.link;
    }

    window.open(requestUrl, '_blank', 'noopener,noreferrer');
  }

  function hendleOpenModal(e) {
    setIsProfileModal(!isProfileModal);
    console.log(e.target);
    if (e.target === profileModalRef.current) {
      setIsProfileModal(true);
    }
  }

  function userTokenDelete() {
    localStorage.clear();
    setIsLogoutModal(false);
    window.location.replace('/');
  }

  function onCloseClick() {
    setIsLogoutModal(false);
  }

  function onLoginout(e) {
    e.stopPropagation();
    setIsProfileModal(false);
    setIsLogoutModal(!isLogoutModal);
  }

  return (
    isLoding && (
      <>
        <TopNavBasic viewMore {...props} onClick={hendleOpenModal} />
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
            <ModalList onClick={handleRemoveProduct}>삭제</ModalList>
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
        {isProfileModal && (
          <ModalContainer useRef={profileModalRef} onClick={hendleOpenModal}>
            <ModalList
              children='설정 및 개인정보'
              onClick={() => history.push('/profile')}
            />
            <ModalList children='로그아웃' onClick={onLoginout} />
          </ModalContainer>
        )}
        {isLogoutModal && (
          <DeleteModal
            title='로그아웃하시겠어요?'
            children='로그아웃'
            onCloseClick={onCloseClick}
            onDeleteClick={userTokenDelete}
          />
        )}
      </>
    )
  );
}
