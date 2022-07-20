import React, { useEffect, useState } from 'react';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import ProfileContainer from '../components/userProfile/ProfileContainer';
import ProductListOnSales from '../components/product/ProductListOnSales';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import PostViewChangeNav from '../components/common/nav/PostViewChangeNav';
import styled from 'styled-components';
import PostList from '../components/post/PostList';

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

  return (
    isLoding && (
      <>
        <TopNavBasic viewMore />
        <ProfileContainer userId={props.match.params.userId} />
        <ProductListOnSalesWrap
          title='판매 중인 상품'
          products={productListOnSalesData}
          {...props}
        />
        <PostViewChangeNav />
        <PostListWrap userId={props.match.params.userId} />
        <BottomNavMenu type='profile' />
      </>
    )
  );
}
