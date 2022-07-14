import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../components/profileImg/UserProfileImg';
import heart from '../../assets/icon/icon-heart.svg';
import postUploadImg from '../../assets/icon/post-upload-Img.svg';
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

const Date = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--subtitle-text);
`;

export default function PostItem() {
  return (
    <PostWrap>
      <PostAuthorWrap>
        <UserProfile size='tiny' />
        <UserWrap>
          <UserName>애월읍 위니브 감귤농장</UserName>
          <UserId>@ weniv_Mandarin</UserId>
        </UserWrap>
        <MoreButton />
      </PostAuthorWrap>
      <PostContentWrap>
        <Text>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 악동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </Text>
        <PostImg src={postUploadImg} alt='게시글상품사진' />
        <ButtonWrap>
          <HeartButton>58</HeartButton>
          <CommentButton>12</CommentButton>
        </ButtonWrap>
        <Date>2020년 10월 21일</Date>
      </PostContentWrap>
    </PostWrap>
  );
}
