import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from '../Utils/NavigationHelper';
import COLORS from '../Constant/Colors';
import FONTS from '../Constant/FontsConstant';
import ScreenConstant from '../Constant/ScreenConstant';
import {moderateScale} from 'react-native-size-matters';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import TabNavigation from './TabNavigation';
import SplashScreen from '../Screen/SplashScreen/SplashScreen';
import DeviceDetailScreen from '../Screen/DeviceDetailScreen/DeviceDetailScreen';
import IconAssets from '../Assets/IconAssets';
import NavBack from '../Components/NavBack';
import CheckDeviceScreen from '../Screen/CheckDeviceScreen.tsx/CheckDeviceScreen';
import OnboardingScreen from '../Screen/OnboardingScreen/OnboardingScreen';
import SignInScreen from '../Screen/SignInScreen/SignInScreen';
import SignUpScreen from '../Screen/SignInScreen/SignUpScreen';
const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName={ScreenConstant.Tabs.name}
        initialRouteName={ScreenConstant.SplashScreen}
        screenOptions={{
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: COLORS.white, fontFamily: FONTS.REGULAR},
          headerStyle: {
            backgroundColor: COLORS.primary,
            borderBottomColor: COLORS.grey,
            borderWidth: moderateScale(0.2),
          },
        }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.Tabs.name}
          component={TabNavigation}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.SplashScreen}
          component={SplashScreen}
        />
       <Stack.Screen 
          options={{
            headerShown:false,
          }}
          name={ScreenConstant.OnboardingScreen}
          component={OnboardingScreen}
       />
       <Stack.Screen 
          options={{
            headerShown:false,
          }}
          name={ScreenConstant.SignInScreen}
          component={SignInScreen}
       />
       <Stack.Screen 
          options={{
            headerShown:false,
          }}
          name={ScreenConstant.SignUpScreen}
          component={SignUpScreen}
       />
        <Stack.Screen
          options={{
            headerTitle: 'Add Device',
            headerLeft: NavBack,
            headerStyle: {
              borderBottomLeftRadius: moderateScale(20),
              borderBottomRightRadius: moderateScale(20),
              backgroundColor: COLORS.primary,
            },
          }}
          name={ScreenConstant.DeviceDetailScreen}
          component={DeviceDetailScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Detail',
            headerLeft: NavBack,
            headerStyle: {
              borderBottomLeftRadius: moderateScale(20),
              borderBottomRightRadius: moderateScale(20),
              backgroundColor: COLORS.primary,
            },
          }}
          name={ScreenConstant.CheckDeviceScreen}
          component={CheckDeviceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
