import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ModalList from '../modal/ModalList';
import AlertModal from '../modal/AlertModal';
import ModalContainer from '../modal/ModalContainer';
import iconArrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import iconMore from '../../../assets/icon/icon-more-vertical.svg';

const Navigation = styled.nav`
  padding: 12px 12px 12px 16px;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid var(--border-gray);

  &::after {
    content: '';
    clear: both;
    display: block;
  }
`;

const BackButton = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${iconArrowLeft});
  background-repeat: no-repeat;
`;

const OpenModal = styled.button`
  float: right;
  width: 22px;
  height: 22px;
  background-image: url(${iconMore});
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  margin-left: 8px;
  display: inline-block;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
`;

export default function TopNavBasic({ title, viewMore, history }) {
  const [isProfileModal, setIsProfileModal] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const profileModalRef = useRef();

  function hendleOpenModal(e) {
    setIsProfileModal(!isProfileModal);
    if (e.target === profileModalRef.current) {
      setIsProfileModal(true);
    }
  }

  function userTokenDelete() {
    localStorage.clear();
    setIsLogoutModal(false);
    window.location.replace('/');
  }

  function onCloseClick() {
    setIsLogoutModal(false);
  }

  function onLoginout(e) {
    e.stopPropagation();
    setIsProfileModal(false);
    setIsLogoutModal(!isLogoutModal);
  }

  return (
    <>
      <Navigation>
        <BackButton type='button' onClick={() => history.goBack()} />
        {title && <Title>{title}</Title>}
        {viewMore && <OpenModal onClick={hendleOpenModal} />}
      </Navigation>
      {isProfileModal && (
        <ModalContainer useRef={profileModalRef} onClick={hendleOpenModal}>
          <ModalList
            children='설정 및 개인정보'
            onClick={() => history.push('/profile')}
          />
          <ModalList children='로그아웃' onClick={onLoginout} />
        </ModalContainer>
      )}
      {isLogoutModal && (
        <AlertModal
          title='로그아웃하시겠어요?'
          submitText='로그아웃'
          onCloseClick={onCloseClick}
          onSubmitText={userTokenDelete}
        />
      )}
    </>
  );
}
