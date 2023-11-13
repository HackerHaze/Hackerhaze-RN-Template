import {Dimensions} from 'react-native';

// Note: This needs testing, I'm not entirely sure wether this will be used.

const windowDimensions = Dimensions.get('window');

const currentResolution = Math.sqrt(
  windowDimensions.height * windowDimensions.height +
    windowDimensions.width * windowDimensions.width,
);

export const createPerfectSize = (width: number, height: number) => {
  const designResolution = Math.sqrt(height * height + width * width);
  const resolutionsProportions = currentResolution / designResolution;

  return (size: number) => resolutionsProportions * size;
};
