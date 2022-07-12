import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import ProfileDataCard from './ProfileDataCard';

const ProfileWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ProfileContainer(props) {
  const [userData, setUserData] = useState();

  async function GetUserProfileData(accountname, token) {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = `/profile/${accountname}`;
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

    const { accountname, token } = userInfo.user;
    const UserProfileData = GetUserProfileData(accountname, token);
    UserProfileData.then((userData) => {
      console.log('userData', userData);
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
