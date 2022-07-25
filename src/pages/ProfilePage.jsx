import React, { useEffect, useRef, useState } from 'react';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import ProfileContainer from '../components/userProfile/ProfileContainer';
import ProductListOnSales from '../components/product/ProductListOnSales';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import styled from 'styled-components';
import PostList from '../components/post/PostList';
import ModalContainer from '../components/common/modal/ModalContainer';
import ModalList from '../components/common/modal/ModalList';
import { getUserInfo } from '../utils/userInfo';
import { axiosRemoveProduct } from '../apis/productApi';

const ProductListOnSalesWrap = styled(ProductListOnSales)`
  border-top: 6px solid #e0e0e0;
  border-bottom: 6px solid #e0e0e0;
`;

const PostListWrap = styled(PostList)`
  padding-bottom: 62px;
`;

const URL = 'https://mandarin.api.weniv.co.kr';

async function getProductListOnSales(userId, token) {
  const reqPath = `/product/${userId}`;

  try {
    const res = await fetch(`${URL}${reqPath}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    return resData;
  } catch (err) {
    console.error(err);
  }
}

export default function ProfilePage(props) {
  const [isLoding, setIsLoding] = useState(false);
  const [productListOnSalesData, setProductListOnSalesData] = useState([]);
  const [showProductListOnSalesModal, setShowProductListOnSalesModal] =
    useState(false);

  const [selectedProduct, setSelectedProduct] = useState({});

  const modalRef = useRef();

  const handleRemoveProduct = async () => {
    try {
      const { accountname, token } = getUserInfo();
      const userId = accountname; // 서버에서 보내주는 accountname을 userId로 쓰고있어서 재할당했습니다.

      const { data } = await axiosRemoveProduct(selectedProduct.id);
      if (data.status === '200') {
        getProductListOnSales(userId, token).then((data) => {
          setProductListOnSalesData(data.product);
          setShowProductListOnSalesModal(false);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo) {
      console.log('로그인 정보가 없습니다.');
      props.history.push('/login');
      return;
    }

    const { accountname } = userInfo.user;
    if (props.match.path === '/profile') {
      props.match.params = { ...props.match.params, userId: accountname };
    }

    getProductListOnSales(accountname, userInfo.user.token).then((data) => {
      setProductListOnSalesData(data.product);
    });

    setIsLoding(true);
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

  return (
    isLoding && (
      <>
        <TopNavBasic viewMore />
        <ProfileContainer userId={props.match.params.userId} />
        <ProductListOnSalesWrap
          title='판매 중인 상품'
          products={productListOnSalesData}
          setShowProductListOnSalesModal={setShowProductListOnSalesModal}
          setSelectedProduct={setSelectedProduct}
          {...props}
        />
        <PostListWrap userId={props.match.params.userId} />
        <BottomNavMenu type='profile' />
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
            <ModalList
              onClick={() => {
                window.open(
                  selectedProduct.link,
                  '_blank',
                  'noopener,noreferrer',
                );
              }}
            >
              웹사이트에서 상품 보기
            </ModalList>
          </ModalContainer>
        )}
      </>
    )
  );
}
