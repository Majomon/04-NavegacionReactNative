import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, Text, View} from 'react-native';
/* import {StackScreenProps} from '@react-navigation/stack'; */
import {styles} from '../theme/appTheme';

/* interface Props extends StackScreenProps<any, any> {} */

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      /*       headerBackTitle: 'Atras', */
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir a la página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
