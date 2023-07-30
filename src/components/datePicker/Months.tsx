import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../constants/Colors';
import {ICON_ASSETS} from './assets/IconAssets';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';
import {DEVICE} from '../../utils/Device';

interface MonthsProps {
  setIsCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  year: number;
  month: number;
  changeMonthYear: (month: number, year: number) => void;
  maximum?: string;
  minimum?: string;
}

const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function Months({
  setIsCalendar,
  year,
  month,
  changeMonthYear,
  maximum,
  minimum,
}: MonthsProps) {
  useEffect(() => {
    fadeShow();
  }, []);

  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);

  // ======================== Animation ===================//

  const fade = useRef(new Animated.Value(0)).current;

  const fadeShow = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeHide = () => {
    Animated.timing(fade, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsCalendar(true);
    });
  };

  // ======================== Check available =============== //

  const checkAvailable = (date: string | undefined, type: 'min' | 'max') => {
    let range: any = date?.split('-');
    if (!range || range.length === 0) {
      return true;
    }
    if (type === 'max') {
      if (range[0] <= currentYear) {
        return false;
      }
    }
    if (type === 'min') {
      if (range[0] >= currentYear) {
        return false;
      }
    }
    return true;
  };

  return (
    <Animated.View style={[styles.container, {opacity: fade}]}>
      <View style={styles.calendarHeader}>
        {checkAvailable(minimum, 'min') ? (
          <TouchableOpacity
            onPress={() => {
              setCurrentYear(prev => prev - 1);
            }}>
            <ICON_ASSETS.LeftArrow
              height={moderateScale(20)}
              width={moderateScale(20)}
              fill={COLORS.WHITE}
            />
          </TouchableOpacity>
        ) : (
          <View style={{width: 20}} />
        )}
        <TouchableOpacity style={styles.yearContainer} onPress={fadeHide}>
          <Text style={styles.yearText}>{currentYear}</Text>
        </TouchableOpacity>
        {checkAvailable(maximum, 'max') ? (
          <TouchableOpacity
            onPress={() => {
              setCurrentYear(prev => prev + 1);
            }}>
            <ICON_ASSETS.RightArrow
              height={moderateScale(20)}
              width={moderateScale(20)}
              fill={COLORS.WHITE}
            />
          </TouchableOpacity>
        ) : (
          <View style={{width: 20}} />
        )}
      </View>
      <View style={styles.monthContainer}>
        {months.map((item, index) => {
          const disable =
            Date.parse(minimum ?? '') >
              Date.parse(`${currentYear}-${index + 1}-30`) ||
            Date.parse(maximum ?? '') <
              Date.parse(`${currentYear}-${index + 1}-30`);

          return (
            <TouchableOpacity
              onPress={() => {
                setCurrentMonth(index + 1);
              }}
              disabled={disable}
              style={[
                styles.eachMonthContainer,
                index + 1 === currentMonth && {backgroundColor: COLORS.WHITE},
                disable && {borderColor: COLORS.LIGHTINACTIVE},
              ]}
              key={item}>
              <Text
                style={[
                  styles.monthText,
                  index + 1 === currentMonth && {color: COLORS.BLACK},
                  disable && {color: COLORS.LIGHTINACTIVE},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.comfirmButton}
        onPress={() => {
          changeMonthYear(currentMonth, currentYear);
          fadeHide();
        }}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.BLACK,
    justifyContent: 'space-around',
    borderRadius: moderateScale(10),
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
  },
  yearContainer: {
    height: moderateScale(30),
    backgroundColor: COLORS.WHITE,
    width: moderateScale(120),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearText: {
    fontSize: FONTS_SIZE.font16,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.DARKCOMMONTEXT,
  },
  monthContainer: {
    paddingHorizontal: moderateScale(10),
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eachMonthContainer: {
    width: (DEVICE.SCREEN_WIDTH - moderateScale(60)) / 3,
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: FONTS_SIZE.font14,
    color: COLORS.WHITE,
  },
  comfirmButton: {
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE.SCREEN_WIDTH - moderateScale(40),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.WHITE,
    alignSelf: 'center',
  },
  confirmText: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: FONTS_SIZE.font14,
    color: COLORS.BLACK,
  },
});
