import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ContainerRight} from './styles';

const HeaderItemRight = () => {
  return (
    <ContainerRight>
      <Icon name="qr-code" color="#EA1D2C" size={16} />
    </ContainerRight>
  );
};

export default HeaderItemRight;
