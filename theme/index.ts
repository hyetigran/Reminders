import { extendTheme } from 'native-base';

const colors = {
  blue: 'blue',
  grey: 'grey',
  red: 'red',
  yellow: 'yellow',
  white: 'white',
  black: 'black',
};

const fontConfig = {
  Inter: {
    100: {
      normal: 'Inter-Thin',
    },
    200: {
      normal: 'Inter-ExtraLight',
    },
    300: {
      normal: 'Inter-Light',
    },
    400: {
      normal: 'Inter-Regular',
    },
    500: {
      normal: 'Inter-Medium',
    },
    600: {
      normal: 'Inter-SemiBold',
    },
    700: {
      normal: 'Inter-Bold',
    },
    800: {
      normal: 'Inter-ExtraBold',
    },
    900: {
      normal: 'Inter-Black',
    },
  },
};
const fonts = {
  heading: 'Inter',
  body: 'Inter',
  mono: 'Inter',
};

const components = {
  Text: {
    baseStyle: {
      fontFamily: 'Inter',
      fontWeight: '400',
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: 'Inter',
      fontWeight: '400',
    },
  },
};

export const nativeTheme = extendTheme({
  colors,
  fontConfig,
  fonts,
  components,
});
