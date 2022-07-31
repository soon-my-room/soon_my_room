import { API_URL } from '../apis';
import { DEFAULT_IMAGE_URL } from '../apis/imageApi';

export function profileImageCheck(src) {
  if (!src) {
    return DEFAULT_IMAGE_URL;
  }

  const baseImageUrl = `${API_URL}/Ellipse.png`;
  const [, url] = src.split(API_URL);

  if (!src.includes(API_URL) || src === baseImageUrl || url === '/undefined') {
    return DEFAULT_IMAGE_URL;
  }

  return src;
}
