import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ContainerLeft, Title} from './styles';

const HeaderItemLeft = () => {
  return (
    <ContainerLeft>
      <StatusBar hidden />
      <Title>R. São Paulo, 816</Title>
      <Icon name="chevron-down-sharp" color="#EA1D2C" size={12} />
    </ContainerLeft>
  );
};

export default HeaderItemLeft;
