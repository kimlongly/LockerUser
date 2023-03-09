import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import COLORS from '../Constant/Colors';
import ScreenConstant from '../Constant/ScreenConstant';
import {moderateScale} from 'react-native-size-matters';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import {Platform} from 'react-native';
import CustomTabItem from '../Components/CustomTabsItem';
import {ICON_ASSETS} from '../Assets/IconAssets';
import TrackingParcelScreen from '../Screen/TrackingParcelScreen/TrackingParcelScreen';
import ShippingServiceScreen from '../Screen/ShippingServiceScreen/ShippingServiceScreen';
import ReportScreen from '../Screen/ReportScreen/ReportScreen';
import AccountScreen from '../Screen/AccountScreen/AccountScreen';
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
          header: () => {},
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
          header: () => {},
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
