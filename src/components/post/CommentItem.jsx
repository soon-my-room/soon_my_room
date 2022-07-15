import React from 'react';
import styled, { css } from 'styled-components';
import basicProfile from '../../assets/basic-profile.png';
import viewMore from '../../assets/icon/icon-more-vertical.svg';

const FontFamily = css`
  font-family: 'Spoqa Han Sans Neo';
`;

const CommentItemWrap = styled.section`
  margin: 20px 0 12px;
`;

const UserWrap = styled.div`
  margin-bottom: 4px;
`;

const UserProfile = styled.img`
  width: 36px;
  margin-right: 12px;
  vertical-align: middle;
`;

const UserName = styled.p`
  display: inline-block;
  ${FontFamily}
  font-size: 14px;
  font-weight: 500;
  margin: 6px 6px 16px 0;
`;

const CreatedTime = styled.span`
  ${FontFamily}
  font-weight: 400;
  font-size: 10px;
  color: var(--subtitle-text);
  margin-left: 6px;
`;

const ViewMoreBtn = styled.button`
  margin-top: 5px;
  float: right;
`;

const ViewMore = styled.img`
  width: 20px;
`;

const Comment = styled.p`
  ${FontFamily}
  font-weight:400;
  font-size: 14px;
  line-height: 18px;
  margin-left: 48px;
  word-break: break-all;
`;

export default function CommentItem() {
  return (
    <CommentItemWrap>
      <UserWrap>
        <UserProfile src={basicProfile} alt='댓글 작성자 프로필 이미지' />
        <UserName>서귀포시 무슨 농장</UserName>
        <CreatedTime>5분 전</CreatedTime>
        <ViewMoreBtn>
          <ViewMore src={viewMore} alt='더 보기' />
        </ViewMoreBtn>
      </UserWrap>
      <Comment>
        안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기
        지쳤어요 땡뻘땡뻘...안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을
        수 있나요? 기다리기 지쳤어요 땡뻘땡뻘...
      </Comment>
    </CommentItemWrap>
  );
}
