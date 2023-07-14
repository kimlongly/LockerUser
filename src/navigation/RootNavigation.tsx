import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {Animated} from 'react-native';
import Header from '../components/header/Header';
import ScreenConstant from '../constants/ScreenConstant';
import LoginScreen from '../screen/AuthenticationScreen/LoginScreen';
import RegisterScreen from '../screen/AuthenticationScreen/RegisterScreen';
import ResetPasswordScreen from '../screen/AuthenticationScreen/ResetPasswordScreen';
import ChangePasswordScreen from '../screen/ChangePasswordScreen/ChangePasswordScreen';
import HelpScreen from '../screen/HelpScreen/HelpScreen';
import PatchNoteScreen from '../screen/PatchNoteScreen/PatchNoteScreen';
import ProfileScreen from '../screen/ProfileScreen/ProfileScreen';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import {navigationRef} from '../utils/NavigationHelper';
import TabNavigation from './TabNavigation';
const Stack = createStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          animationTypeForReplace: 'push',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 400,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 400,
              },
            },
          },
        }}
        // initialRouteName={ScreenConstant.Tabs.name}
        initialRouteName={ScreenConstant.SplashScreen}>
        <Stack.Screen
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
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
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
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
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.Profile}
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            header: () => <Header headerTitle="Help" />,
          }}
          name={ScreenConstant.Help}
          component={HelpScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.PatchNote}
          component={PatchNoteScreen}
        />
        <Stack.Screen
          options={{
            header: () => <Header headerTitle="Change Password" />,
          }}
          name={ScreenConstant.ChangePassword}
          component={ChangePasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
