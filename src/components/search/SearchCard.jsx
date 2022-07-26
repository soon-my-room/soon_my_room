import React from 'react';
import styled from 'styled-components';
import UserProfileImg from '../profileImg/UserProfileImg';
import { Link } from 'react-router-dom';

const CardWrapper = styled.li``;

const CardContainer = styled.div`
  width: 358px;
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 272px;
`;

const UserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 5px 0px;
`;

const UserId = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--subtitle-text);
`;

export default function SearchCard(props) {
  return (
    <CardWrapper>
      <Link to={`/profile/${props.accountname}`}>
        <CardContainer>
          <UserProfileImg src={props.src} size='medium' />
          <UserInfo>
            <UserName>{props.username}</UserName>
            <UserId>@ {props.accountname}</UserId>
          </UserInfo>
        </CardContainer>
      </Link>
    </CardWrapper>
  );
}
