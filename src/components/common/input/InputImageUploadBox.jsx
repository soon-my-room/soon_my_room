import React from 'react';
import styled from 'styled-components';
import uploadFileButton from '../../../assets/upload-file-button-gray.svg';

const ImageUploadLabel = styled.label`
  margin-bottom: 18px;
  display: flex;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--subtitle-text);
  cursor: pointer;
`;

const ImageUploadInput = styled.input`
  position: relative;
  color: transparent; // '선택된 파일 없음' 글자 안나오도록 설정
  width: 322px;
  height: 204px;
  background-color: #f2f2f2;
  border: 0.5px solid var(--border-gray);
  border-radius: 10px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    right: 12px;
    bottom: 12px;
    background-image: url(${uploadFileButton});
  }

  &::file-selector-button {
    display: none;
  }
`;

export default function InputImageUploadBox({ htmlFor, labelText, ...props }) {
  return (
    <>
      <ImageUploadLabel htmlFor={htmlFor}>{labelText}</ImageUploadLabel>
      <ImageUploadInput {...props} />
    </>
  );
}
