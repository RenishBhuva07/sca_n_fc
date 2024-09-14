import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../Screens/Splash/Splash';
import Dashboard from '../Screens/Dashboard/Dashboard';

const Stack = createStackNavigator();

const CoreAppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName="Splash">
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default CoreAppStack;