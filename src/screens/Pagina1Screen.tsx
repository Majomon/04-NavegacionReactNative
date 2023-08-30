import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

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
        title="Ir a Persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
      <Text style={{...styles.title, marginVertical: 20}}>
        Navegar con argumentos
      </Text>
      <View style={styles.containerPersona}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Maria',
            })
          }>
          <Text>
            <Icon
              name="woman-outline"
              size={35} /* color={colores.primary} */
            />
          </Text>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Mauri',
            })
          }>
          <Text>
            <Icon
              name="accessibility-outline"
              size={35}
              /*         color="{colores.primary}" */
            />
          </Text>
          <Text style={styles.botonGrandeTexto}>Mauri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
