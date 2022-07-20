import React from 'react';
import basicProfile from '../../assets/basic-profile.png';
import styled, { css } from 'styled-components';

const handleSizeType = (size) => {
  switch (size) {
    case 'tiny':
      return css`
        width: 36px;
        height: 36px;
      `;
    case 'small':
      return css`
        width: 42px;
        height: 42px;
      `;
    case 'medium':
      return css`
        width: 50px;
        height: 50px;
      `;
    default:
      return css`
        width: 110px;
        height: 110px;
      `;
  }
};

const ProfileImage = styled.img`
  border-radius: 50%;

  ${(props) => handleSizeType(props.size)}
`;

export default function UserProfile(props) {
  //프로필 이미지 사이즈 별로 사용시 UserProfile의 props.size에 해당 값을 전달하여 사용
<<<<<<< HEAD
  if (props.size === 'tiny') {
    return <TinyProfileImage src={basicProfile} />;
  } else if (props.size === 'small') {
    return <SmallProfileImage src={basicProfile} />;
  } else if (props.size === 'medium') {
    return <MediumProfileImage src={basicProfile} />;
  } else {
    return <ProfileImage src={basicProfile} />;
  }
=======
  return <ProfileImage {...props} src={props.src || basicProfile} />;
>>>>>>> d84f41cb7c2bf1e0051d474f1f44925c613da9af
}
