import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../../utils/Device';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {ICON_ASSETS} from '../../../assets/IconAssets';
import SizedBox from '../../../components/SizedBox';
import FONTS_SIZE from '../../../constants/FontSize';
import FONTS from '../../../constants/FontsConstant';
import moment from 'moment';

export default function LockerCard({item}: any) {
  return (
    <View style={styles.cardContainer}>
      <View style={[GlobalStyle.rowView]}>
        <View style={GlobalStyle.innerRow}>
          <View style={styles.iconContainer}>
            <ICON_ASSETS.Locker
              height={moderateScale(20)}
              width={moderateScale(20)}
              fill={COLORS.WHITE}
            />
          </View>
          <SizedBox width={moderateScale(5)} />
          <View>
            <Text style={styles.bookingCode}>#SML000001</Text>
            <Text style={styles.dateCode}>
              {moment().format('DD-MMM-YYYY (HH:mm a)')}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.statusContainer,
            item.status === 'Expired' && {borderColor: COLORS.Alert},
            item.status === 'In use' && {borderColor: COLORS.SUCCESS},
            item.status === 'Booked' && {borderColor: COLORS.ORANGE},
          ]}>
          <Text
            style={[
              styles.dateCode,
              item.status === 'Expired' && {color: COLORS.Alert},
              item.status === 'In use' && {color: COLORS.SUCCESS},
              item.status === 'Booked' && {color: COLORS.ORANGE},
            ]}>
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: moderateScale(15),
    backgroundColor: COLORS.WHITE,
    padding: moderateScale(10),
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    alignSelf: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
  },
  bookingCode: {
    color: COLORS.DARKCOMMONTEXT,
    fontSize: FONTS_SIZE.font12,
    fontFamily: FONTS.MEDIUM,
  },
  dateCode: {
    color: COLORS.INACTIVE,
    fontSize: FONTS_SIZE.font10,
    fontFamily: FONTS.REGULAR,
  },
  statusContainer: {
    borderRadius: moderateScale(5),
    padding: moderateScale(3),
    borderWidth: moderateScale(1),
  },
});
