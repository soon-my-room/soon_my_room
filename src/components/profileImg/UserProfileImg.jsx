import React from 'react';
import basicProfile from '../../assets/basic-profile.png';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

const MediumProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SmallProfileImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const TinyProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export default function UserProfile(props) {
  //프로필 이미지 사이즈 별로 사용시 UserProfile의 props.size에 해당 값을 전달하여 사용
  if (props.size === 'tiny') {
    return <TinyProfileImage src={props.src || basicProfile} />;
  } else if (props.size === 'small') {
    return <SmallProfileImage src={props.src || basicProfile} />;
  } else if (props.size === 'medium') {
    return <MediumProfileImage src={props.src || basicProfile} />;
  } else {
    return <ProfileImage src={props.src || basicProfile} />;
  }
}
