import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Container, PromotionImage} from './styles';
import {promotions} from '../../utils/data';

interface IFilters {
  restaurante: [
    {
      key?: number;
      image: string;
    },
  ];
  mercado: [
    {
      key?: number;
      image: string;
    },
  ];
}

interface IProps {
  isMarket?: boolean;
}

const Promotions: React.FC<IProps> = ({isMarket}) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}>
        {promotions.map((item: IFilters) => {
          return !isMarket
            ? item.restaurante.map(i => (
                <Container key={i.key}>
                  <PromotionImage source={i.image} />
                </Container>
              ))
            : item.mercado.map(i => (
                <Container key={i.key}>
                  <PromotionImage source={i.image} />
                </Container>
              ));
        })}
      </ScrollView>
    </View>
  );
};

export default Promotions;
