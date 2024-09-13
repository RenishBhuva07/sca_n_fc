import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../Screens/Splash/Splash';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Details from '../Screens/Details';

const Stack = createStackNavigator();

const CoreAppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName="Splash">
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      <Stack.Screen name={'Details'} component={Details} />
    </Stack.Navigator>
  );
};

export default CoreAppStack;