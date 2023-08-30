import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {colores} from '../theme/appTheme';

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
              iconName = 'skull-outline';
              break;
            case 'ContactsScreen':
              iconName = 'snow-outline';
              break;
            case 'AlbumsScreen':
              iconName = 'logo-react';
              break;
            default:
              return;
          }

          return <Icon name={iconName} size={25} color={color} />;
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
