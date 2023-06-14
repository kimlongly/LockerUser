import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from '../Utils/NavigationHelper';
import TabNavigation from './TabNavigation';
import ScreenConstant from '../constants/ScreenConstant';
const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ScreenConstant.Tabs.name}
        // initialRouteName={ScreenConstant.SplashScreen}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.Tabs.name}
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
