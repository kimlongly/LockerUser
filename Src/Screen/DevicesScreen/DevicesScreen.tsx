import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../Constant/Colors';
import DeviceScreenHeader from './Components/DeviceScreenHeader';
import ImageAssets from '../../Assets/ImageAssets';
import EachCamera from '../../Components/EachCamera';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../Components/SizedBox';
import NavigationHelper from '../../Utils/NavigationHelper';
import ScreenConstant from '../../Constant/ScreenConstant';

export default function DevicesScreen() {
  const handleChecking = item => {
    NavigationHelper.navigate({
      name: ScreenConstant.CheckDeviceScreen,
      params: {
        room: item.room,
        image: item.image,
      },
    });
  };

  const fakeData: any = [
    {label: 'Cam 1', room: 'House Entrance', image: ImageAssets.Interior},
    {label: 'Cam 2', room: 'Living Room', image: ImageAssets.Interior2},
    {label: 'Cam 3', room: 'Kitchen', image: ImageAssets.Interior},
    {label: 'Cam 4', room: 'Back Yard', image: ImageAssets.Interior2},
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleChecking(item)}>
        <EachCamera room={item.room} image={item.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <DeviceScreenHeader />
      <FlatList
        ItemSeparatorComponent={() => <SizedBox height={moderateScale(10)} />}
        data={fakeData}
        keyExtractor={item => item.label}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
