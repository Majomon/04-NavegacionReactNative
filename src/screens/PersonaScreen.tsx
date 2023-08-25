import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

/* Alternativa */
/* interface RouteParams {
  id: number;
  name: string;
} */

// Primero el type"StackScreenProps" , luego nombre de la ruta "PersonaScreen"
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  /* Alternativa */
  /*   const params = route.params as RouteParams; */

  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
