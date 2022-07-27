import { axiosInstanceWithToken } from './index';

export const axiosPostLikeResquester = async (postId) => {
  try {
    const { data } = await axiosInstanceWithToken.post(`/post/${postId}/heart`);
    return data;
  } catch (error) {
    console.error('axiosPostLikeResquester error', error);
  }
};

export const axiosPostUnLikeResquester = async (postId) => {
  try {
    const { data } = await axiosInstanceWithToken.delete(
      `/post/${postId}/unheart`,
    );
    return data;
  } catch (error) {
    console.error('axiosPostUnLikeResquester error', error);
  }
};
