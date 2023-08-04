import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import DeliveryBookingSections from './sections/DeliveryBookingSections';
import LockerBookingSections from './sections/LockerBookingSections';
import COLORS from '../../constants/Colors';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';

const Tab = createMaterialTopTabNavigator();

export default function BookingHistoryScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPressColor: COLORS.BLACK,
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.LIGHTINACTIVE,
        tabBarStyle: {
          elevation: 1,
          shadowColor: COLORS.WHITE,
          backgroundColor: COLORS.BLACK,
        },
        tabBarIndicatorStyle: {backgroundColor: COLORS.WHITE},
        tabBarLabelStyle: {
          fontSize: FONTS_SIZE.font14,
          fontFamily: FONTS.SEMIBOLD,
        },
      }}>
      <Tab.Screen name="Locker" component={LockerBookingSections} />
      <Tab.Screen name="Delivery" component={DeliveryBookingSections} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
