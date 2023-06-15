import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from '../utils/NavigationHelper';
import TabNavigation from './TabNavigation';
import ScreenConstant from '../constants/ScreenConstant';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import LoginScreen from '../screen/AuthenticationScreen/LoginScreen';
import RegisterScreen from '../screen/AuthenticationScreen/RegisterScreen';
import ResetPasswordScreen from '../screen/AuthenticationScreen/ResetPasswordScreen';
const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName={ScreenConstant.Tabs.name}
        initialRouteName={ScreenConstant.SplashScreen}>
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
            headerShown: false,
          }}
          name={ScreenConstant.Auth.Login}
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.Auth.Register}
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.Auth.ResetPassword}
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}