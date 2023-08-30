import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {colores, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colores.primary} />;
        <Icon name="aperture-outline" size={80} color={colores.primary} />;
        <Icon
          name="game-controller-outline"
          size={80}
          color={colores.primary}
        />
        ;
        <Icon name="leaf-outline" size={80} color={colores.primary} />;
        <Icon name="planet-outline" size={80} color={colores.primary} />;
        <Icon name="fast-food-outline" size={80} color={colores.primary} />;
      </Text>
    </View>
  );
};

export default Tab1Screen;
