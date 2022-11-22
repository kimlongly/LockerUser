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
        headerStyle: {
          borderBottomRightRadius: moderateScale(2),
          borderBottomLeftRadius: moderateScale(2),
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
          height: Platform.OS === 'ios' ? 75 : 60,
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Tabs.Screen
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="Home"
              icon={
                <IconAssets.Home
                  width={focused ? moderateScale(30) : moderateScale(25)}
                  height={focused ? moderateScale(30) : moderateScale(25)}
                />
              }
            />
          ),
        }}
        name={ScreenConstant.Tabs.Home}
        component={HomeScreen}
      />
    </Tabs.Navigator>
  );
}
