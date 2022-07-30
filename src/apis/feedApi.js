import { axiosInstanceWithToken } from './index';

export const axiosGetFollowingFeedList = async () => {
  try {
    const { data } = await axiosInstanceWithToken.get(`/post/feed`);
    return data.posts;
  } catch (error) {
    console.error('axiosGetFollowingFeedList error', error);
  }
};
