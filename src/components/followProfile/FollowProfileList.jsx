import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FollowProfileCard from './FollowProfileCard';

const ProfileList = styled.ul`
  padding: 24px 16px;

  li + li {
    margin-top: 16px;
  }
`;

export default function FollowProfileList({ searchFollow, ...props }) {
  const [data, setData] = useState([]);

  async function getFollow(accountname, token) {
    const url = 'https://mandarin.api.weniv.co.kr';

    // 테스트하기위한 reqPath
    // const reqPath = `/profile/kkingkkang/${searchFollow}`;

    const reqPath = `/profile/${accountname}/${searchFollow}`;

    try {
      const res = await fetch(`${url}${reqPath}`, {
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

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      console.log('로그인을 먼저 해주세요.');
      props.history.push('/login');
      return;
    }

    const { accountname, token } = userInfo.user;
    const FollowData = getFollow(accountname, token);
    FollowData.then((data) => {
      setData(data);
    });
  }, []);

  return (
    <ProfileList>
      {data.map((user) => (
        <FollowProfileCard
          key={user._id}
          userProfileImageSrc={user.image}
          userName={user.username}
          userIntro={user.intro}
          isfollow={user.isfollow}
        />
      ))}
    </ProfileList>
  );
}
