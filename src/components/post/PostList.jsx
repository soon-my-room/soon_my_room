import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PostViewChangeNav from '../common/nav/PostViewChangeNav';
import PostItem from './PostItem';

const PostItemUl = styled.ul`
  margin: 16px 16px 30px;
  & > li + li {
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

export default function PostList({ userId, ...props }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function userPostGet() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo')).user;
      const url = 'https://mandarin.api.weniv.co.kr';
      const reqPath = `/post/${userId}/userpost`;

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
    userPostGet();
  }, []);
  const [isPostView, setIsPostView] = useState(true);
  function ChangePostView() {
    setIsPostView((current) => !current);
  }

  return (
    <>
      <PostViewChangeNav
        onClick={ChangePostView}
        disabled={isPostView}
        isPostListView={isPostView}
        isPostAlbumView={!isPostView}
      />
      <PostItemUl className={props.className} isPostView={!isPostView}>
        {isPostView ? (
          <>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </>
        ) : (
          <>
            {posts.map((post) => (
              <li key={post.id}>
                <img src={post.image} alt='게시글상품사진' />
              </li>
            ))}
          </>
        )}
      </PostItemUl>
    </>
  );
}
