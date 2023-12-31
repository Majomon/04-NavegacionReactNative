import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from '../screens/Tab1Screen';
import {colores} from '../theme/appTheme';
import {MenuTopTab} from './MenuTopTab';
import {StackNavigator} from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'game-controller-outline';
              break;
            case 'MenuTopTab':
              iconName = 'leaf-outline';
              break;
            case 'StackNavigator':
              iconName = 'planet-outline';
              break;
            default:
              return;
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="MenuTopTab"
        options={{title: 'Tab2'}}
        component={MenuTopTab}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

// PAra IOS
/* const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      // Toda la escena/pagina
      sceneContainerStyle={{
        backgroundColor: 'violet',
      }}
      // Propio de los tabs
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
        tabBarIcon({color}) {
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
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>
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
}; */
