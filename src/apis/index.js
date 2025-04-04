import axios from 'axios';
import {
  getAccessToken,
  setAccessToken,
  clearAll,
  setCurrentUser,
} from './tokenStorage';
import { axiosRefreshToken } from './profileApi';

export const API_URL = 'https://soon-my-room.kihoonbae.store/api';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosInstanceWithToken = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키를 요청에 포함
});

axiosInstanceWithToken.interceptors.request.use(async (request) => {
  // 메모리에서 토큰을 가져옵니다
  const token = getAccessToken();
  if (!token) {
    try {
      // Refresh Token으로 새 Access Token 요청 (쿠키는 자동으로 포함됨)
      const response = await axiosRefreshToken();

      const { user } = response.data;

      // 새 Access Token 저장
      if (user && user.token) {
        // 메모리에 새 토큰 저장
        setAccessToken(user.token);
        request.headers.Authorization = `Bearer ${user.token}`;
        setCurrentUser(user);

        return request;
      }
    } catch (error) {
      // Refresh Token 요청 실패 시 로그인 페이지로 리다이렉트
      clearAll();
      window.location.href = '/login';
    }
  }

  // 토큰이 존재하면 headers에 토큰을 넣어서 서버에 request를 보냅니다.
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

axiosInstanceWithToken.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    // 403 Forbidden 에러를 처리합니다.
    if (status === 403) {
      // 유저에게 다시 로그인하라고 알립니다.
      alert('로그인 정보가 만료되었습니다. 다시 로그인해주세요.');

      // 토큰이 만료되었거나 잘못된 경우
      localStorage.clear();
      // 로그인 페이지로 리다이렉트합니다.
      window.location.href = '/login';

      // 리디렉션 후 오류 전파 중단
      return new Promise(() => {});
    }

    return Promise.reject(error);
  },
);
