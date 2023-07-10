import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {IMAGE_ASSETS} from '../../assets/ImageAssets';
import SizedBox from '../../components/SizedBox';
import CustomCarousel from '../../components/carousel/CustomCarousel';
import COLORS from '../../constants/Colors';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';
import {GlobalStyle} from '../../utils/GlobalStyle';
import CurrentTracking from './components/CurrentTracking';
import ServicesButton from './components/ServicesButton';
export default function HomeScreen() {
  return (
    <View style={GlobalStyle.container}>
      <Text style={styles.introduction}>Start Booking</Text>
      <SizedBox height={moderateScale(10)} />
      <CustomCarousel autoPlayer={false} />
      <SizedBox height={moderateScale(10)} />
      <View
        style={[GlobalStyle.rowView, {paddingHorizontal: moderateScale(10)}]}>
        <ServicesButton
          image={IMAGE_ASSETS.Locker}
          title={'Smart Locker'}
          description={'Rent a locker to store your items'}
          available={5}
        />
        <ServicesButton
          image={IMAGE_ASSETS.Van}
          title={'Smart Logistic'}
          description={'Deliver your package to wher you are'}
          available={100}
        />
      </View>
      <SizedBox height={moderateScale(10)} />
      <Text style={styles.introduction}>Tracking</Text>
      <SizedBox height={moderateScale(10)} />

      <CurrentTracking />
    </View>
  );
}

const styles = StyleSheet.create({
  introduction: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font18,
    padding: moderateScale(10),
  },
});
