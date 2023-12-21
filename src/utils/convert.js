import { API_URL } from '../apis';

export const convertBaseUrlOfServerResponse = (serverResponseData) => {
  const BEFORE_API_URL = 'https://mandarin.api.weniv.co.kr';
  return JSON.parse(
    JSON.stringify(serverResponseData).replaceAll(BEFORE_API_URL, API_URL),
  );
};
