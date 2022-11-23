import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../Constant/Colors';
import HomeHeader from './Components/HomeHeader';
import SizedBox from '../../Components/SizedBox';
import {moderateScale} from 'react-native-size-matters';
import FONTS_SIZE from '../../Constant/FontSize';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Live Feed</Text>
      </ScrollView>
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
    fontWeight: '700',
    fontSize: FONTS_SIZE.font16,
  },
});
