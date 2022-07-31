import React from 'react';
import styled, { css } from 'styled-components';
import { profileImageCheck } from '../../utils/defaultImage';

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
  return <ProfileImage {...props} src={profileImageCheck(props.src)} />;
}
