import { IMAGE_BASE_URL } from "./constants";

/**
 * To get full url image/poster source
 * @param {string} imgPath
 * @returns string
 */
export function getImageSource(imgPath) {
  return `${IMAGE_BASE_URL}/w500/${imgPath}`;
}
