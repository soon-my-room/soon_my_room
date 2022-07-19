import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../components/profileImg/UserProfileImg';
import heart from '../../assets/icon/icon-heart.svg';
import comment from '../../assets/icon/icon-comment.svg';
import more from '../../assets/icon/s-icon-more-vertical.svg';

const PostWrap = styled.li`
  display: flex;
  flex-direction: column;
`;

const PostAuthorWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  position: relative;
`;

const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const UserId = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--subtitle-text);
`;

const MoreButton = styled.button`
  padding: 10px;
  background-image: url(${more});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 4px;
`;

const PostContentWrap = styled.div`
  margin-left: 48px;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
  word-break: break-all;
`;

const PostImg = styled.img``;

const ButtonWrap = styled.div`
  margin: 12px 0 16px;
`;

const HeartButton = styled.button`
  font-weight: 400;
  font-size: 12px;
  color: var(--subtitle-text);
  margin-right: 16px;

  &::before {
    content: url(${heart});
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
  }
`;

const CommentButton = styled(HeartButton)`
  &::before {
    content: url(${comment});
  }
`;

const CreatedDate = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--subtitle-text);
`;

export default function PostItem({ post }) {
  function parseDate(dateString) {
    const postDate = new Date(dateString);
    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();
    return [year, month, day];
  }
  const [year, month, day] = parseDate(post.createdAt);

  return (
    <PostWrap>
      <PostAuthorWrap>
        <UserProfile size='tiny' src={post.author.image} />
        <UserWrap>
          <UserName>{post.author.username}</UserName>
          <UserId>@ {post.author.accountname}</UserId>
        </UserWrap>
        <MoreButton />
      </PostAuthorWrap>
      <PostContentWrap>
        <Text>{post.content}</Text>
        {post.image === '' ? null : (
          <PostImg src={post.image} alt='게시글상품사진' />
        )}
        <ButtonWrap>
          <HeartButton>{post.heartCount}</HeartButton>
          <CommentButton>{post.commentCount}</CommentButton>
        </ButtonWrap>
        <CreatedDate>{`${year}년 ${month}월 ${day}일`}</CreatedDate>
      </PostContentWrap>
    </PostWrap>
  );
}
