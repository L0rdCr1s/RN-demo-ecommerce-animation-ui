import {AppScreensStackParams} from 'assets/configs/routes';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Cart from 'screens/cart';
import Details from 'screens/details';
import Discover from 'screens/discover';

const Stack = createSharedElementStackNavigator<AppScreensStackParams>();

const Main: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'card',
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}>
      <Stack.Screen name="DISCOVER" component={Discover} />
      <Stack.Screen name="DETAILS" component={Details} />
      <Stack.Screen name="CART" component={Cart} />
    </Stack.Navigator>
  );
};

export default Main;
