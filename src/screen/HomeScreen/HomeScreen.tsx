import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../components/SizedBox';
import COLORS from '../../constants/Colors';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {DEVICE} from '../../utils/Device';
import CustomCarousel from '../../components/carousel/CustomCarousel';
import ServicesButton from './components/ServicesButton';
import {IMAGE_ASSETS} from '../../assets/ImageAssets';
export default function HomeScreen() {
  return (
    <View style={GlobalStyle.container}>
      <Text style={styles.introduction}>Start Booking</Text>
      <SizedBox height={moderateScale(10)} />
      <CustomCarousel />
      <SizedBox height={moderateScale(10)} />
      <View
        style={[GlobalStyle.rowView, {paddingHorizontal: moderateScale(10)}]}>
        <ServicesButton image={IMAGE_ASSETS.Locker} />
        <ServicesButton image={IMAGE_ASSETS.Van} />
      </View>
      <SizedBox height={moderateScale(10)} />
      <View style={styles.tracking}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  introduction: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font24,
    padding: moderateScale(10),
  },
  tracking: {
    height: moderateScale(120),
    backgroundColor: COLORS.DARKCOMMONTEXT,
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
  },
  services: {
    width: (DEVICE.SCREEN_WIDTH - moderateScale(30)) / 2,
    height: (DEVICE.SCREEN_WIDTH - moderateScale(30)) / 2,
    backgroundColor: COLORS.DARKCOMMONTEXT,
    borderRadius: moderateScale(10),
  },
});
