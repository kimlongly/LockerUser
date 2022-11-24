import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../../Constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../../Components/SizedBox';
import FONTS_SIZE from '../../../Constant/FontSize';
import NavigationHelper from '../../../Utils/NavigationHelper';
import ScreenConstant from '../../../Constant/ScreenConstant';

export default function DeviceScreenHeader() {
  const addADevice = () => {
    NavigationHelper.navigate({name: ScreenConstant.DeviceDetailScreen});
  };
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.title}>Devices</Text>
        <SizedBox height={moderateScale(5)} />
        <Text style={styles.deviceText}>4 active Devices</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addADevice}>
        <Text style={styles.addIndicator}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(15),
    backgroundColor: COLORS.white,
    width: moderateScale(40),
    height: moderateScale(40),
  },
  addIndicator: {
    color: COLORS.primary,
    fontSize: moderateScale(30),
  },
});
