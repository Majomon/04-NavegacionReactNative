import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color="#900" />;
      </Text>
    </View>
  );
};

export default Tab1Screen;
