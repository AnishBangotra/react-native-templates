import { Platform } from 'react-native';

export const FontStyles = {
  regular: 1,
  bold: 2,
  light: 3,
  medium: 4,
};

export const FontSize = {
  xxSmall: 9,
  xSmall: 10,
  small: 12,
  regular: 14,
  medium: 16,
  large: 18,
  xLarge: 20,
  xxLarge: 22,
  xxxLarge: 24,
};

// const names = Platform.select({
//   android: {
//     [FontStyles.regular]: 'OpenSans-Regular',
//     [FontStyles.bold]: 'OpenSans-Bold',
//     [FontStyles.light]: 'OpenSans-Light',
//     [FontStyles.medium]: 'OpenSans-Semibold',
//   },
//   ios: {
//     [FontStyles.regular]: 'OpenSans',
//     [FontStyles.bold]: 'OpenSans-Bold',
//     [FontStyles.light]: 'OpenSans-Light',
//     [FontStyles.medium]: 'OpenSans-Semibold',
//   },
// });
const names = Platform.select({
  android: {
    [FontStyles.regular]: 'Poppins-Regular',
    [FontStyles.bold]: 'Lexend-Bold',
    [FontStyles.light]: 'Poppins-Light',
    [FontStyles.medium]: 'Poppins-Semibold',
  },
  ios: {
    [FontStyles.regular]: 'Poppins',
    [FontStyles.bold]: 'Poppins-Bold',
    [FontStyles.light]: 'Poppins-Light',
    [FontStyles.medium]: 'Poppins-Semibold',
  },
});

const defaultName = FontStyles.regular;

export const getName = function (fontStyle) {
  if (!fontStyle) {
    return names[defaultName];
  }
  return names[fontStyle] || names[defaultName];
};

export const getFontSize = function (size) {
  if (!size) {
    return 12;
  }
  return Platform.OS === 'android' ? size : size;
};
