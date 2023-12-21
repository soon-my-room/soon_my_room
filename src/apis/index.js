import axios from 'axios';
import { getUserInfo } from '../utils/userInfo';
import { convertBaseUrlOfServerResponse } from '../utils/convert';

export const API_URL = 'https://api.mandarin.weniv.co.kr';

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
});

axiosInstanceWithToken.interceptors.request.use((request) => {
  // axiosInstanceWithToken에서 토큰이 존재하지 않으면 서버에 request를 보내지 않습니다.
  const { token } = getUserInfo();
  if (!token) {
    throw new Error('토큰이 없습니다. 다시 로그인해주세요.');
  }

  // 토큰이 존재하면 headers에 토큰을 넣어서 서버에 request를 보냅니다.
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

axiosInstanceWithToken.interceptors.response.use(
  (response) => {
    response.data = convertBaseUrlOfServerResponse(response.data);
    return response;
  },
  (error) => Promise.reject(error),
);
