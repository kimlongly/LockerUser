import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import COLORS from '../Constant/Colors';
import FONTS from '../Constant/FontsConstant';
import ScreenConstant from '../Constant/ScreenConstant';
import {moderateScale} from 'react-native-size-matters';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import {Platform} from 'react-native';
import CustomTabItem from '../Components/CustomTabsItem';

const Tabs = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName={ScreenConstant.Tabs.Home}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: true,
        headerTitleStyle: {
          color: COLORS.white,
          fontFamily: FONTS.REGULAR,
        },
        headerTitleAlign: 'center',
        headerStyle: {
          height: moderateScale(65),
          borderBottomRightRadius: moderateScale(20),
          borderBottomLeftRadius: moderateScale(20),
          backgroundColor: COLORS.primary,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderTopLeftRadius: moderateScale(20),
          borderTopRightRadius: moderateScale(20),
          height: Platform.OS === 'ios' ? 75 : 60,
          backgroundColor: '#FFFFFF',
          shadowColor: '#FFFFFF',
        },
      }}>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Home',
        }}
        name={ScreenConstant.Tabs.Home}
        component={HomeScreen}
      />
    </Tabs.Navigator>
  );
}
