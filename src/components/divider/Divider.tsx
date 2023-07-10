import {View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../constants/Colors';

interface divider {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  flexGrow?: number;
  borderRadius?: number;
}

export default function Divider({
  width,
  height = moderateScale(1),
  backgroundColor = COLORS.LIGHTINACTIVE,
  flexGrow,
  borderRadius = 0,
}: divider) {
  return (
    <View
      style={[
        {
          flexGrow: flexGrow,
          borderRadius: borderRadius,
          height: height,
          backgroundColor: backgroundColor,
        },
        width !== undefined && {width: width},
      ]}
    />
  );
}
