import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import {Platform} from 'react-native';
import TrackingParcelScreen from '../screen/TrackingParcelScreen/TrackingParcelScreen';
import ShippingServiceScreen from '../screen/ShippingServiceScreen/ShippingServiceScreen';
import ReportScreen from '../screen/ReportScreen/ReportScreen';
import AccountScreen from '../screen/AccountScreen/AccountScreen';
import COLORS from '../constants/Colors';
import ScreenConstant from '../constants/ScreenConstant';
import CustomTabItem from '../components/CustomTabsItem';
import {ICON_ASSETS} from '../assets/IconAssets';
const Tabs = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName={ScreenConstant.Tabs.Home}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          elevation: 1,
          height: Platform.OS === 'ios' ? 75 : 60,
        },
      }}>
      <Tabs.Screen
        name={ScreenConstant.Tabs.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              icon={
                <ICON_ASSETS.Home
                  height={moderateScale(35)}
                  width={moderateScale(35)}
                  fill={focused ? COLORS.ORANGE : COLORS.LIGHTINACTIVE}
                />
              }
              label="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={ScreenConstant.Tabs.Tracking}
        component={TrackingParcelScreen}
        options={{
          headerShown: false,
          title: 'Tracking',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              icon={
                <ICON_ASSETS.Home
                  height={moderateScale(35)}
                  width={moderateScale(35)}
                  fill={focused ? COLORS.ORANGE : COLORS.LIGHTINACTIVE}
                />
              }
              label="Tracking"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={ShippingServiceScreen}
        name={ScreenConstant.Tabs.Booking}
        options={{
          headerShown: false,
          title: 'Booking',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              icon={
                <ICON_ASSETS.Home
                  height={moderateScale(35)}
                  width={moderateScale(35)}
                  fill={focused ? COLORS.ORANGE : COLORS.LIGHTINACTIVE}
                />
              }
              label="Booking"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={ScreenConstant.Tabs.Report}
        component={ReportScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              label="Report"
              focused={focused}
              icon={
                <ICON_ASSETS.Home
                  fill={focused ? COLORS.ORANGE : COLORS.LIGHTINACTIVE}
                  height={moderateScale(35)}
                  width={moderateScale(35)}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name={ScreenConstant.Tabs.Account}
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              label="Account"
              focused={focused}
              icon={
                <ICON_ASSETS.Home
                  fill={focused ? COLORS.ORANGE : COLORS.LIGHTINACTIVE}
                  height={moderateScale(35)}
                  width={moderateScale(35)}
                />
              }
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
