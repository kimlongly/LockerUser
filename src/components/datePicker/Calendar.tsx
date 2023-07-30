import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import COLORS from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import {ICON_ASSETS} from './assets/IconAssets';
import FONTS from '../../constants/FontsConstant';
import FONTS_SIZE from '../../constants/FontSize';
import {DEVICE} from '../../utils/Device';

interface CalendarProps {
  maximum?: string;
  minimum?: string;
  select: number;
  setIsCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  month: number;
  year: number;
  fullDate: string;
  onChangeDate: (d: number, m: number, y: number) => void;
  changeMonthYear: (month: number, year: number) => void;
}
const dateOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar({
  select,
  year,
  month,
  setIsCalendar,
  fullDate,
  onChangeDate,
  changeMonthYear,
  maximum,
  minimum,
}: CalendarProps) {
  const [days, setDays] = useState([]);

  // ======================== Check available =============== //

  const checkAvailable = (date: string | undefined, type: 'min' | 'max') => {
    let range: any = date?.split('-');
    if (!range || range.length === 0) {
      return true;
    }
    if (type === 'max') {
      if (range[1] <= month && range[0] <= year) {
        return false;
      }
    }
    if (type === 'min') {
      if (range[1] >= month && range[0] >= year) {
        return false;
      }
    }

    return true;
  };

  const checkCanPress = () => {
    const max: any = maximum?.split('-');
    const min: any = minimum?.split('-');
    if (!maximum || !minimum) {
      return false;
    }
    if (max[0] === min[0] && max[1] === min[1]) {
      return true;
    }
    return false;
  };

  // ======================== Animation ===================//

  const fade = useRef(new Animated.Value(0)).current;
  const move = useRef(new Animated.Value(0)).current;
  const opacity = move.interpolate({
    inputRange: [
      -DEVICE.SCREEN_WIDTH - moderateScale(20),
      0,
      DEVICE.SCREEN_WIDTH - moderateScale(20),
    ],
    outputRange: [0, 1, 0],
  });

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
      setIsCalendar(false);
    });
  };

  const moveToRight = () => {
    Animated.sequence([
      Animated.timing(move, {
        toValue: DEVICE.SCREEN_WIDTH - moderateScale(20),
        useNativeDriver: true,
        duration: 350,
        easing: Easing.linear,
      }),

      Animated.timing(move, {
        toValue: -DEVICE.SCREEN_WIDTH - moderateScale(20),
        useNativeDriver: true,
        duration: 0,
      }),
      {
        start: (cb: any) => {
          change(year, month - 1);
          cb({finished: true});
        },
        stop() {},
        reset: () => {},
      },
      Animated.timing(move, {
        toValue: 0,
        useNativeDriver: true,
        duration: 350,
        easing: Easing.linear,
      }),
    ]).start();
  };

  const moveToLeft = () => {
    Animated.sequence([
      Animated.timing(move, {
        toValue: -DEVICE.SCREEN_WIDTH - moderateScale(20),
        useNativeDriver: true,
        duration: 350,
        easing: Easing.linear,
      }),

      Animated.timing(move, {
        toValue: DEVICE.SCREEN_WIDTH - moderateScale(20),
        useNativeDriver: true,
        duration: 0,
      }),
      {
        start: (cb: any) => {
          change(year, month + 1);
          cb({finished: true});
        },
        stop() {},
        reset: () => {},
      },
      Animated.timing(move, {
        toValue: 0,
        useNativeDriver: true,
        duration: 350,
        easing: Easing.linear,
      }),
    ]).start();
  };

  // ====================== Render Each Date ================ //

  const change = (y = year, m = month) => {
    if (m < 1) {
      changeMonthYear(12, y - 1);
      aliginDate(y - 1, 12);
      return;
    }
    if (m > 12) {
      changeMonthYear(1, y + 1);
      aliginDate(y + 1, 1);
      return;
    }
    changeMonthYear(m, y);
    aliginDate(y, m);
  };

  const aliginDate = (y = year, m = month) => {
    const days = new Date(y, m, 0).getDate();
    const start = new Date(`${y}-${m}-1`)
      .toLocaleDateString('en-US', {
        weekday: 'short',
      })
      .split(',')[0];
    const end = new Date(`${y}-${m}-${days}`)
      .toLocaleDateString('en-US', {
        weekday: 'short',
      })
      .split(',')[0];
    let dateArray: any = Array.from(
      {length: dateOfTheWeek.indexOf(start)},
      () => 0,
    );
    for (let i = 1; i <= days; i = i + 1) {
      dateArray.push(i);
    }
    for (
      let i = 1;
      i <= dateOfTheWeek.length - dateOfTheWeek.indexOf(end);
      i = i + 1
    ) {
      dateArray.push(0);
    }
    setDays(dateArray);
  };
  useEffect(() => {
    aliginDate();
    fadeShow();
  }, []);
  return (
    <Animated.View style={[styles.container, {opacity: fade}]}>
      <View style={styles.calendarHeader}>
        {checkAvailable(minimum, 'min') ? (
          <TouchableOpacity onPress={moveToRight}>
            <ICON_ASSETS.LeftArrow
              height={moderateScale(20)}
              width={moderateScale(20)}
              fill={COLORS.WHITE}
            />
          </TouchableOpacity>
        ) : (
          <View style={{width: 20}} />
        )}
        <TouchableOpacity
          style={styles.yearContainer}
          onPress={fadeHide}
          disabled={checkCanPress()}>
          <Text style={styles.yearText}>
            {month},{year}
          </Text>
        </TouchableOpacity>
        {checkAvailable(maximum, 'max') ? (
          <TouchableOpacity onPress={moveToLeft}>
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
      <View style={styles.dateOfTheWeek}>
        {dateOfTheWeek.map(item => {
          return (
            <View key={item} style={styles.eachDateContainer}>
              <Text style={styles.dateOfTheWeekText}>{item}</Text>
            </View>
          );
        })}
      </View>
      <Animated.View
        style={[
          styles.daysContainer,
          {opacity: opacity, transform: [{translateX: move}]},
        ]}>
        {days.map((item, index) => {
          const disable =
            Date.parse(minimum ?? '') >
              Date.parse(`${year}-${month}-${item}`) ||
            Date.parse(maximum ?? '') < Date.parse(`${year}-${month}-${item}`);

          return (
            <TouchableOpacity
              onPress={() => onChangeDate(item, month, year)}
              key={index}
              style={styles.eachDateContainer}
              disabled={item === 0 || disable}>
              {item != 0 && (
                <View
                  style={
                    item === select &&
                    year === Number(fullDate.split('/')[2]) &&
                    month === Number(fullDate.split('/')[1]) &&
                    styles.backGround
                  }>
                  <Text
                    style={[
                      styles.dateOfTheWeekText,
                      item === select &&
                        year === Number(fullDate.split('/')[2]) &&
                        month === Number(fullDate.split('/')[1]) && {
                          color: COLORS.BLACK,
                        },
                      disable && {color: COLORS.LIGHTINACTIVE},
                    ]}>
                    {item}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.BLACK,
    borderRadius: moderateScale(10),
    overflow: 'hidden',
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(20),
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
  dateOfTheWeek: {
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(10),
  },
  dateOfTheWeekText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: FONTS.SEMIBOLD,
    fontSize: FONTS_SIZE.font12,
    color: COLORS.WHITE,
  },
  daysContainer: {
    paddingHorizontal: moderateScale(10),
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eachDateContainer: {
    width: (DEVICE.SCREEN_WIDTH - moderateScale(60)) / 7,
    height: moderateScale(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backGround: {
    height: moderateScale(30),
    width: moderateScale(30),
    backgroundColor: COLORS.WHITE,
    borderRadius: moderateScale(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
