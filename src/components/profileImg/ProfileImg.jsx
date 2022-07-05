import React, { useRef, useState } from 'react';
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
  border-radius: 50%;
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
  const [imageSrc, setImageSrc] = useState(basicProfile);

  const onClickImageUpload = () => {
    imageInput.current.click();
  };

  const onLoadFile = async (e) => {
    const file = e.target.files;
    const formData = new FormData();
    const url = 'https://mandarin.api.weniv.co.kr';
    formData.append('image', file[0]);
    try {
      const response = await fetch(url + '/image/uploadfile', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      const uploadImageUrl = url + '/' + data.filename;
      setImageSrc(uploadImageUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ProfileImageContainer>
        <Input
          type='file'
          id='imgUpload'
          accept='img/*'
          onChange={onLoadFile}
          name='file'
          ref={imageInput}
        />
        <ProfileImage src={imageSrc} />
        <UploadFileImageContainer>
          <UploadFileImage src={uploadFile} onClick={onClickImageUpload} />
        </UploadFileImageContainer>
      </ProfileImageContainer>
    </>
  );
}
