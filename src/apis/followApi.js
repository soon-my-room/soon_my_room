import { axiosInstanceWithToken } from './index';

export const axiosGetFollow = async (userId, searchFollow) => {
  try {
    const { data } = await axiosInstanceWithToken.get(
      `/profile/${userId}/${searchFollow}`,
    );
    return data;
  } catch (error) {
    console.error('axiosGetFollow error', error);
  }
};

export const axiosRequestFollow = async (userId) => {
  try {
    const { data } = await axiosInstanceWithToken.post(
      `/profile/${userId}/follow`,
    );
    return data;
  } catch (error) {
    console.error('axiosRequestFollow error', error);
  }
};

export const axioxRemoveFollow = async (userId) => {
  try {
    const { data } = await axiosInstanceWithToken.delete(
      `/profile/${userId}/unfollow`,
    );
    return data;
  } catch (error) {
    console.error('axioxRemoveFollow error', error);
  }
};
