import React, { useState } from 'react';
import BasicProfile from './BasicProfile';
import ProfileImg from './ProfileImg';

export default function Profile() {
  const [isUpload, setIsUpload] = useState(true);

  return <>{isUpload ? <ProfileImg /> : <BasicProfile />}</>;
}
