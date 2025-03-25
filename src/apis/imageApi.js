import { API_URL, axiosInstance } from '.';

export const DEFAULT_IMAGE_URL = 'https://i.imgur.com/8VVO2fs.jpeg';

export const axiosImageSave = async (formData) => {
  try {
    const { data } = await axiosInstance.post(`/image/uploadfile`, formData);
    return `${API_URL}/${data.filename}`;
  } catch (error) {
    console.error('axiosImageSave error', error);
  }
};
