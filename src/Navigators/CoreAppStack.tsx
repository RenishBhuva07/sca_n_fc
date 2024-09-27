import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../Screens/Splash/Splash';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Intro from '../Screens/Intro/Intro';
import BottomTab from '../CommonComponents/BottomTabBar/BottomTabBar';
import History from '../Screens/History/History';
import GenerateQR from '../Screens/GenerateQR/GenerateQR';
import Settings from '../Screens/Settings/Settings';
import Details from '../Screens/Details/Details';
import ShowQR from '../Screens/ShowQR/ShowQR';

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
      <Stack.Screen name={'Settings'} component={Settings} />
      <Stack.Screen name={'Details'} component={Details} />
      <Stack.Screen name={'ShowQR'} component={ShowQR} />
    </Stack.Navigator>
  );
};

export default CoreAppStack;