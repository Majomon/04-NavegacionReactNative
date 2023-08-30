import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

const TouchableIcon = ({iconName}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Text>
        <Icon name={iconName} size={70} color={colores.primary} />;
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
