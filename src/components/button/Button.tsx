import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../utils/Device';
import COLORS from '../../constants/Colors';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';

interface buttonProps {
  label?: string | null;
  buttonStyle?: ViewStyle | null;
  labelStyle?: TextStyle | null;
  onPress?: () => void;
  disabled?: boolean;
}
export default function Button({
  buttonStyle = {},
  label = '',
  labelStyle = {},
  onPress = () => {},
  disabled = false,
}: buttonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonStyle, buttonStyle]}>
      <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: moderateScale(50),
    width: DEVICE.SCREEN_WIDTH - moderateScale(40),
    backgroundColor: COLORS.WHITE,
    borderRadius: moderateScale(2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  labelStyle: {
    textTransform: 'capitalize',
    color: COLORS.BLACK,
    fontSize: FONTS_SIZE.font16,
    fontFamily: FONTS.SEMIBOLD,
  },
});
