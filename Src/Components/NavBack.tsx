import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconAssets from '../Assets/IconAssets';
import NavigationHelper from '../Utils/NavigationHelper';
import {moderateScale} from 'react-native-size-matters';

export default function NavBack() {
  const goBack = () => {
    NavigationHelper.back();
  };
  return (
    <TouchableOpacity onPress={goBack} style={styles.navBack}>
      <IconAssets.GoBack height={moderateScale(20)} width={moderateScale(20)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navBack: {
    marginLeft: moderateScale(30),
  },
});
