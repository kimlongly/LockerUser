import {StyleSheet} from 'react-native';
import COLORS from '../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export const GlobalStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingHorizontal10: {
    paddingHorizontal: moderateScale(10),
  },
});
