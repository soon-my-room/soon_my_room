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

export const axiosWritePost = async (content, image) => {
  try {
    const { data } = await axiosInstanceWithToken.post(
      `/post`,
      JSON.stringify({
        post: {
          content,
          image,
        },
      }),
    );
    return data;
  } catch (error) {
    console.error('axiosGetPostDetail error', error);
  }
};

export const axiosEditPost = async (postId, content, image) => {
  try {
    const { data } = await axiosInstanceWithToken.put(
      `/post/${postId}`,
      JSON.stringify({
        post: {
          content,
          image,
        },
      }),
    );
    return data;
  } catch (error) {
    console.error('axiosGetPostDetail error', error);
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
    console.error('axiosWriteComment error', error);
  }
};

export const axiosRemoveComment = async (postId, commentId) => {
  try {
    const { data } = await axiosInstanceWithToken.delete(
      `/post/${postId}/comments/${commentId}`,
    );
    return data;
  } catch (error) {
    console.error('axiosRemoveComment error', error);
  }
};

export const axiosGetUserPost = async (userId) => {
  try {
    const { data } = await axiosInstanceWithToken.get(
      `/post/${userId}/userpost/?limit=${parseInt(20)}`,
    );
    return data;
  } catch (error) {
    console.error('axiosUserPostGet error', error);
  }
};
