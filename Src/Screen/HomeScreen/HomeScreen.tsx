import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import COLORS from '../../Constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import FONTS_SIZE from '../../Constant/FontSize';
import FONTS from '../../Constant/FontsConstant';

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
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: moderateScale(10),
  },
  title: {
    color: COLORS.primary,
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font16,
  },
  rowView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  onboarding: {
    height: '5%',
    width: '50%',
    backgroundColor: COLORS.darkBlue,
  },
});
