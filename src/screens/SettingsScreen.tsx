import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.title}>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
