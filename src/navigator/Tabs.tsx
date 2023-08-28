import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import {colores} from '../theme/appTheme';
import {StackNavigator} from './StackNavigator';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      /* Toda la escena/pagina */
      sceneContainerStyle={{
        backgroundColor: 'violet',
      }}
      /* Propio de los tabs */
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon({color, focused, size}) {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
          // Para tenerlo como referencia
          /*        tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>, */
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
