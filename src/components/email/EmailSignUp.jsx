import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EmailSignUpLink = styled(Link)`
  color: var(--subtitle-text);
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
`;

// 라우터는 따로 연결하지 않았습니다. 추후 페이지 제작시 email 또는 이 부분 수정해서 연결하면 됩니다.
function EmailSignUp() {
  return <EmailSignUpLink to='email'>이메일로 회원가입</EmailSignUpLink>;
}

export default EmailSignUp;
