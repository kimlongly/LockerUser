import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../constants/Colors';
import {DEVICE} from '../../utils/Device';
import DatePicker from '../datePicker/DatePicker';

interface DatePickerModalProp {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DatePickerModal({
  visible,
  setVisible,
}: DatePickerModalProp) {
  const close = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      statusBarTranslucent
      transparent>
      <View style={styles.backDrop} />
      <TouchableOpacity style={styles.touch} onPress={close} />
      <DatePicker />
      <TouchableOpacity style={styles.touch} onPress={close} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  backDrop: {
    backgroundColor: COLORS.BACKDROP,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 1,
    alignSelf: 'center',
  },
  touch: {
    flex: 1,
  },
  content: {
    backgroundColor: COLORS.WHITE,
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    height: DEVICE.SCREEN_WIDTH - moderateScale(20),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
  },
});
