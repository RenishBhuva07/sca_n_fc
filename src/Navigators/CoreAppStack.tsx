import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../Screens/Splash/Splash';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Intro from '../Screens/Intro/Intro';
import BottomTab from '../CommonComponents/BottomTabBar/BottomTabBar';

const Stack = createStackNavigator();

const CoreAppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName="Splash">
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'BottomTab'} component={BottomTab} />
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      <Stack.Screen name={'Intro'} component={Intro} />
    </Stack.Navigator>
  );
};

export default CoreAppStack;