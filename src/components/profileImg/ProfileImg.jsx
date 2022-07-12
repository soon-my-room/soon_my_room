import React, { useRef, useState } from 'react';
import basicProfile from '../../assets/basic-profile.png';
import uploadFile from '../../assets/upload-file.png';
import styled from 'styled-components';

const ProfileImageContainer = styled.div`
  width: 110px;
  height: 110px;
  position: relative;
`;

const ProfileImage = styled.img`
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

  //이미지업로드 버튼을 클릭했을 때 input이 실행
  const onClickImageUpload = () => {
    imageInput.current.click();
  };

  //input창 변화가 감지되었을 때, 사용자가 입력한 File 객체를 인자로 넣어주고 base64로 인코딩 해주는 함수
  const encodeFileToBase64 = (fileBlob) => {
    //FileReader함수를 사용하여 인코딩
    const reader = new FileReader();
    //readAsDataUrl은 File을 읽은 뒤 base64로 인코딩한 문자열을 FileReader 인스턴스의 result라는 속성에 담아줌
    reader.readAsDataURL(fileBlob);
    console.log(fileBlob);
    //reader가 인코딩 성공했다면 reader.result 안에 담긴 문자열을 imageSrc로 세팅
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        console.log(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <ProfileImageContainer>
        <Input
          type='file'
          id='imgUpload'
          accept='image/*'
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
          }}
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
