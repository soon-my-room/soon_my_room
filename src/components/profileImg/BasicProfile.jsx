import React from 'react';
import basicProfile from '../../assets/basic-profile.png';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImageContainer = styled.div`
  width: 110px;
  height: 110px;
  margin-bottom: 30px;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
`;

export default function BasicProfile() {
  return (
    <>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage src={basicProfile} />
        </ProfileImageContainer>
      </ProfileContainer>
    </>
  );
}
