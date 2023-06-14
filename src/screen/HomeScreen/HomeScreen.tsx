import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/FontsConstant';
import FONTS_SIZE from '../../constants/FontSize';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font16,
  },
});
