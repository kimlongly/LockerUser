import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {ICON_ASSETS} from '../../assets/IconAssets';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../utils/Device';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/FontsConstant';
import FONTS_SIZE from '../../constants/FontSize';
import SizedBox from '../../components/SizedBox';
import SplashLoading from '../../animation/SplashLoading';
import NavigationHelper from '../../utils/NavigationHelper';
import ScreenConstant from '../../constants/ScreenConstant';
export default function SplashScreen() {
  const navigation = () => {
    setTimeout(() => {
      NavigationHelper.reset({name: ScreenConstant.Auth.Login});
    }, 2000);
  };
  useEffect(() => {
    navigation();
  });
  return (
    <View style={[GlobalStyle.container, styles.splashContainer]}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.content}>
        <SizedBox height={moderateScale(10)} />
        <SizedBox height={moderateScale(10)} />
        <View style={styles.upperContainer}>
          <ICON_ASSETS.Logo
            width={DEVICE.SCREEN_WIDTH / 1.3}
            height={DEVICE.SCREEN_WIDTH / 5}
          />
          <SizedBox height={moderateScale(10)} />
          <Text style={styles.sloganText}>Be Smart, Be Secure</Text>
        </View>
        <SizedBox height={moderateScale(10)} />
        <SplashLoading />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: DEVICE.SCREEN_HEIGHT / 1.3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperContainer: {},
  sloganText: {
    textAlign: 'center',
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
    fontSize: FONTS_SIZE.font20,
  },
});
