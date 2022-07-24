function getLocalStorageUserInfo() {
  return JSON.parse(localStorage.getItem('userInfo'));
}

export function getUserInfo() {
  try {
    const { user } = getLocalStorageUserInfo();
    return user;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
}

export function getUserId() {
  try {
    const { user } = getLocalStorageUserInfo();
    return user.accountname;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
}

export function getUserToken() {
  try {
    const { user } = getLocalStorageUserInfo();
    return user.token;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
}
