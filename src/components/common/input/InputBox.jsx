import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: var(--subtitle-text);
`;

const Input = styled.input`
  padding-top: 20px;
  margin-bottom: 16px;
  height: 48px;
  border: 0;
  border-bottom: 1px solid var(--border-gray);
  color: var(--main-text-color);

  &:focus {
    border-bottom: 1px solid var(--main-color);
  }

  &::placeholder {
    color: var(--border-gray);
  }
`;

export default function InputBox({ type = 'text', useRef, ...props }) {
  return (
    <InputContainer>
      <Label htmlFor={props.id}>{props.labelText}</Label>
      <Input type={type} ref={useRef} {...props} />
    </InputContainer>
  );
}
