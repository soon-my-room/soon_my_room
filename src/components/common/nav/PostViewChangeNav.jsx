import React from 'react';
import styled, { css } from 'styled-components';
import postAlbumOff from '../../../assets/icon/icon-post-album-off.svg';
import postAlbumOn from '../../../assets/icon/icon-post-album-on.svg';
import postListOff from '../../../assets/icon/icon-post-list-off.svg';
import postListOn from '../../../assets/icon/icon-post-list-on.svg';

const Button = css`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center;
`;

const PostListView = styled.button`
  ${Button}
  background-image: url(${postListOn});
`;

const PostAlbumView = styled.button`
  ${Button}
  background-image: url(${postAlbumOff});
`;

const ToggleButtonWrap = styled.div`
  text-align: right;
  border-bottom: 0.5px solid var(--border-gray);
`;

export default function PostViewChangeNav() {
  return (
    <>
      <ToggleButtonWrap>
        <PostListView />
        <PostAlbumView />
      </ToggleButtonWrap>
    </>
  );
}
