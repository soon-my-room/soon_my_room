import { axiosInstanceWithToken } from './index';

export const axiosGetProductListOnSales = async (userId) => {
  return await axiosInstanceWithToken.get(`/product/${userId}`);
};

export const axiosRemoveProduct = async (productId) => {
  return await axiosInstanceWithToken.delete(`/product/${productId}`);
};
