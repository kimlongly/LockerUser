import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {navigationRef} from '../utils/NavigationHelper';
import TabNavigation from './TabNavigation';
import ScreenConstant from '../constants/ScreenConstant';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import LoginScreen from '../screen/AuthenticationScreen/LoginScreen';
import RegisterScreen from '../screen/AuthenticationScreen/RegisterScreen';
import ResetPasswordScreen from '../screen/AuthenticationScreen/ResetPasswordScreen';
import ProfileScreen from '../screen/ProfileScreen/ProfileScreen';
import HelpScreen from '../screen/HelpScreen/HelpScreen';
import PatchNoteScreen from '../screen/PatchNoteScreen/PatchNoteScreen';
import {Animated} from 'react-native';
const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default function RootNavigation() {
  const animation = useRef(new Animated.Value(0)).current;
  const forFade = ({current, next}: any) => {
    console.log(current, next);
    return {
      cardStyle: {},
    };
  };
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
            headerShown: false,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
