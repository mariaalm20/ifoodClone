import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderItemRight = () => {
  return (
    <View style={{paddingRight: 10}}>
      <Icon name="qr-code" color="#EA1D2C" size={16} />
    </View>
  );
};

export default HeaderItemRight;
