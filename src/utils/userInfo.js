import { getCurrentUser } from '../apis/tokenStorage';

export function getUserInfo() {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error('유저정보가 없습니다.');
    }

    return user;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
}
