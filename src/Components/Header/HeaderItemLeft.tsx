import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, Title} from './styles';

const HeaderItemLeft = () => {
  return (
    <Container>
      <Title>R. Arara, 1814</Title>
      <Icon name="chevron-down-sharp" color="#EA1D2C" size={12} />
    </Container>
  );
};

export default HeaderItemLeft;
