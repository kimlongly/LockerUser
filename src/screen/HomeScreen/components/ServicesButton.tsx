import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../../constants/Colors';
import {DEVICE} from '../../../utils/Device';
import FastImage, {Source} from 'react-native-fast-image';

interface ServiceButtonProps {
  image: string | undefined;
}

export default function ServicesButton({image}: ServiceButtonProps) {
  return (
    <TouchableOpacity style={styles.services}>
      <FastImage source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.smallIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  services: {
    width: (DEVICE.SCREEN_WIDTH - moderateScale(30)) / 2,
    height: (DEVICE.SCREEN_WIDTH - moderateScale(30)) / 2,
    backgroundColor: COLORS.DARKCOMMONTEXT,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  smallIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: COLORS.LIGHTCOMMONTEXT,
    borderRadius: moderateScale(20),
    height: moderateScale(40),
    width: moderateScale(40),
  },
});
