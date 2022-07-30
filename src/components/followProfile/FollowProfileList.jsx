import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { axiosGetFollow } from '../../apis/followApi';
import FollowProfileCard from './FollowProfileCard';

const ProfileList = styled.ul`
  padding: 24px 16px;

  li + li {
    margin-top: 16px;
  }
`;

export default function FollowProfileList({ searchFollow, location }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const [, userIdParam] = location.search.split('userId=');

    const FollowData = axiosGetFollow(userIdParam, searchFollow);
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
          accountname={user.accountname}
          userName={user.username}
          userIntro={user.intro}
          isfollow={user.isfollow}
        />
      ))}
    </ProfileList>
  );
}
