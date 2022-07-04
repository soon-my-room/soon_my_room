import React from 'react';
import styled from 'styled-components';
import homeIcon from '../../assets/icon/icon-home.svg';
import homeIconFill from '../../assets/icon/icon-home-fill.svg';
import messageIcon from '../../assets/icon/icon-message-circle.svg';
import messageIconFill from '../../assets/icon/icon-message-circle-fill.svg';
import editIcon from '../../assets/icon/icon-edit.svg';
import userIcon from '../../assets/icon/icon-user.svg';
import userIconFill from '../../assets/icon/icon-user-fill.svg';

import { Link } from 'react-router-dom';

const MenuList = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--border-gray);
`;

const MenuItem = styled.li`
  margin: 12px 24px 30px 12px;
`;

const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default function TabMenu() {
  return (
    <div>
      <MenuList>
        <MenuItem>
          <Link to='/home'>
            <BtnIcon src={homeIcon} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/chat/list'>
            <BtnIcon src={messageIcon} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/post/upload'>
            <BtnIcon src={editIcon} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/profile'>
            <BtnIcon src={userIcon} />
          </Link>
        </MenuItem>
      </MenuList>
    </div>
  );
}
