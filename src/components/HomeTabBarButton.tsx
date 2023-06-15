import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../constants/Colors';
interface TabItemParams {
  focused: Boolean;
  icon: any;
}
export default function HomeTabBarButton({focused, icon}: TabItemParams) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: focused ? COLORS.WHITE : COLORS.BLACK,
          borderColor: focused ? COLORS.BLACK : COLORS.WHITE,
        },
      ]}>
      {icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    borderWidth: 1,
    elevation: 10,
    shadowColor: COLORS.WHITE,
  },
});
