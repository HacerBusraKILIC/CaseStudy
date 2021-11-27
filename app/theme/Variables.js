import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  border: '#e4e4e4',
  gray: '#B7B7B7',
  gray_extra_light: '#F6F6F6',
  gray_light: '#808080',
  primary_light: '#59B7A6',
  primary_dark: '#275C5A',
  success: '#28a745',
  error: '#dc3545',
  black: '#000000',
  dark_red: '#7E1613',
  red: '#f54663',
  blue: '#00b3ff',
  dark_blue: '#0000ff',
  orange: '#ffb507',
  purple: '#af79f7',
};

export const NavigationColors = {
  primary_light: Colors.primary_light,
  primary_dark: Colors.primary_dark,
};

/**
 * FontSize
 */
export const FontSize = {
  small: 14,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export const Dimension = {
  width,
  height,
};
