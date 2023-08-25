import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateralBasico />
    </NavigationContainer>
  );
};

export default App;
