import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../Screens/Splash/Splash';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Intro from '../Screens/Intro/Intro';
import BottomTab from '../CommonComponents/BottomTabBar/BottomTabBar';
import History from '../Screens/History/History';
import GenerateQR from '../Screens/GenerateQR/GenerateQR';

const Stack = createStackNavigator();

const CoreAppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'Intro'} component={Intro} />
      <Stack.Screen name={'BottomTab'} component={BottomTab} />
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      <Stack.Screen name={'History'} component={History} />
      <Stack.Screen name={'GenerateQR'} component={GenerateQR} />
    </Stack.Navigator>
  );
};

export default CoreAppStack;