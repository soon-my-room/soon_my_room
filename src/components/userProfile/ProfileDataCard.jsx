import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/button/Button';
import UserProfileImg from '../profileImg/UserProfileImg';
import share from '../../assets/icon/icon-share.svg';
import messageCircle from '../../assets/icon/icon-comment.svg';

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

const MessageLink = styled(Link)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--border-gray);
  background-image: url(${messageCircle});
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
`;

const ShareLink = styled(MessageLink)`
  background-image: url(${share});
`;

export default function ProfileDataCard(props) {
  const {
    accountname,
    username,
    intro,
    image,
    isfollow,
    followerCount,
    followingCount,
  } = props?.userData.profile;
  const myAccount = JSON.parse(localStorage.getItem('userInfo')).user
    .accountname;
  const { token } = JSON.parse(localStorage.getItem('userInfo')).user;
  const [isfollowState, setIsfollowState] = useState(isfollow);
  const [userFollowerCount, setUserFollowerCount] = useState(followerCount);

  async function followRequest() {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = `/profile/${accountname}/follow`;
    try {
      const res = await fetch(url + reqPath, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const resData = await res.json();
      return resData.profile.followerCount;
    } catch (err) {
      console.error(err);
    }
  }

  async function unfollowRequest() {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = `/profile/${accountname}/unfollow`;
    try {
      const res = await fetch(url + reqPath, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const resData = await res.json();
      return resData.profile.followerCount;
    } catch (err) {
      console.error(err);
    }
  }

  function onUnfollowClick() {
    const UserFollowerCount = unfollowRequest(token);
    UserFollowerCount.then((count) => {
      setIsfollowState(false);
      setUserFollowerCount(count);
    });
  }

  function onFollowClick() {
    const UserFollowerCount = followRequest(token);
    UserFollowerCount.then((count) => {
      setIsfollowState(true);
      setUserFollowerCount(count);
    });
  }

  return (
    <>
      <ProfileFollowWrap>
        <FollowersLink to='/follower'>
          <Count>{userFollowerCount}</Count>
          <FollowText>followers</FollowText>
        </FollowersLink>
        <UserProfileImg src={image} />
        <FollowingLink to='/following'>
          <Count>{followingCount}</Count>
          <FollowText>followings</FollowText>
        </FollowingLink>
      </ProfileFollowWrap>

      <ProfileDescriptionWrap>
        <UserName>{username}</UserName>
        <UserId>@ {accountname}</UserId>
        <UserIntro>{intro}</UserIntro>
      </ProfileDescriptionWrap>
      <ButtonWrap>
        {myAccount !== accountname ? (
          <>
            <MessageLink to='#none' />
            {isfollowState ? (
              <Button
                medium
                white
                children='언팔로우'
                onClick={onUnfollowClick}
              />
            ) : (
              <Button medium children='팔로우' onClick={onFollowClick} />
            )}
            <ShareLink to='#none' />
          </>
        ) : (
          <>
            <Button
              as={Link}
              to='/profile/edit'
              medium='true'
              white='true'
              children='프로필 수정'
              hover
            />
            <Button
              as={Link}
              to='/product/add'
              medium100='true'
              white='true'
              children='상품 등록'
              hover
            />
          </>
        )}
      </ButtonWrap>
    </>
  );
}
