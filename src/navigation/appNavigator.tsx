import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './navigationUtilities';

import {ParamList, Screens} from './screensParams';
import {Panel} from '../screens/Panel/Panel';
 import {List} from '../screens/List/List';

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator<ParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name={Screens.Panel} component={Panel} />
        <Tab.Screen name={Screens.List} component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
