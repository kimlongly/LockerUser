import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../../Constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../../Calibration/Device';
import FONTS from '../../../Constant/FontsConstant';
import FONTS_SIZE from '../../../Constant/FontSize';
import IconAssets from '../../../Assets/IconAssets';
import SizedBox from '../../../Components/SizedBox';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <View>
          <Text style={styles.headerText}>Good Morning</Text>
          <Text style={styles.userText}>VMZ's Home</Text>
        </View>
        <View style={styles.innerRow}>
          <IconAssets.Clock
            height={moderateScale(25)}
            width={moderateScale(25)}
          />
          <SizedBox width={moderateScale(5)} />
          <Text style={styles.time}>9:45 AM</Text>
        </View>
      </View>
      <SizedBox height={moderateScale(10)} />
      <View style={[styles.innerRow]}>
        <IconAssets.Shield
          height={moderateScale(25)}
          width={moderateScale(25)}
        />
        <SizedBox width={moderateScale(10)} />
        <Text style={styles.time}>Your Home is Secured</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(20),
    backgroundColor: COLORS.primary,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: FONTS_SIZE.font18,
  },
  userText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font14,
  },
  time: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: FONTS_SIZE.font14,
  },
});
