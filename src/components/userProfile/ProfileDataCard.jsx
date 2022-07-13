import React from 'react';
import BasicProfile from '../profileImg/BasicProfile';
import Button from '../common/button/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileFollowWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  text-align: center;
`;

const FollowersLink = styled(Link)`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  & span:last-child {
    font-weight: 400;
    font-size: 10px;
    color: var(--subtitle-text);
  }
`;

const ProfileDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  margin: 16px 0 6px;
`;

const UserId = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: var(--subtitle-text);
`;

const UserIntro = styled(UserId)`
  font-size: 14px;
  margin: 16px 0 24px;
`;

const FollowingLink = styled(FollowersLink)`
  color: var(--subtitle-text);
`;

export default function ProfileDataCard(props) {
  const { followerCount, followingCount, username, intro, accountname } =
    props?.userData.profile;
  return (
    <>
      <ProfileFollowWrap>
        <FollowersLink to='/follower'>
          <span>{followerCount}</span>
          <span>followers</span>
        </FollowersLink>
        <BasicProfile />
        <FollowingLink to='/following'>
          <span>{followingCount}</span>
          <span>followings</span>
        </FollowingLink>
      </ProfileFollowWrap>

      <ProfileDescriptionWrap>
        <UserName>{accountname}</UserName>
        <UserId>{username}</UserId>
        <UserIntro>{intro}</UserIntro>
      </ProfileDescriptionWrap>
      <ButtonWrap>
        <Button as={Link} to='/프로필수정페이지' medium white>
          프로필 수정
        </Button>
        <Button as={Link} to='/상품등록페이지' medium100 white>
          상품 등록
        </Button>
      </ButtonWrap>
    </>
  );
}
