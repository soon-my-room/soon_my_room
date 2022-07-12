import styled from 'styled-components';
import homeIcon from '../../../assets/icon/tab/icon-home.svg';
import homeIconFill from '../../../assets/icon/tab/icon-home-fill.svg';
import messageIcon from '../../../assets/icon/tab/icon-message-circle.svg';
import messageIconFill from '../../../assets/icon/tab/icon-message-circle-fill.svg';
import editIcon from '../../../assets/icon/tab/icon-edit.svg';
import userIcon from '../../../assets/icon/tab/icon-user.svg';
import userIconFill from '../../../assets/icon/tab/icon-user-fill.svg';
import { Link } from 'react-router-dom';

const MenuList = styled.ul`
  position: fixed;
  left: 0;
  bottom: 0;
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

export default function BottomNavMenu(props) {
  return (
    <>
      <MenuList>
        <MenuItem>
          <Link to='/feed'>
            <MenuBtn>
              <MenuIcon src={props.type === 'feed' ? homeIconFill : homeIcon} />
              <MenuTitle color={props.type === 'feed' ? '#EA7F42' : '#767676'}>
                홈
              </MenuTitle>
            </MenuBtn>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='#'>
            <MenuBtn>
              <MenuIcon
                src={props.type === 'chat' ? messageIconFill : messageIcon}
              />
              <MenuTitle color={props.type === 'chat' ? '#EA7F42' : '#767676'}>
                채팅
              </MenuTitle>
            </MenuBtn>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/post/upload'>
            <MenuBtn>
              <MenuIcon src={editIcon} />
              <MenuTitle>게시물 작성</MenuTitle>
            </MenuBtn>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/profile'>
            <MenuBtn>
              <MenuIcon
                src={props.type === 'profile' ? userIconFill : userIcon}
              />
              <MenuTitle
                color={props.type === 'profile' ? '#EA7F42' : '#767676'}
              >
                프로필
              </MenuTitle>
            </MenuBtn>
          </Link>
        </MenuItem>
      </MenuList>
    </>
  );
}
