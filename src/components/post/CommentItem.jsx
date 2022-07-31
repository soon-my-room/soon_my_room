import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import UserProfileImg from '../profileImg/UserProfileImg';
import viewMore from '../../assets/icon/icon-more-vertical.svg';
import ModalContainer from '../common/modal/ModalContainer';
import ModalList from '../common/modal/ModalList';
import { useHistory, useRouteMatch } from 'react-router-dom';
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
  const history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();

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

  useEffect(() => {
    const checkClickModalOutside = (event) => {
      // 모달이 켜져있고 클릭한곳이 모달을 포함하고있지 않으면 모달 끄기
      if (modalOpen && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', checkClickModalOutside);

    return () => {
      document.removeEventListener('mousedown', checkClickModalOutside);
    };
  }, [modalOpen]);

  function timeSet() {
    const commentCreatedDate = Date.parse(comment.createdAt);
    const now = Date.now();
    const commentMin = Math.floor((now - commentCreatedDate) / 1000 / 60);
    const commentHour = Math.floor((now - commentCreatedDate) / 1000 / 60 / 60);
    const commentDay = Math.floor(
      (now - commentCreatedDate) / 1000 / 60 / 60 / 24,
    );

    if (commentMin < 1) {
      return '방금 전';
    } else if (commentMin < 60) {
      return `${commentMin}분 전`;
    } else if (25 > commentHour > 0) {
      return `${commentHour}시간 전`;
    } else if (7 >= commentDay && commentDay > 0 && commentDay !== 0) {
      return `${commentDay}일 전`;
    } else {
      return comment.createdAt.slice(0, 10);
    }
  }

  function handleMoveProfile() {
    history.push(`/profile/${comment.author.accountname}`);
  }

  return (
    <>
      <CommentItemWrap>
        <UserWrap>
          <UserProfile
            size='tiny'
            src={comment.author.image}
            alt='댓글 작성자 프로필 이미지'
            onClick={handleMoveProfile}
          />
          <UserName onClick={handleMoveProfile}>
            {comment.author.username}
          </UserName>
          <CreatedTime>{timeSet()}</CreatedTime>
          <ViewMoreBtn onClick={handleModalOpen}>
            <ViewMore src={viewMore} alt='더 보기' />
          </ViewMoreBtn>
        </UserWrap>
        <Comment>{comment.content}</Comment>
      </CommentItemWrap>
      {modalOpen && (
        <ModalContainer useRef={modalRef}>
          {authorCheck() && (
            <ModalList onClick={handleRemoveComment}>삭제</ModalList>
          )}
          <ModalList>신고하기</ModalList>
        </ModalContainer>
      )}
    </>
  );
}
