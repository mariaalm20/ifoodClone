import React from 'react';
import {View, FlatList} from 'react-native';
import ListShops from './Item';
import {shops} from '../../utils/data';
import {Title} from './styles';

const Shops = () => {
  const renderRow = ({item: shop}) => {
    return (
      <ListShops
        key={shop.key}
        image={shop.image}
        avaliation={shop.avaliation}
        category={shop.category}
        distance={shop.distance}
        price={shop.price}
        time={shop.time}
        title={shop.title}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <Title>Lojas</Title>
      <FlatList data={shops} renderItem={renderRow} />
    </View>
  );
};

export default Shops;
