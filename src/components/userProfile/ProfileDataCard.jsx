import React from 'react';
import UserProfileImg from '../profileImg/UserProfileImg';
import Button from '../common/button/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileFollowWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
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
  text-align: center;
`;

const FollowText = styled.span`
  font-weight: 400;
  font-size: 10px;
  margin-top: 6px;
  color: var(--subtitle-text);
`;

const Count = styled.span`
  font-weight: 700;
  font-size: 18px;
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
          <Count>{followerCount}</Count>
          <FollowText>followers</FollowText>
        </FollowersLink>
        <UserProfileImg />
        <FollowingLink to='/ollowing'>
          <Count>{followingCount}</Count>
          <FollowText>followings</FollowText>
        </FollowingLink>
      </ProfileFollowWrap>

      <ProfileDescriptionWrap>
        <UserName>{accountname}</UserName>
        <UserId>{username}</UserId>
        <UserIntro>{intro}</UserIntro>
      </ProfileDescriptionWrap>
      <ButtonWrap>
        <Button as={Link} to='/프로필수정페이지' medium='true' white='true'>
          프로필 수정
        </Button>
        <Button as={Link} to='/상품등록페이지' medium100='true' white='true'>
          상품 등록
        </Button>
      </ButtonWrap>
    </>
  );
}
