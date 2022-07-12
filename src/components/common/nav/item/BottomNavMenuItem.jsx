import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  display: inline-block;
  margin-top: 14px;
  text-align: center;
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
  margin-bottom: 1px;
`;

export default function BottomNavMenuItem({ iconSrc, color, to, children }) {
  return (
    <MenuItem>
      <MenuLink to={to}>
        <MenuIcon src={iconSrc} />
        <MenuTitle color={color}>{children}</MenuTitle>
      </MenuLink>
    </MenuItem>
  );
}
