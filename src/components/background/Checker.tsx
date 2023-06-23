import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DEVICE} from '../../utils/Device';
import COLORS from '../../constants/Colors';
import {GlobalStyle} from '../../utils/GlobalStyle';
const eachBox = DEVICE.SCREEN_WIDTH / 5;
export default function Checker() {
  const rowNum = Number((DEVICE.SCREEN_HEIGHT / eachBox).toFixed());
  const EachBox = Array.from({length: rowNum}, (_, i) => i + 1);
  return (
    <View style={styles.checkerContainer}>
      {EachBox.map((_, index) => {
        return (
          <View style={[GlobalStyle.innerRow, {opacity: 0.1}]}>
            <View style={styles.eachBox} />
            <View style={styles.eachBox} />
            <View style={styles.eachBox} />
            <View style={styles.eachBox} />
            <View style={styles.eachBox} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  checkerContainer: {
    height: DEVICE.SCREEN_HEIGHT,
    width: DEVICE.SCREEN_WIDTH,
    position: 'absolute',
  },
  eachBox: {
    width: eachBox,
    height: eachBox,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
  },
});
