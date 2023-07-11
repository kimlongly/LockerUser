import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import COLORS from '../../constants/Colors';
import SizedBox from '../SizedBox';
import FONTS from '../../constants/FontsConstant';
import FONTS_SIZE from '../../constants/FontSize';
import {ICON_ASSETS} from '../../assets/IconAssets';
import {DEVICE} from '../../utils/Device';

export default function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={GlobalStyle.innerRow}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'light-content'}
        />
        <TouchableOpacity style={styles.profileContainer}>
          <FastImage
            source={{
              uri: 'https://assets-prd.ignimgs.com/2023/02/08/jw4-2025x3000-online-character-1sht-keanu-v187-1675886090936.jpg',
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <SizedBox width={moderateScale(10)} />
        <View>
          <Text style={styles.profileName}>Ly Kimlong</Text>
          <Text style={styles.profileEmail}>ly.kimlong19@kit.edu.kh</Text>
        </View>
      </View>
      <TouchableOpacity>
        <ICON_ASSETS.Bell
          width={moderateScale(20)}
          height={moderateScale(20)}
          fill={COLORS.WHITE}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(10),
    backgroundColor: COLORS.BLACK,
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar?.currentHeight + moderateScale(10)
        : DEVICE.SCREEN_HEIGHT - DEVICE.SCREEN_HEIGHT * 0.95,
  },
  profileContainer: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(30),
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  profileName: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.WHITE,
    fontSize: FONTS_SIZE.font14,
  },
  profileEmail: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.INACTIVE,
    fontSize: FONTS_SIZE.font12,
  },
});
