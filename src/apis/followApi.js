import { axiosInstanceWithToken } from './index';

export const axiosGetFollow = async (userId, searchFollow) => {
  try {
    const { data } = await axiosInstanceWithToken.get(
      `/profile/${userId}/${searchFollow}`,
    );
    return data;
  } catch (error) {
    console.error('axiosPostLikeResquester error', error);
  }
};
