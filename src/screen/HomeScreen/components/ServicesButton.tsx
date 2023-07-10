import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../../constants/Colors';
import {DEVICE} from '../../../utils/Device';
import FastImage, {Source} from 'react-native-fast-image';
import FONTS_SIZE from '../../../constants/FontSize';
import FONTS from '../../../constants/FontsConstant';

interface ServiceButtonProps {
  image: string | undefined;
  available?: string | number;
  title?: string;
  description?: string;
}

export default function ServicesButton({
  image,
  available = 0,
  description = '',
  title = '',
}: ServiceButtonProps) {
  return (
    <TouchableOpacity
      style={styles.services}
      activeOpacity={0.7}
      disabled={Number(available) === 0}>
      <FastImage source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.backDrop} />
      <View style={styles.smallIcon}>
        <Text style={styles.available}>{available}</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.whiteText, {fontFamily: FONTS.SEMIBOLD}]}>
          {title}
        </Text>
        <Text style={[styles.whiteText, {fontSize: FONTS_SIZE.font10}]}>
          {description}
        </Text>
      </View>
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
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backDrop: {
    backgroundColor: COLORS.BACKDROP,
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  smallIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: COLORS.WHITE,
    borderWidth: 2,
    borderColor: COLORS.DARKCOMMONTEXT,
    borderRadius: moderateScale(20),
    height: moderateScale(40),
    width: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  available: {
    color: COLORS.DARKCOMMONTEXT,
    fontSize: FONTS_SIZE.font12,
    fontFamily: FONTS.MEDIUM,
  },
  content: {
    position: 'absolute',
    alignSelf: 'center',
  },
  whiteText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font12,
    textAlign: 'center',
  },
});
