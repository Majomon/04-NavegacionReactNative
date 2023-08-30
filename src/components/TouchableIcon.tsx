import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores} from '../theme/appTheme';

interface Props {
  iconName: string;
}

const TouchableIcon = ({iconName}: Props) => {
  return (
    <TouchableOpacity onPress={() => console.log(iconName)}>
      <Text>
        <Icon name={iconName} size={70} color={colores.primary} />;
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
