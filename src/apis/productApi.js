import { axiosInstanceWithToken } from './index';

export const axiosGetProductListOnSales = async (userId) => {
  return await axiosInstanceWithToken.get(`/product/${userId}`);
};

export const axiosSaveProduct = async (productInfo) => {
  try {
    const { data } = await axiosInstanceWithToken.post(
      `/product`,
      JSON.stringify(productInfo),
    );

    return data;
  } catch (error) {
    console.log('axiosSaveProduct error', error);
  }
};

export const axiosRemoveProduct = async (productId) => {
  return await axiosInstanceWithToken.delete(`/product/${productId}`);
};
