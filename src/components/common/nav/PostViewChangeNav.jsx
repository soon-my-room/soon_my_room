import React from 'react';
import styled, { css } from 'styled-components';
import postAlbumOff from '../../../assets/icon/icon-post-album-off.svg';
import postAlbumOn from '../../../assets/icon/icon-post-album-on.svg';
import postListOff from '../../../assets/icon/icon-post-list-off.svg';
import postListOn from '../../../assets/icon/icon-post-list-on.svg';

const Button = css`
  width: 26px;
  height: 26px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 16px;
`;

const PostListView = styled.button`
  ${Button}
  background-image: url(${postListOn});
  ${(props) =>
    !props.isPostListView &&
    css`
      background-image: url(${postListOff});
    `}
`;

const PostAlbumView = styled.button`
  ${Button}
  background-image: url(${postAlbumOff});
  ${(props) =>
    props.isPostAlbumView &&
    css`
      background-image: url(${postAlbumOn});
    `}
`;

const ToggleButtonWrap = styled.div`
  text-align: right;
  border-bottom: 0.5px solid var(--border-gray);
  padding: 9px 0;
`;

export default function PostViewChangeNav(props) {
  return (
    <ToggleButtonWrap>
      <PostListView
        type='button'
        onClick={props.onClick}
        disabled={props.disabled}
        isPostListView={props.isPostListView}
      />
      <PostAlbumView
        type='button'
        onClick={props.onClick}
        disabled={!props.disabled}
        isPostAlbumView={props.isPostAlbumView}
      />
    </ToggleButtonWrap>
  );
}
