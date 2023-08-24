import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useEffect} from 'react';
import {RootStackParams} from '../navigator/StackNavigator';

/* interface RouteParams {
  id: number;
  name: string;
} */
// Primero el type"StackScreenProps" , luego nombre de la ruta "PersonaScreen"
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  /*   const params = route.params as RouteParams;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params.name]); */
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {JSON.stringify(params, null, 3)}</Text>
      <Button title="Volver" onPress={() => navigation.popToTop()} />
    </View>
  );
};
