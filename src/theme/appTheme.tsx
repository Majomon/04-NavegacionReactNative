import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  containerPersona: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 50,
  },
  menuBtn: {
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
    color: 'black',
  },
});
