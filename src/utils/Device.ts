import {Dimensions} from 'react-native';
const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;
export const DEVICE = {
  SCREEN_HEIGHT: deviceHeight,
  SCREEN_WIDTH: deviceWidth,
};
