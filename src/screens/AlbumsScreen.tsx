import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {logout, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>
      {authState.isLoggedIn ? (
        <Button title="Desloguear" onPress={logout} />
      ) : (
        <Text style={styles.title}>No estas logueado</Text>
      )}
    </View>
  );
};
