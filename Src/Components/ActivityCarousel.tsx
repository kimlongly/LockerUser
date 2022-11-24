import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-reanimated-carousel';
import {moderateScale} from 'react-native-size-matters';
import ImageAssets from '../Assets/ImageAssets';
import {DEVICE} from '../Calibration/Device';
import COLORS from '../Constant/Colors';
import IconAssets from '../Assets/IconAssets';
import SizedBox from './SizedBox';
import FONTS_SIZE from '../Constant/FontSize';

const Width = DEVICE.DEVICE_Width;

export default function ActivityCarousel() {
  const fakeData: any = [
    {label: 'Cam 1', image: ImageAssets.Interior, room: 'LivingRoom1'},
    {label: 'Cam 2', image: ImageAssets.Interior2, room: 'LivingRoom2'},
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.imageHolder}>
        <View style={styles.header}>
          <View style={[styles.innerRow, styles.cameraIndicator]}>
            <IconAssets.CameraFilled
              height={moderateScale(20)}
              width={moderateScale(20)}
            />
            <SizedBox width={moderateScale(5)} />
            <Text style={styles.cameraLabel}>{item.label}</Text>
          </View>
          <View style={[styles.innerRow, styles.liveIndicator]}>
            <View style={styles.liveDot} />
            <SizedBox width={moderateScale(5)} />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        </View>
        <FastImage source={item.image} style={styles.carouselImage} />
        <View style={styles.footer}>
          <View style={styles.innerRow}>
            <IconAssets.Couch />
            <SizedBox width={moderateScale(5)} />
            <Text style={styles.roomText}>{item.room}</Text>
          </View>
          <TouchableOpacity>
            <IconAssets.Expand
              width={moderateScale(20)}
              height={moderateScale(20)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{paddingHorizontal: moderateScale(10)}}>
      <Carousel
        loop
        style={{
          alignSelf: 'center',
          borderRadius: moderateScale(10),
        }}
        width={Width / 1}
        height={Width / 2}
        // autoPlay={true}
        data={fakeData}
        scrollAnimationDuration={2000}
        renderItem={renderItem}
        pagingEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageHolder: {
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(6),
    backgroundColor: COLORS.white,
  },
  carouselImage: {
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(240,240,240, 0.8)',
    width: '100%',
    height: '100%',
  },
  header: {
    top: moderateScale(5),
    left: moderateScale(10),
    zIndex: 1,
    flexDirection: 'row',
    padding: moderateScale(10),
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraIndicator: {
    backgroundColor: COLORS.blurry,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(3),
  },
  cameraLabel: {
    fontSize: FONTS_SIZE.font14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  liveIndicator: {
    backgroundColor: COLORS.redButton,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(3),
  },
  liveText: {
    fontSize: FONTS_SIZE.font14,
    fontWeight: '600',
    color: COLORS.white,
  },
  liveDot: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(10),
    height: moderateScale(10),
    width: moderateScale(10),
  },
  footer: {
    bottom: moderateScale(1),
    left: moderateScale(10),
    zIndex: 1,
    flexDirection: 'row',
    padding: moderateScale(10),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.blurry,
  },
  roomText: {
    fontSize: FONTS_SIZE.font14,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
