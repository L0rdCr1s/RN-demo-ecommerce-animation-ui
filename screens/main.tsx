import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Cart from 'screens/cart';
import Discover from 'screens/discover';

const Stack = createStackNavigator();

const Main: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name={'Discover'} component={Discover} />
      <Stack.Screen name={'Cart'} component={Cart} />
    </Stack.Navigator>
  );
};

export default Main;
