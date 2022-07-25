import axios from 'axios';
import { getUserInfo } from '../utils/userInfo';

const token = getUserInfo()?.token;

export const axiosInstance = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
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

axiosInstanceWithToken.interceptors.request.use((req) => {
  // axiosInstanceWithToken에서 토큰이 존재하지 않으면 request를 보내지 않습니다.
  if (token) {
    return req;
  }
});
