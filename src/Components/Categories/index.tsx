import React from 'react';
import {View, ScrollView} from 'react-native';
import {Container, Title, CategoryImage} from './styles';
import {categories} from '../../utils/data';

interface ICategories {
  restaurante: [
    {
      key: number;
      title: string;
      image: ImageSourcePropType;
    },
  ];
  mercado: [
    {
      key: number;
      title: string;
      image: ImageSourcePropType;
    },
  ];
  product: [
    {
      key: number;
      title: string;
      image: ImageSourcePropType;
    },
  ];
}

export interface IProps {
  isMarket?: boolean;
  isMain?: boolean;
}

const Categories: React.FC<IProps> = ({isMarket, isMain}) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}>
        {categories.map(item => {
          return isMain
            ? item.tabs.map(shoop =>
                !isMarket
                  ? shoop.restaurante.map(i => (
                      <Container>
                        <CategoryImage source={i.image} />
                        <Title>{i.title}</Title>
                      </Container>
                    ))
                  : shoop.mercado.map(i => (
                      <Container key={i.key}>
                        <CategoryImage isMarket source={i.image} />
                        <Title>{i.title}</Title>
                      </Container>
                    )),
              )
            : item.products.map(i => (
                <Container>
                  <CategoryImage source={i.image} />
                  <Title>{i.title}</Title>
                </Container>
              ));
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
