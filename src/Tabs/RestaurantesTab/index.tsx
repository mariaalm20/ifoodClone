import React from 'react';
import Filters from '../../Filters';
import Categories from '../../Categories';
import Promotions from '../../Promotions';
import Shops from '../../Shops';
import {Container} from './styles';

const RestaurantesTab: React.FC = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Filters />
      <Categories isMain />
      <Promotions />
      <Shops />
    </Container>
  );
};

export default RestaurantesTab;
