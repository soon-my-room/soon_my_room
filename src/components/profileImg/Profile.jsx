import React from 'react';
import BasicProfile from './BasicProfile';
import ProfileImg from './ProfileImg';

export default function Profile(props) {
  let isUpload = props;

  return <>{isUpload ? <ProfileImg /> : <BasicProfile />}</>;
}
