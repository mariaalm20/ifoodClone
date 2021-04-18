import React from 'react';
import {View, ScrollView} from 'react-native';
import {Container, Title} from './styles';
import {filters} from '../../utils/data';
import {listItems} from '../../utils/functions';

interface IFilters {
  key: number;
  name: string;
}

const Filters = () => {
  const list = listItems(filters);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}>
        {list.map((item: IFilters) => {
          return (
            <Container key={item.key}>
              <Title>{item.name}</Title>
            </Container>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Filters;
