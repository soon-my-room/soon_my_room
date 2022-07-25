function getLocalStorageUserInfo() {
  return JSON.parse(localStorage.getItem('userInfo1'));
}

export function getUserInfo() {
  try {
    const user = getLocalStorageUserInfo();
    if (!user) {
      throw new Error('유저정보가 없습니다.');
    }

    return user;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
}
