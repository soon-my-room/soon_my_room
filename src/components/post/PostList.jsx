import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PostViewChangeNav from '../common/nav/PostViewChangeNav';
import PostItem from './PostItem';
import multiImage from '../../assets/icon/iccon-img-layers.svg';

const PostItemUl = styled.ul`
  margin: 0 16px 80px;
  & > li {
    margin-top: 16px;
  }
  ${(props) =>
    props.isPostView &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    `}
`;

const MultiImgLi = styled.li`
  position: relative;
  &::before {
    content: url(${multiImage});
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: 6px;
  }
`;

export default function PostList({ userId, ...props }) {
  const [posts, setPosts] = useState([]);

  async function userPostGet() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')).user;
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = `/post/${userId}/userpost/?limit=${parseInt(20)}`;
    try {
      const res = await fetch(url + reqPath, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          'Content-type': 'application/json',
        },
      });
      const postData = await res.json();
      setPosts(postData.post);
    } catch (err) {
      console.error('error');
    }
  }

  useEffect(() => {
    userPostGet();
  }, []);

  const [isPostView, setIsPostView] = useState(true);
  function changePostView() {
    setIsPostView((current) => !current);
  }

  function postAlbumViewCheck(posts) {
    const URL = 'https://mandarin.api.weniv.co.kr';

    return posts.map((post, index) => {
      if (!post.image || !post.image.includes(URL)) {
        return false;
      } else if (post.image.includes(',')) {
        return (
          <MultiImgLi key={index}>
            <Link to={`/post/${post.id}`}>
              <img src={post.image.split(',')[0]} alt='게시글상품사진' />
            </Link>
          </MultiImgLi>
        );
      } else {
        return (
          <li key={index}>
            <Link to={`/post/${post.id}`}>
              <img src={post.image} alt='게시글상품사진' />
            </Link>
          </li>
        );
      }
    });
  }

  return (
    <>
      <PostViewChangeNav
        onClick={changePostView}
        disabled={isPostView}
        isPostListView={isPostView}
        isPostAlbumView={!isPostView}
      />
      <PostItemUl isPostView={!isPostView}>
        {isPostView ? (
          <>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} userPostGet={userPostGet} />
            ))}
          </>
        ) : (
          <>{postAlbumViewCheck(posts)}</>
        )}
      </PostItemUl>
    </>
  );
}
