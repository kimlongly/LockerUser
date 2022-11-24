import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DEVICE} from '../Calibration/Device';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import SizedBox from './SizedBox';
import IconAssets from '../Assets/IconAssets';
import COLORS from '../Constant/Colors';
import FONTS_SIZE from '../Constant/FontSize';

interface EachCameraProps {
  image: any;
  room: string;
}

export default function EachCamera({image, room}: EachCameraProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.roomText}>{room}</Text>
        <SizedBox height={moderateScale(10)} />
        <View style={styles.liveIndicator}>
          <View style={styles.liveDot} />
          <SizedBox width={moderateScale(5)} />
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      </View>
      <FastImage source={image} style={styles.imageStyle} />
      <View style={styles.footer}>
        <SizedBox />
        <View style={styles.innerRowView}>
          <TouchableOpacity>
            <IconAssets.BackWard />
          </TouchableOpacity>
          <SizedBox width={moderateScale(20)} />
          <TouchableOpacity>
            <IconAssets.Pause />
          </TouchableOpacity>
          <SizedBox width={moderateScale(20)} />
          <TouchableOpacity>
            <IconAssets.Play />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <IconAssets.Expand />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DEVICE.DEVICE_Width,
    height: DEVICE.DEVICE_Width / 2,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },
  imageStyle: {
    borderRadius: moderateScale(20),
    width: '100%',
    height: '100%',
  },
  roomText: {
    fontSize: FONTS_SIZE.font16,
    color: COLORS.white,
    fontWeight: '700',
  },
  liveIndicator: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.redButton,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(3),
  },
  liveDot: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(10),
    height: moderateScale(10),
    width: moderateScale(10),
  },
  liveText: {
    fontSize: FONTS_SIZE.font14,
    fontWeight: '600',
    color: COLORS.white,
  },
  header: {
    top: moderateScale(5),
    left: moderateScale(10),
    zIndex: 1,
    padding: moderateScale(10),
    width: '100%',
    position: 'absolute',
  },
  footer: {
    bottom: moderateScale(10),
    left: DEVICE.DEVICE_Width / 20,
    borderRadius: moderateScale(20),
    zIndex: 1,
    flexDirection: 'row',
    padding: moderateScale(10),
    width: '95%',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.blurry,
  },
  innerRowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
