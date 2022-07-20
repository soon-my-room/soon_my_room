import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
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
  ${(props) =>
    props.imageSrc
      ? css`
          background-image: url(${props.imageSrc});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        `
      : css`
          background-color: #f2f2f2;
        `}

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

export default function InputImageUploadBox({
  htmlFor,
  labelText,
  setImageData,
  useRef,
  ...props
}) {
  const [imageSrc, setImageSrc] = useState('');

  const handleEncodeFileToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };

  useEffect(() => {
    return setImageData(imageSrc);
  }, [imageSrc]);

  return (
    <>
      <ImageUploadLabel htmlFor={props.id}>{labelText}</ImageUploadLabel>
      <ImageUploadInput
        {...props}
        onChange={handleEncodeFileToBase64}
        setImageData={setImageData}
        ref={useRef}
        accept='*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic'
        imageSrc={imageSrc} // props로 background를 변경해 주기 위해 사용
      />
    </>
  );
}
