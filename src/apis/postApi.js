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

export const axiosGetPostDetail = async (postId) => {
  try {
    const { data } = await axiosInstanceWithToken.get(`/post/${postId}`);
    return data;
  } catch (error) {
    console.error('axiosGetPostDetail error', error);
  }
};

export const axiosGetPostComments = async (postId) => {
  try {
    const { data } = await axiosInstanceWithToken.get(
      `/post/${postId}/comments`,
    );
    return data;
  } catch (error) {
    console.error('axiosGetPostComments error', error);
  }
};

export const axiosWriteComment = async (postId, commentValue) => {
  try {
    const { data } = await axiosInstanceWithToken.post(
      `/post/${postId}/comments`,
      JSON.stringify({
        comment: {
          content: commentValue,
        },
      }),
    );
    return data;
  } catch (error) {
    console.error('axiosGetPostComments error', error);
  }
};
