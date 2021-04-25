import React from 'react';
import Categories from '../../Categories';
import Promotions from '../../Promotions';
import Shops from '../../Shops';
import {Container} from './styles';

const RestaurantesTab: React.FC = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Categories isMarket isMain />
      <Promotions isMarket />
      <Shops />
    </Container>
  );
};

export default RestaurantesTab;
