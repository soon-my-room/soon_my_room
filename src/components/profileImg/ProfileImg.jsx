import React, { useRef } from 'react';
import basicProfile from '../../assets/basic-profile.png';
import uploadFile from '../../assets/upload-file.png';
import styled from 'styled-components';

const ProfileImageContainer = styled.div`
  width: 110px;
  height: 110px;
  margin: 30px auto;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
`;

const UploadFileImageContainer = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const UploadFileImage = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

export default function ProfileImg() {
  const imageInput = useRef();
  const onClickImageUpload = () => {
    imageInput.current.click();
  };
  return (
    <>
      <ProfileImageContainer>
        <Input type='file' name='file' ref={imageInput} />
        <ProfileImage src={basicProfile} />
        <UploadFileImageContainer>
          <UploadFileImage src={uploadFile} onClick={onClickImageUpload} />
        </UploadFileImageContainer>
      </ProfileImageContainer>
    </>
  );
}
