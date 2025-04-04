// 메모리 기반 토큰 저장소
let accessToken = '';
let currentUser = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

export const clearAccessToken = () => {
  accessToken = '';
};

export const setCurrentUser = (user) => {
  currentUser = user;
};

export const getCurrentUser = () => currentUser;

export const clearCurrentUser = () => {
  currentUser = null;
};

export const clearAll = () => {
  clearAccessToken();
  clearCurrentUser();
};
