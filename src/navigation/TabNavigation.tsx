import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {ICON_ASSETS} from '../assets/IconAssets';
import CustomTabItem from '../components/CustomTabsItem';
import COLORS from '../constants/Colors';
import ScreenConstant from '../constants/ScreenConstant';
import AccountScreen from '../screen/AccountScreen/AccountScreen';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import BookingHistoryScreen from '../screen/BookingHistoryScreen/BookingHistoryScreen';
import HomeTabBarButton from '../components/HomeTabBarButton';
import HomeHeader from '../components/header/HomeHeader';
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
          borderRadius: moderateScale(10),
          position: 'absolute',
          backgroundColor: COLORS.BLACK,
          elevation: 6,
          height: Platform.OS === 'ios' ? 75 : 60,
          paddingBottom: 0,
        },
      }}>
      <Tabs.Screen
        name={ScreenConstant.Tabs.Report}
        component={BookingHistoryScreen}
        options={{
          headerShown: false,
          title: 'History',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              icon={
                <ICON_ASSETS.List
                  height={moderateScale(25)}
                  width={moderateScale(25)}
                  fill={focused ? COLORS.BLACK : COLORS.WHITE}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={HomeScreen}
        name={ScreenConstant.Tabs.Home}
        options={{
          header: () => <HomeHeader />,
          title: 'Booking',
          tabBarIcon: ({focused}) => (
            <HomeTabBarButton
              icon={
                <ICON_ASSETS.Ticket
                  height={moderateScale(30)}
                  width={moderateScale(30)}
                  fill={focused ? COLORS.BLACK : COLORS.WHITE}
                />
              }
              focused={focused}
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
              focused={focused}
              icon={
                <ICON_ASSETS.Profile
                  fill={focused ? COLORS.BLACK : COLORS.WHITE}
                  height={moderateScale(25)}
                  width={moderateScale(25)}
                />
              }
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
