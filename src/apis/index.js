import axios from 'axios';
import { getUserInfo } from '../utils/userInfo';

const token = getUserInfo()?.token;

export const API_URL = 'https://mandarin.api.weniv.co.kr';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosInstanceWithToken = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

axiosInstanceWithToken.interceptors.request.use((request) => {
  // axiosInstanceWithToken에서 토큰이 존재하지 않으면 서버에 request를 보내지 않습니다.
  if (!token) {
    throw new Error('토큰이 없습니다. 다시 로그인해주세요.');
  }

  return request;
});
