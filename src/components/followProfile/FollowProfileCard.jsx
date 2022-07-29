import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../common/button/Button';

const ProfileCard = styled.li`
  display: flex;
  height: 50px;
`;

const ProfileImage = styled.img`
  margin-right: 12px;
  width: 50px;
  border: 0.5px solid var(--border-gray);
  border-radius: 25px;
`;

const UserInfoWrapper = styled.div`
  padding-top: 5px;
  flex-grow: 1;
`;

const UserName = styled.strong`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const UserIntro = styled.p`
  margin-top: 6px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--subtitle-text);
`;

const SmallButton = styled(Button)`
  height: 28px;
  margin-top: 11px;

  ${(props) =>
    props.isfollow &&
    css`
      background-color: var(--bg-color);
      border: 1px solid var(--border-gray);
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      color: var(--subtitle-text);
    `}
`;

export default function FollowProfileCard({
  accountname,
  userName,
  userIntro,
  userProfileImageSrc,
  isfollow,
}) {
  const history = useHistory();

  const handleClickMoveUserProfilePage = ({ target }) => {
    const { tagName } = target;
    const clickedMovePageTagName = ['IMG', 'STRONG', 'P'];

    if (clickedMovePageTagName.indexOf(tagName) > -1) {
      history.push(`/profile/${accountname}`);
    }
  };
  return (
    <ProfileCard onClick={handleClickMoveUserProfilePage}>
      <ProfileImage src={userProfileImageSrc} alt='유저 프로필 이미지' />
      <UserInfoWrapper>
        <UserName>{userName}</UserName>
        <UserIntro>{userIntro}</UserIntro>
      </UserInfoWrapper>
      <SmallButton xSmall isfollow={isfollow}>
        {isfollow ? '취소' : '팔로우'}
      </SmallButton>
    </ProfileCard>
  );
}
