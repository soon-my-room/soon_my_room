import React from 'react';
import LoginTitle from '../components/login/LoginTitle';
import LongBtn from '../components/login/LongBtn';

export default function EmailLoginPage() {
  return (
    <>
      {/* <LoginTitle>로그인</LoginTitle> */}
      <LoginTitle subTxt='subTxt'>프로필설정</LoginTitle>
      <LongBtn nextPage='join'>로그인</LongBtn>
      <LongBtn>로그인</LongBtn>
    </>
  );
}
