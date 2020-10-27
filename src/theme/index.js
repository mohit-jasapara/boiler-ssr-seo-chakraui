import { theme, extendTheme } from '@chakra-ui/core';

const hostelColor = {
  girls: { bg: '#ffc2c5', active: '#FF99A0' },
  boys: { bg: '#E7FFAD', active: '#DAFF85' },
  staff: { bg: '#C2DDFF', active: '#85BCFF' }
};

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Lato', sans-serif;",
        color: '#2A2D30'
      }
    }
  },
  colors: {
    ...theme.colors,
    primary: '#318E86',
    accent: '#ED7737',
    bg: {
      gray: '#F7F6F4'
    },
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    },
    sidebar: {
      bg: '#2a3b50'
    },
    hostel: hostelColor,
    text: {
      secondary: '#b7b7b7'
    },
    btn: {
      primary: '#3B76FB'
    }
  },
  metrics: {
    sidebar: 200,
    header: '10vh'
  }
});
export default customTheme;
