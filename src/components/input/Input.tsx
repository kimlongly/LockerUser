import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {DEVICE} from '../../utils/Device';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/FontsConstant';
import FONTS_SIZE from '../../constants/FontSize';
import SizedBox from '../SizedBox';
interface inputProps {
  label?: string | null;
  inputStyle?: ViewStyle | null;
  labelStyle?: TextStyle | null;
  onChange: (inp: string) => void;
  value: string;
  icon?: JSX.Element | null;
  isRequired?: boolean;
  keyboard?: 'default' | 'number-pad';
  editable?: boolean;
  missingField?: boolean;
  isPassword?: boolean;
  limit?: number;
}

export default function Input({
  inputStyle = {},
  label = null,
  labelStyle = {},
  onChange = () => {},
  value = '',
  icon = null,
  isRequired = false,
  missingField = false,
  keyboard = 'default',
  editable = true,
  isPassword = false,
  limit,
}: inputProps) {
  return (
    <View
      style={[styles.inputStyle, inputStyle, missingField && {borderWidth: 1}]}>
      <View style={{flex: 1}}>
        {label && <SizedBox height={moderateScale(10)} />}
        {label && (
          <Text style={[styles.labelStyles, labelStyle]}>
            {label}
            {isRequired && (
              <Text style={{color: COLORS.Alert, fontSize: FONTS_SIZE.font14}}>
                *
              </Text>
            )}
          </Text>
        )}
        <TextInput
          maxLength={limit}
          editable={editable}
          keyboardType={keyboard}
          secureTextEntry={isPassword}
          style={styles.textField}
          cursorColor={COLORS.WHITE}
          value={value}
          onChangeText={onChange}
        />
      </View>
      {icon}
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: DEVICE.SCREEN_WIDTH - moderateScale(40),
    backgroundColor: COLORS.LIGHTCOMMONTEXT,
    height: moderateScale(50),
    borderRadius: moderateScale(2),
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: COLORS.Alert,
  },
  labelStyles: {
    textTransform: 'capitalize',
    fontSize: FONTS_SIZE.font10,
    fontFamily: FONTS.LIGHT,
    color: COLORS.INACTIVE,
    position: 'absolute',
    top: Platform.OS === 'android' ? 5 : 5,
  },
  textField: {
    height: '100%',
    paddingLeft: 0,
    color: COLORS.WHITE,
    fontSize: FONTS_SIZE.font14,
    fontFamily: FONTS.MEDIUM,
  },
});
