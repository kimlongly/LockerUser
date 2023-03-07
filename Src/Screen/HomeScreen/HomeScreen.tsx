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
    backgroundColor: COLORS.WHITE,
  },
  title: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font16,
  },
});
