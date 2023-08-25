import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
};
