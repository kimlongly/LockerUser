import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../../Constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../../Components/SizedBox';
import FONTS_SIZE from '../../../Constant/FontSize';

export default function DeviceScreenHeader() {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Devices</Text>
      <SizedBox height={moderateScale(5)} />
      <Text style={styles.deviceText}>4 active Devices</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginBottom: moderateScale(10),
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  title: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font18,
    fontWeight: '700',
  },
  deviceText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font14,
  },
});
