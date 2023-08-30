import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const MenuTopTab = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarLabelStyle: {fontSize: 12},
        //Color de la opción activa
        tabBarIndicatorStyle: {backgroundColor: 'orange'},
        // Cambiar el color cuando se presiona el boton
        tabBarPressColor: colores.primary,
        // Color del fondo
        // tabBarStyle: {backgroundColor: 'yellow'},
        tabBarPressOpacity: 1,
        // Para dejar espacio de los iconos
        tabBarShowIcon: true,
        tabBarStyle: {
          /*           borderTopColor: colores.primary, */
          //Para quitar la linea debajo de todos las navegaciones de TopTab
          shadowColor: 'transparent',
          //Color de fondo del contenedor de nevagación
          backgroundColor: '#FFFFFF',
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'Ch';
              break;
            case 'ContactsScreen':
              iconName = 'Co';
              break;
            case 'AlbumsScreen':
              iconName = 'Al';
              break;
            default:
              return;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen 
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{title: 'Contact'}}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{title: 'Albums'}}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
