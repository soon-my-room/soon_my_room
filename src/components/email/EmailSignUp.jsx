import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EmailSignUpLink = styled(Link)`
  display: block;
  color: var(--subtitle-text);
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
`;

function EmailSignUp() {
  return <EmailSignUpLink to='email'>이메일로 회원가입</EmailSignUpLink>;
}

export default EmailSignUp;
