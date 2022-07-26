import styled from 'styled-components';
import homeIcon from '../../../assets/icon/tab/icon-home.svg';
import homeIconFill from '../../../assets/icon/tab/icon-home-fill.svg';
import messageIcon from '../../../assets/icon/tab/icon-message-circle.svg';
import messageIconFill from '../../../assets/icon/tab/icon-message-circle-fill.svg';
import editIcon from '../../../assets/icon/tab/icon-edit.svg';
import userIcon from '../../../assets/icon/tab/icon-user.svg';
import userIconFill from '../../../assets/icon/tab/icon-user-fill.svg';
import BottomNavMenuItem from './item/BottomNavMenuItem';

const MenuList = styled.ul`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 62px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--border-gray);
  background-color: var(--bg-color);
`;

export default function BottomNavMenu(props) {
  return (
    <>
      <MenuList>
        <BottomNavMenuItem
          to='/feed'
          iconSrc={props.type === 'feed' ? homeIconFill : homeIcon}
          color={
            props.type === 'feed' ? 'var(--main-color)' : 'var(--subtitle-text)'
          }
        >
          홈
        </BottomNavMenuItem>
        <BottomNavMenuItem
          to='#'
          iconSrc={props.type === 'chat' ? messageIconFill : messageIcon}
          color={
            props.type === 'chat' ? 'var(--main-color)' : 'var(--subtitle-text)'
          }
        >
          채팅
        </BottomNavMenuItem>
        <BottomNavMenuItem
          to='/post/add'
          iconSrc={editIcon}
          color={
            props.type === 'upload'
              ? 'var(--main-color)'
              : 'var(--subtitle-text)'
          }
        >
          게시물 작성
        </BottomNavMenuItem>
        <BottomNavMenuItem
          to='/profile'
          iconSrc={props.type === 'profile' ? userIconFill : userIcon}
          color={
            props.type === 'profile'
              ? 'var(--main-color)'
              : 'var(--subtitle-text)'
          }
        >
          프로필
        </BottomNavMenuItem>
      </MenuList>
    </>
  );
}
