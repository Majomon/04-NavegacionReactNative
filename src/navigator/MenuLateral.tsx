import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SettingsScreen} from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        {/*        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuBtn}>
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{
            ...styles.menuBtn,
            flexDirection: 'row',
          }}>
          <Text>
            <Icon name="compass-outline" size={25} color="black" />;
          </Text>
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={{
            ...styles.menuBtn,
            flexDirection: 'row',
          }}>
          <Text>
            <Icon name="cog-outline" size={25} color="black" />;
          </Text>
          <Text style={styles.menuTexto}>Configuración</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
