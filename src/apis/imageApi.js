import { axiosInstance } from '.';

export const DEFAULT_IMAGE_URL = 'https://i.imgur.com/8VVO2fs.jpeg';

export const axiosImageSave = async (formData) => {
  try {
    debugger;
    const {
      data: { imageSrc },
    } = await axiosInstance.post(`/image/uploadfile`, formData);
    return imageSrc;
  } catch (error) {
    console.error('axiosImageSave error', error);
  }
};
