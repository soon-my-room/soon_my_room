import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileDataCard from './ProfileDataCard';
import { getUserInfo } from '../../utils/userInfo';
import { getAccessToken } from '../../apis/tokenStorage';
import { API_URL } from '../../apis';

const ProfileWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 26px;
`;

export default function ProfileContainer(props) {
  const [userData, setUserData] = useState();
  async function GetUserProfileData(userId, token) {
    const reqPath = `/profile/${userId}`;
    try {
      const res = await fetch(API_URL + reqPath, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return res.json();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const userInfo = getUserInfo();
    const token = getAccessToken();

    if (!userInfo) {
      console.log('로그인 정보가 없습니다.');
      props.history.push('/login');
    }

    const userId = userInfo.accountname;
    const UserProfileData = GetUserProfileData(userId, token);
    UserProfileData.then(setUserData);
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
