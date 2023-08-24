import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

/* import {useNavigation} from '@react-navigation/core'; */
import {styles} from '../theme/appTheme';
import {useEffect} from 'react';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  /*  const navigator = useNavigation(); */
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      /*       headerBackTitle: 'Atras', */
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      {/*     <Button
        title="Ir a la página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      /> */}
      <Button
        title="Ir a la página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
