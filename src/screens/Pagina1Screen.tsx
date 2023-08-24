import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a la página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      {/*      <Button
        title="Ir a la persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
      <Text>Navegar con argumentos</Text>
      <View style={styles.contenedor}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Mauri',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Mauri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
