import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileDataCard from './ProfileDataCard';

const ProfileWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 26px;
`;

export default function ProfileContainer({ userId, ...props }) {
  const [userData, setUserData] = useState();
  async function GetUserProfileData(userId, token) {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = `/profile/${userId}`;
    try {
      const res = await fetch(url + reqPath, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
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
      console.log('로그인 정보가 없습니다.');
      props.history.push('/login');
      return;
    }

    const { token } = userInfo.user;
    const UserProfileData = GetUserProfileData(userId, token);
    UserProfileData.then((userData) => {
      setUserData(userData);
    });
  }, []);

  return (
    <>
      {userData && (
        <ProfileWrap>
          <ProfileDataCard userData={userData} />
        </ProfileWrap>
      )}
    </>
  );
}
