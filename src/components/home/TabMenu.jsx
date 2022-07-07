import React, { useState } from 'react';
import styled from 'styled-components';
import homeIcon from '../../assets/icon/icon-home.svg';
import homeIconFill from '../../assets/icon/icon-home-fill.svg';
import messageIcon from '../../assets/icon/icon-message-circle.svg';
import messageIconFill from '../../assets/icon/icon-message-circle-fill.svg';
import editIcon from '../../assets/icon/icon-edit.svg';
import userIcon from '../../assets/icon/icon-user.svg';
import userIconFill from '../../assets/icon/icon-user-fill.svg';

import { useHistory } from 'react-router';

const MenuList = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--border-gray);
`;

const MenuItem = styled.li``;

const MenuBtn = styled.button`
  margin: 14px 33px 6px 33px;
`;

const MenuTitle = styled.p`
  color: ${(props) => props.color};
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default function TabMenu() {
  const history = useHistory();
  const [activeNav, setActiveNav] = useState(1);

  return (
    <>
      <MenuList>
        <MenuItem>
          <MenuBtn
            onClick={() => {
              setActiveNav(1);
              history.push('/home');
            }}
          >
            <MenuIcon src={activeNav === 1 ? homeIconFill : homeIcon} />
            <MenuTitle color={activeNav === 1 ? ' #EA7F42' : '#767676'}>홈</MenuTitle>
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          <MenuBtn
            onClick={() => {
              setActiveNav(2);
              history.push('/chat/list');
            }}
          >
            <MenuIcon src={activeNav === 2 ? messageIconFill : messageIcon} />
            <MenuTitle color={activeNav === 2 ? ' #EA7F42' : '#767676'}>채팅</MenuTitle>
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          <MenuBtn
            onClick={() => {
              history.push('/post/upload');
            }}
          >
            <MenuIcon src={editIcon} />
            <MenuTitle color={'#767676'}>게시물 작성</MenuTitle>
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          <MenuBtn
            onClick={() => {
              setActiveNav(4);
              history.push('/profile');
            }}
          >
            <MenuIcon src={activeNav === 4 ? userIconFill : userIcon} />
            <MenuTitle color={activeNav === 4 ? ' #EA7F42' : '#767676'}>프로필</MenuTitle>
          </MenuBtn>
        </MenuItem>
      </MenuList>
    </>
  );
}
