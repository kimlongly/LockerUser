import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../../constants/Colors';
import {DEVICE} from '../../../utils/Device';
import {connect} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import FONTS_SIZE from '../../../constants/FontSize';
import FONTS from '../../../constants/FontsConstant';
import SizedBox from '../../../components/SizedBox';
import Divider from '../../../components/divider/Divider';
import {ICON_ASSETS} from '../../../assets/IconAssets';
import moment from 'moment';

const fakeData = [1, 2, 3, 4];

const CurrentTracking = () => {
  const current = 2;
  const different = moment().add(2, 'days').diff(moment(), 'days');
  const max = moment().add(10, 'days').diff(moment(), 'days');
  const percentage = (((max - different) * 100) / max).toFixed();
  // ==================== Render Status =================== //

  const renderStatus = (item: any) => {
    return item === fakeData.length ? (
      <View
        key={item}
        style={[
          styles.statusDot,
          {
            backgroundColor:
              current >= item ? COLORS.SUCCESS : COLORS.LIGHTINACTIVE,
          },
        ]}>
        {item === current && (
          <ICON_ASSETS.Flag
            fill={COLORS.WHITE}
            width={moderateScale(10)}
            height={moderateScale(10)}
          />
        )}
      </View>
    ) : (
      <>
        <View
          key={item}
          style={[
            styles.statusDot,
            {
              backgroundColor:
                current >= item ? COLORS.SUCCESS : COLORS.LIGHTINACTIVE,
            },
            current === item && {
              height: moderateScale(15),
              width: moderateScale(15),
            },
          ]}>
          {item === current && (
            <ICON_ASSETS.Flag
              fill={COLORS.WHITE}
              width={moderateScale(10)}
              height={moderateScale(10)}
            />
          )}
        </View>
        <SizedBox width={moderateScale(5)} />
        <Divider
          borderRadius={moderateScale(2)}
          height={moderateScale(1.5)}
          backgroundColor={
            current >= item ? COLORS.SUCCESS : COLORS.LIGHTINACTIVE
          }
          flexGrow={1}
        />
        <SizedBox width={moderateScale(5)} />
      </>
    );
  };

  return (
    <View style={styles.tracking}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <View style={[styles.container, styles.lockerRenting]}>
          <View style={GlobalStyle.rowView}>
            <Text style={styles.lockertStatusText}>
              Current Locker Rent: (2)
            </Text>
            <Text style={styles.trackingLabel}>
              Last Rent Date:{' '}
              {moment().subtract(1, 'week').format('DD-MM-YYYY')}
            </Text>
          </View>
          <SizedBox height={moderateScale(10)} />
          <View style={[styles.bottomInformation, GlobalStyle.rowView]}>
            <View style={GlobalStyle.innerRow}>
              <View style={styles.lockerIcon}>
                <ICON_ASSETS.Locker
                  height={moderateScale(20)}
                  width={moderateScale(20)}
                  fill={COLORS.BLACK}
                />
              </View>
              <SizedBox width={moderateScale(10)} />
              <View>
                <Text style={[styles.statusText, {color: COLORS.WHITE}]}>
                  Locker XL (30kg)
                </Text>
                <Text style={[styles.trackingLabel]}>
                  End at {moment().add(2, 'days').format('DD-MMM-YYYY')}
                </Text>
              </View>
            </View>
            <View style={styles.legendBar}>
              <View
                style={[
                  styles.legendBar,
                  {
                    width: `${percentage}%`,
                    backgroundColor:
                      Number(percentage) > 70 ? COLORS.Alert : COLORS.WHITE,
                  },
                ]}></View>
            </View>
          </View>
        </View>
        {/* Delivery  */}
        <View style={[styles.container, styles.delivery]}>
          {/* Top Section  */}
          <View style={GlobalStyle.rowView}>
            <View>
              <Text style={styles.trackingNumber}>001210606</Text>
              <Text style={styles.trackingLabel}>Tracking Number</Text>
            </View>
            <View style={GlobalStyle.innerRow}>
              <View
                style={[styles.smallCircle, {backgroundColor: COLORS.SUCCESS}]}
              />
              <SizedBox width={moderateScale(3)} />
              <Text style={[styles.statusText, {color: COLORS.SUCCESS}]}>
                On Delivery
              </Text>
            </View>
          </View>
          <SizedBox height={moderateScale(10)} />
          {/* Mid Section */}
          <View style={[GlobalStyle.rowView]}>
            {fakeData.map(item => renderStatus(item))}
          </View>
          {/* Bottom Section */}
          <SizedBox height={moderateScale(10)} />
          <View style={GlobalStyle.rowView}>
            <View>
              <Text style={styles.trackingLabel}>
                {moment().format('DD-MMM-YYYY')}
              </Text>
              <SizedBox height={moderateScale(5)} />
              <Text style={styles.trackingNumber}>Phnom Penh</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.trackingLabel}>
                {moment().add(1, 'day').format('DD-MMM-YYYY')}
              </Text>
              <SizedBox height={moderateScale(5)} />
              <Text style={styles.trackingNumber}>Kompong Speu</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tracking: {
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    overflow: 'hidden',
  },
  container: {
    height: '100%',
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    alignSelf: 'center',
  },
  lockerRenting: {
    backgroundColor: COLORS.LIGHTCOMMONTEXT,
    padding: moderateScale(10),
  },
  delivery: {
    backgroundColor: COLORS.DARKCOMMONTEXT,
    padding: moderateScale(10),
  },
  trackingNumber: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: FONTS_SIZE.font14,
  },
  trackingLabel: {
    color: '#f6f6f6',
    fontSize: FONTS_SIZE.font8,
    fontFamily: FONTS.REGULAR,
  },
  smallCircle: {
    height: moderateScale(4),
    width: moderateScale(4),
    borderRadius: moderateScale(10),
  },
  statusText: {
    fontFamily: FONTS.REGULAR,
    fontSize: FONTS_SIZE.font11,
  },
  statusDot: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(8),
    width: moderateScale(8),
    borderRadius: moderateScale(10),
  },
  lockertStatusText: {
    fontSize: FONTS_SIZE.font11,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },
  bottomInformation: {
    backgroundColor: COLORS.DARKCOMMONTEXT,
    width: '99%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
  },
  lockerIcon: {
    backgroundColor: COLORS.WHITE,
    height: moderateScale(40),
    width: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  legendBar: {
    width: moderateScale(80),
    height: moderateScale(5),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    backgroundColor: COLORS.LIGHTINACTIVE,
  },
});

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTracking);
