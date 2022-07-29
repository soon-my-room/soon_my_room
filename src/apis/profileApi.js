import { axiosInstance, axiosInstanceWithToken } from './index';

export const axiosUserIdValidCheck = async (userId) => {
  try {
    const { data } = await axiosInstance.post(
      `/user/accountnamevalid`,
      JSON.stringify({
        user: {
          accountname: userId,
        },
      }),
    );

    return data.message;
  } catch (error) {
    console.error('axiosUserIdValidCheck error', error);
  }
};

export const axiosJoin = async (userInfo) => {
  try {
    const { data } = await axiosInstance.post(
      `/user`,
      JSON.stringify({
        user: userInfo,
      }),
    );

    return data.message;
  } catch (error) {
    console.error('axiosUserIdValidCheck error', error);
  }
};

export const axiosProfileInfoEdit = async (userInfo) => {
  try {
    return await axiosInstanceWithToken.put(`/user`, JSON.stringify(userInfo));
  } catch (error) {
    console.error('axiosProfileInfoEdit error', error);
  }
};
