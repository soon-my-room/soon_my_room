import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PostViewChangeNav from '../common/nav/PostViewChangeNav';
import PostItem from './PostItem';
import multiImage from '../../assets/icon/iccon-img-layers.svg';
import { axiosGetUserPost } from '../../apis/postApi';
import { API_URL } from '../../apis';

const PostItemUl = styled.ul`
  margin: 16px 16px 50px;
  display: flex;
  flex-direction: column;

  gap: 16px 0;
  ${(props) =>
    props.isPostView &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      place-items: center;
      gap: 8px;
      margin-bottom: 75px;
    `};
  img {
    aspect-ratio: 1;
  }
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

export default function PostList({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosGetUserPost(userId).then(({ post }) => {
      setPosts(post);
    });
  }, []);

  const [isPostView, setIsPostView] = useState(true);
  function changePostView() {
    setIsPostView((current) => !current);
  }

  function postAlbumViewCheck(posts) {
    return posts.map((post, index) => {
      if (!post.image || !post.image.includes(API_URL)) {
        return false;
      } else if (post.image.includes(',')) {
        return (
          <MultiImgLi key={index}>
            <Link
              to={{
                pathname: `/post/${post.id}`,
                state: {
                  post,
                },
              }}
            >
              <img src={post.image.split(',')[0]} alt='게시글상품사진' />
            </Link>
          </MultiImgLi>
        );
      } else {
        return (
          <li key={index}>
            <Link
              to={{
                pathname: `/post/${post.id}`,
                state: {
                  post,
                },
              }}
            >
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
              <PostItem key={post.id} post={post} setPosts={setPosts} />
            ))}
          </>
        ) : (
          <>{postAlbumViewCheck(posts)}</>
        )}
      </PostItemUl>
    </>
  );
}
