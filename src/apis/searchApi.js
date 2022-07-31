import { axiosInstanceWithToken } from './index';

export const axiosGetSearchResult = async (keyword) => {
  try {
    const { data } = await axiosInstanceWithToken.get(
      `/user/searchuser/?keyword=${keyword}`,
    );
    return data;
  } catch (error) {
    console.error('axiosGetSearchResult error', error);
  }
};
