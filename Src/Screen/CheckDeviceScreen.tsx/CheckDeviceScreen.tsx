import {ScrollView, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../Constant/Colors';
import EachCamera from '../../Components/EachCamera';
import SizedBox from '../../Components/SizedBox';
import {moderateScale} from 'react-native-size-matters';
import FONTS_SIZE from '../../Constant/FontSize';
import DeviceActivity from '../DeviceDetailScreen/Components/DeviceActivity';

export default function CheckDeviceScreen(props: any) {
  const {room, image} = props.route.params;
  return (
    <ScrollView style={styles.container}>
      <SizedBox height={moderateScale(10)} />
      <EachCamera room={room} image={image} />
      <SizedBox height={moderateScale(10)} />
      <View style={{paddingHorizontal: moderateScale(10)}}>
        <Text style={styles.title}>Camera Activity</Text>
        <SizedBox height={moderateScale(10)} />
        <DeviceActivity />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.primary,
    fontSize: FONTS_SIZE.font16,
    fontWeight: 'bold',
  },
});
