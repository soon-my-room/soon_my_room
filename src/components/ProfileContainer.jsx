import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BasicProfile from '../components/profileImg/BasicProfile';
import Button from './common/button/Button';

const ProfileWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
  margin: 0 auto; ;
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

export default function ProfileContainer() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const { username, accountname, intro, image, token } = userInfo.user;

  return (
    <ProfileWrap>
      <h3 className='ir'>프로필</h3>
      <ProfileFollowWrap>
        <FollowersLink to='#none'>
          <span>2950</span>
          <span>followers</span>
        </FollowersLink>
        <BasicProfile />
        <FollowingLink to='#none'>
          <span>128</span>
          <span>followings</span>
        </FollowingLink>
      </ProfileFollowWrap>

      <ProfileDescriptionWrap>
        <UserName>{accountname}</UserName>
        <UserId>{username}</UserId>
        <UserIntro>{intro}</UserIntro>
      </ProfileDescriptionWrap>
      <ButtonWrap>
        <Button medium white>
          프로필 수정
        </Button>
        <Button medium100 white>
          상품 등록
        </Button>
      </ButtonWrap>
    </ProfileWrap>
  );
}
