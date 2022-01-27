import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';

import {store, persist} from 'store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Main from 'screens/main';
import {font} from 'assets/configs/theme';
import {setCustomText} from 'react-native-global-props';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  useEffect(() => {
    // set default global text style
    setCustomText({style: globalTextStyle});
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <SafeAreaProvider>
            <Main />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

/** Global default text style */
const globalTextStyle = {
  fontFamily: font.family.regular,
  fontSize: font.size.text,
};
