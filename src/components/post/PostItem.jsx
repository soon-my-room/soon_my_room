import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ModalList from '../common/modal/ModalList';
import AlertModal from '../common/modal/AlertModal';
import ModalContainer from '../common/modal/ModalContainer';
import UserProfile from '../../components/profileImg/UserProfileImg';
import { ReactComponent as Heart } from '../../assets/icon/icon-heart.svg';
import { ReactComponent as Comment } from '../../assets/icon/icon-comment.svg';
import { ReactComponent as More } from '../../assets/icon/s-icon-more-vertical.svg';
import {
  axiosPostLikeResquester,
  axiosPostUnLikeResquester,
} from '../../apis/postApi';

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

const PostImg = styled.img`
  width: 304px;
  height: 228px;
  border-radius: 10px;
  object-fit: contain;
`;

const PostImages = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
`;

const ButtonWrap = styled.div`
  margin: 12px 0 16px;
  display: flex;
  font-weight: 400;
  font-size: 12px;
  color: var(--subtitle-text);
`;

const CreatedDate = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--subtitle-text);
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HeartSvg = styled(Heart)`
  margin-right: 6px;
`;

const CommentSvg = styled(Comment)`
  margin: 0 6px 0 16px;
`;

const MoreSvg = styled(More)`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export default function PostItem({ post, userPostGet }) {
  const {
    author,
    commentCount,
    content,
    createdAt,
    heartCount,
    hearted,
    id,
    image,
  } = post;

  const [year, month, day] = parseDate(createdAt);
  const [isHearted, setIsHearted] = useState(hearted);
  const [postHeartCount, setPostHeartCount] = useState(heartCount);
  const [isModal, setIsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isModalAlert, setIsModalAlert] = useState(false);
  const modalRef = useRef();
  const { token, accountname } = JSON.parse(
    localStorage.getItem('userInfo'),
  ).user;

  const history = useHistory();

  function parseDate(dateString) {
    const postDate = new Date(dateString);
    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();
    return [year, month, day];
  }

  function postListViewCheck(image) {
    const URL = 'https://mandarin.api.weniv.co.kr';

    if (!image) {
      return false;
    } else if (!image.includes(URL)) {
      return <PostImg src='' alt='이미지 파일을 불러올 수 없습니다.' />;
    } else {
      return (
        <PostImages>
          {image.split(',').map((postImg, index) => (
            <PostImg key={index} src={postImg} alt='게시글상품사진' />
          ))}
        </PostImages>
      );
    }
  }

  async function handleHeartClick() {
    const { post } = await axiosPostLikeResquester(id);
    setIsHearted(true);
    setPostHeartCount(post.heartCount);
  }

  async function handleUnHeartClick() {
    const { post } = await axiosPostUnLikeResquester(id);
    setIsHearted(false);
    setPostHeartCount(post.heartCount);
  }

  function handleModal(e) {
    setIsModal(!isModal);
    if (accountname === author.accountname) {
      setIsLogin(true);
    }
    if (modalRef.current !== e.target.firstElementChild) {
      setIsModal(true);
    }
  }

  function postAlert(e) {
    e.stopPropagation();
    setIsModal(false);
    setIsModalAlert(!isModalAlert);
  }

  function handlDeleteClick() {
    const deleteReq = postDeleteRequester(token);
    deleteReq.then(() => {
      setIsModalAlert(!isModalAlert);
      userPostGet();
    });
  }

  const handlCloseClick = () => setIsModalAlert(!isModalAlert);

  async function postDeleteRequester(token) {
    const url = 'https://mandarin.api.weniv.co.kr';
    const reqPath = `/post/${id}`;
    try {
      const res = await fetch(url + reqPath, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const resData = await res.json();
      return resData;
    } catch (err) {
      console.error('error');
    }
  }

  return (
    <>
      <PostWrap>
        <PostAuthorWrap>
          <Link to={`/profile/${author.accountname}`}>
            <UserProfile size='tiny' src={author.image} />
          </Link>
          <Link to={`/profile/${author.accountname}`}>
            <UserWrap>
              <UserName>{author.username}</UserName>
              <UserId>@ {author.accountname}</UserId>
            </UserWrap>
          </Link>
          <MoreSvg onClick={handleModal} />
        </PostAuthorWrap>
        <PostContentWrap>
          <Link
            to={{
              pathname: `/post/${post.id}`,
              state: {
                post,
              },
            }}
          >
            <Text>{content}</Text>
            {postListViewCheck(image)}
          </Link>
          <ButtonWrap>
            <IconWrap
              onClick={isHearted ? handleUnHeartClick : handleHeartClick}
            >
              <HeartSvg
                fill={isHearted ? 'var(--main-color)' : 'var(--bg-color)'}
                stroke={
                  isHearted ? 'var(--main-color)' : 'var(--subtitle-text)'
                }
              />
              {postHeartCount}
            </IconWrap>
            <IconWrap onClick={() => history.push(`/post/${id}`, { post })}>
              <CommentSvg />
              {commentCount}
            </IconWrap>
          </ButtonWrap>
          <CreatedDate>{`${year}년 ${month}월 ${day}일`}</CreatedDate>
        </PostContentWrap>
      </PostWrap>
      {isModal && (
        <ModalContainer useRef={modalRef} onClick={handleModal}>
          {isLogin ? (
            <>
              <ModalList children='삭제' onClick={postAlert} />
              <ModalList
                children='수정'
                onClick={() => {
                  history.push(`/post/edit`, { post });
                }}
              />
            </>
          ) : (
            <ModalList
              children='신고하기'
              onClick={(e) => (e.target.innerText = '정말 하실 건가요?')}
            />
          )}
        </ModalContainer>
      )}
      {isModalAlert && (
        <AlertModal
          title='게시글을 삭제할까요?'
          submitText='삭제'
          onCloseClick={handlCloseClick}
          onSubmitClick={handlDeleteClick}
        />
      )}
    </>
  );
}
