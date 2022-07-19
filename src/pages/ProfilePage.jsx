import React from 'react';
import TopNavBasic from '../components/common/nav/TopNavBasic';
import ProfileContainer from '../components/userProfile/ProfileContainer';
import ProductListOnSales from '../components/product/ProductListOnSales';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import PostViewChangeNav from '../components/common/nav/PostViewChangeNav';
import styled from 'styled-components';
import PostList from '../components/post/PostList';

const data = [
  {
    id: '62c8cdb982fdcc712f43740d',
    itemName: '상품7',
    price: 7000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:37:13.672Z',
    updatedAt: '2022-07-09T00:37:13.672Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd1382fdcc712f437406',
    itemName: '상품6',
    price: 6000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:27.568Z',
    updatedAt: '2022-07-09T00:34:27.568Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd1382fdcc712f437403',
    itemName: '상품6',
    price: 6000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:27.010Z',
    updatedAt: '2022-07-09T00:34:27.010Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd1282fdcc712f437400',
    itemName: '상품6',
    price: 6000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:26.356Z',
    updatedAt: '2022-07-09T00:34:26.356Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd0d82fdcc712f4373fd',
    itemName: '상품5',
    price: 5000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:21.222Z',
    updatedAt: '2022-07-09T00:34:21.222Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd0c82fdcc712f4373fa',
    itemName: '상품5',
    price: 5000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:20.504Z',
    updatedAt: '2022-07-09T00:34:20.504Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd0b82fdcc712f4373f7',
    itemName: '상품5',
    price: 5000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:19.889Z',
    updatedAt: '2022-07-09T00:34:19.889Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd0582fdcc712f4373f4',
    itemName: '상품4',
    price: 4000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:13.900Z',
    updatedAt: '2022-07-09T00:34:13.900Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd0582fdcc712f4373f1',
    itemName: '상품4',
    price: 4000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:13.109Z',
    updatedAt: '2022-07-09T00:34:13.109Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
  {
    id: '62c8cd0482fdcc712f4373ee',
    itemName: '상품4',
    price: 4000,
    link: 'https://www.naver.com',
    itemImage: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
    createdAt: '2022-07-09T00:34:12.452Z',
    updatedAt: '2022-07-09T00:34:12.452Z',
    author: {
      _id: '62c6d6aa82fdcc712f43668c',
      username: 'test2020',
      accountname: 'test202020',
      intro: 'test2020202020',
      image: 'https://mandarin.api.weniv.co.kr/1657196670849.png',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
];

const ProductListOnSalesWrap = styled(ProductListOnSales)`
  border-top: 6px solid #e0e0e0;
  border-bottom: 6px solid #e0e0e0;
`;

const PostListWrap = styled(PostList)`
  padding-bottom: 62px;
`;

export default function ProfilePage(props) {
  return (
    <>
      <TopNavBasic viewMore />
      <ProfileContainer />
      <ProductListOnSalesWrap title='판매 중인 상품' products={data} />
      <PostViewChangeNav />
      <PostListWrap userId={props.match.params.userId} />
      <BottomNavMenu type='profile' />
    </>
  );
}
