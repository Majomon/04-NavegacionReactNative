import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useEffect} from 'react';

interface Props extends StackScreenProps<any, any> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.name,
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {JSON.stringify(params, null, 3)}</Text>
      <Button title="Volver" onPress={() => navigation.popToTop()} />
    </View>
  );
};
