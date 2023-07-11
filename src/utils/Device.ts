import {Dimensions} from 'react-native';
const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;
const {height, width} = Dimensions.get('window');
export const DEVICE = {
  SCREEN_HEIGHT: deviceHeight,
  SCREEN_WIDTH: deviceWidth,
  WINDOW_HEIGHT: height,
  WINDOW_WIDTH: width,
};
