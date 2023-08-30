import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {authState.isLoggedIn ? (
        <Text style={{...styles.title, paddingTop: 15}}>Ya estas logeado</Text>
      ) : (
        <Button title="Sign In" onPress={signIn} />
      )}
    </View>
  );
};
