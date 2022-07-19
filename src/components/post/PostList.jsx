import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostItemUl = styled.ul`
  margin: 16px 16px 30px;
  & > li + li {
    margin-top: 16px;
  }
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

  return (
    <PostItemUl className={props.className}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostItemUl>
  );
}
