import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../constants/Colors';
import FONTS from '../constants/FontsConstant';
import {moderateScale} from 'react-native-size-matters';

interface TabItemParams {
  label?: string | null;
  focused: Boolean;
  icon: any;
}

const CustomTabItem = ({label = null, focused, icon}: TabItemParams) => {
  return (
    <View
      style={[
        styles.tabHolder,
        focused && {
          backgroundColor: COLORS.WHITE,
          padding: moderateScale(8),
          borderRadius: moderateScale(18),
        },
      ]}>
      {icon}
      {label && (
        <Text
          numberOfLines={1}
          style={{
            color: focused ? COLORS.ORANGE : COLORS.LIGHTINACTIVE,
            fontFamily: FONTS.REGULAR,
          }}>
          {label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabHolder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabItem;
