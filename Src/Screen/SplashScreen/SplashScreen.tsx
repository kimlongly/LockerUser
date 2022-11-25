import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import COLORS from '../../Constant/Colors';
import IconAssets from '../../Assets/IconAssets';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../Calibration/Device';
import SizedBox from '../../Components/SizedBox';
import NavigationHelper from '../../Utils/NavigationHelper';
import ScreenConstant from '../../Constant/ScreenConstant';

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      NavigationHelper.reset({name: ScreenConstant.OnboardingScreen});
    }, 1000);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconAssets.HomaTech />
      </View>
      <View style={styles.bottomContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <SizedBox height={moderateScale(10)} />
        <Text style={styles.version}>App Version 1.0.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    marginTop: DEVICE.DEVICE_Height / 3,
  },
  version: {
    color: COLORS.primary,
  },
  bottomContainer: {
    marginTop: DEVICE.DEVICE_Height / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
