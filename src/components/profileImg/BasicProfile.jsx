import React from 'react';
import basicProfile from '../../assets/basic-profile.png';
import styled from 'styled-components';

const ProfileImageContainer = styled.div`
  width: 110px;
  height: 110px;
  margin: 30px auto;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
`;

export default function BasicProfile() {
  return (
    <>
      <ProfileImageContainer>
        <ProfileImage src={basicProfile} />
      </ProfileImageContainer>
    </>
  );
}
