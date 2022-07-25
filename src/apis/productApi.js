import { axiosInstanceWithToken } from './index';

export const axiosRemoveProduct = async (productId) => {
  return await axiosInstanceWithToken.delete(`/product/${productId}`);
};
