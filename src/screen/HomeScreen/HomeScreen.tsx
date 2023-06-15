import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../components/SizedBox';
import COLORS from '../../constants/Colors';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';
import {GlobalStyle} from '../../utils/GlobalStyle';
export default function HomeScreen() {
  return (
    <View style={GlobalStyle.container}>
      <SizedBox height={moderateScale(20)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font16,
  },
});
