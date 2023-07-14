import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ICON_ASSETS} from '../../assets/IconAssets';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/FontsConstant';
import FONTS_SIZE from '../../constants/FontSize';
import SizedBox from '../SizedBox';
import {DEVICE} from '../../utils/Device';
import NavigationHelper from '../../utils/NavigationHelper';

interface headerProps {
  headerTitle?: string;
  hasBack?: boolean;
}

export default function Header({
  headerTitle = 'header',
  hasBack = true,
}: headerProps) {
  const back = () => {
    NavigationHelper.back();
  };
  return (
    <View style={[styles.headerContainer, GlobalStyle.rowView]}>
      {hasBack ? (
        <TouchableOpacity style={styles.backButton} onPress={back}>
          <ICON_ASSETS.RightArrow fill={COLORS.BLACK} />
        </TouchableOpacity>
      ) : (
        <SizedBox width={moderateScale(40)} />
      )}
      <Text style={styles.headerText}>{headerTitle}</Text>
      <SizedBox width={moderateScale(40)} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: moderateScale(10),
    backgroundColor: COLORS.BLACK,
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight + 10
        : DEVICE.SCREEN_HEIGHT - DEVICE.SCREEN_HEIGHT * 0.95,
  },
  backButton: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '180deg'}],
  },
  headerText: {
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font16,
    color: COLORS.WHITE,
  },
});
