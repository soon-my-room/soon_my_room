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

  &:focus {
    border-bottom: 1px solid var(--main-color);
  }
`;

export default function InputBox({
  id,
  labelText,
  type = 'text',
  placeholder,
  onChange,
  onBlur,
  useRef,
}) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        ref={useRef}
        id={id}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}
