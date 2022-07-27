import React from 'react';
import splashLogo from '../../assets/full-logo-W-new-01.svg';
import styled, { keyframes } from 'styled-components';

const ImageFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const SplashImg = styled.img`
  height: 225px;
  margin-top: -252px;
  margin-left: -0.5px;
`;

const FlexCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: conter;
  align-items: center;
`;

const AniSplash = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  animation: 0.7s ease-in-out ${ImageFadeOut} forwards;
  animation-delay: 0.7s;
  z-index: 10;
`;

export default function Splash() {
  return (
    <AniSplash>
      <FlexCenter>
        <SplashImg src={splashLogo} />
      </FlexCenter>
    </AniSplash>
  );
}
