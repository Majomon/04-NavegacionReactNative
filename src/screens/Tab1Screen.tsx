import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import TouchableIcon from '../components/TouchableIcon';
import {styles} from '../theme/appTheme';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="game-controller-outline" />
        <TouchableIcon iconName="leaf-outline" />
        <TouchableIcon iconName="planet-outline" />
        <TouchableIcon iconName="fast-food-outline" />;
      </Text>
    </View>
  );
};

export default Tab1Screen;
