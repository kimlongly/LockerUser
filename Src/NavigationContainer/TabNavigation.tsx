import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import COLORS from '../Constant/Colors';
import FONTS from '../Constant/FontsConstant';
import ScreenConstant from '../Constant/ScreenConstant';
import {moderateScale} from 'react-native-size-matters';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import {Platform} from 'react-native';
import CustomTabItem from '../Components/CustomTabsItem';
import IconAssets from '../Assets/IconAssets';
import DevicesScreen from '../Screen/DevicesScreen/DevicesScreen';
import ActivityScreen from '../Screen/ActivityScreen/ActivityScreen';
import AccountScreen from '../Screen/AccountScreen/AccountScreen';

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
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="Home"
              icon={
                focused ? (
                  <IconAssets.HomeActive
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                  />
                ) : (
                  <IconAssets.Home
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                  />
                )
              }
            />
          ),
        }}
        name={ScreenConstant.Tabs.Home}
        component={HomeScreen}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Devices',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="Devices"
              icon={
                focused ? (
                  <IconAssets.CameraActive
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                  />
                ) : (
                  <IconAssets.Camera
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                  />
                )
              }
            />
          ),
        }}
        component={DevicesScreen}
        name={ScreenConstant.Tabs.Devices}
      />
      <Tabs.Screen
        options={{
          headerTitle: 'Activity',
          title: 'Activity',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="Activity"
              icon={
                focused ? (
                  <IconAssets.BellActive
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                  />
                ) : (
                  <IconAssets.Bell
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                  />
                )
              }
            />
          ),
        }}
        component={ActivityScreen}
        name={ScreenConstant.Tabs.Activity}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="Account"
              icon={
                focused ? (
                  <IconAssets.Profile
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                  />
                ) : (
                  <IconAssets.Profile
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                  />
                )
              }
            />
          ),
        }}
        component={AccountScreen}
        name={ScreenConstant.Tabs.Account}
      />
    </Tabs.Navigator>
  );
}
