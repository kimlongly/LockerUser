import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import Calendar from './Calendar';
import Months from './Months';
import {DEVICE} from '../../utils/Device';

interface DatePickerProps {
  onSelectedDate?: (date: string) => void;
  minimumDate?: string;
  maximumDate?: string;
}

export default function DatePicker({
  onSelectedDate = () => {},
  minimumDate = '2022-08-30',
  maximumDate,
}: DatePickerProps) {
  const [isCalendar, setIsCalendar] = useState(true);
  const [fullDate, setFullDate] = useState<string>(
    new Date().toLocaleDateString('en-GB', {dateStyle: 'full'}),
  );
  const date = fullDate.split('/');
  const [select, setSelect] = useState(Number(date[0]));
  const [month, setMonth] = useState(Number(date[1]));
  const [year, setYear] = useState(Number(date[2]));
  //======================== Change month function ========================== //

  const changeMonthYear = (month: number, year: number) => {
    setMonth(month);
    setYear(year);
  };

  const onChangeDate = (
    d = Number(date[0]),
    m = Number(date[1]),
    y = Number(date[2]),
  ) => {
    const dateString = new Date(`${y}-${m}-${d}`).toLocaleDateString('en-GB', {
      dateStyle: 'full',
    });
    setFullDate(dateString);
    onSelectedDate(dateString);
    setSelect(d);
  };

  return (
    <View style={styles.container}>
      {isCalendar ? (
        <Calendar
          minimum={minimumDate}
          maximum={maximumDate}
          fullDate={fullDate}
          onChangeDate={onChangeDate}
          select={select}
          setIsCalendar={setIsCalendar}
          changeMonthYear={changeMonthYear}
          month={month}
          year={year}
        />
      ) : (
        <Months
          minimum={minimumDate}
          maximum={maximumDate}
          year={year}
          setIsCalendar={setIsCalendar}
          month={month}
          changeMonthYear={changeMonthYear}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    height: DEVICE.SCREEN_WIDTH - moderateScale(20),
    backgroundColor: COLORS.BLACK,
    alignSelf: 'center',
    borderRadius: moderateScale(10),
  },

  daysContainer: {
    paddingHorizontal: moderateScale(10),
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
