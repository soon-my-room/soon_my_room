import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import UserProfileImg from '../profileImg/UserProfileImg';
import viewMore from '../../assets/icon/icon-more-vertical.svg';
import ModalContainer from '../common/modal/ModalContainer';
import ModalList from '../common/modal/ModalList';
import { useRouteMatch } from 'react-router-dom';
import { axiosRemoveComment } from '../../apis/postApi';
import { getUserInfo } from '../../utils/userInfo';

const FontFamily = css`
  font-family: 'Spoqa Han Sans Neo';
`;

const CommentItemWrap = styled.section`
  margin: 20px 0 12px;
`;

const UserWrap = styled.div`
  margin-bottom: 4px;
`;

const UserProfile = styled(UserProfileImg)`
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
  color: #333333;
  margin-left: 48px;
  word-break: break-all;
`;

export default function CommentItem({ comment, setComments }) {
  const match = useRouteMatch();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  async function handleRemoveComment(e) {
    e.preventDefault();

    const postId = match.params.post_id;
    const commentId = comment.id;

    try {
      const { message } = await axiosRemoveComment(postId, commentId);
      if (message !== '댓글이 삭제되었습니다.') {
        throw new Error('댓글 삭제 에러');
      }

      setComments((prev) => prev.filter((comment) => comment.id !== commentId));
      setModalOpen(false);
    } catch (error) {
      console.error('댓글 삭제 에러', error);
    }
  }

  function authorCheck() {
    const userInfo = getUserInfo();

    const commentAuthor = comment.author.accountname;
    const me = userInfo.accountname;

    return me === commentAuthor;
  }

  return (
    <>
      <CommentItemWrap>
        <UserWrap>
          <UserProfile
            size='tiny'
            src={comment.author.image}
            alt='댓글 작성자 프로필 이미지'
          />
          <UserName>{comment.author.username}</UserName>
          <CreatedTime>{comment.author.createAt}</CreatedTime>
          <ViewMoreBtn onClick={handleModalOpen}>
            <ViewMore src={viewMore} alt='더 보기' />
          </ViewMoreBtn>
        </UserWrap>
        <Comment>{comment.content}</Comment>
      </CommentItemWrap>
      {modalOpen && (
        <ModalContainer>
          {authorCheck() && (
            <ModalList onClick={handleRemoveComment}>삭제</ModalList>
          )}
          <ModalList>신고하기</ModalList>
        </ModalContainer>
      )}
    </>
  );
}
