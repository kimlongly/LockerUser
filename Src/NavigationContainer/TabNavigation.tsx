import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import COLORS from '../Constant/Colors';
import ScreenConstant from '../Constant/ScreenConstant';
import {moderateScale} from 'react-native-size-matters';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import {Platform} from 'react-native';
import CustomTabItem from '../Components/CustomTabsItem';
import {ICON_ASSETS} from '../Assets/IconAssets';

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
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 75 : 60,
        },
      }}>
      <Tabs.Screen
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
        name={ScreenConstant.Tabs.Home}
        component={HomeScreen}
      />
    </Tabs.Navigator>
  );
}
