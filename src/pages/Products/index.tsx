import React from 'react';
import {Dimensions, StatusBar, Animated} from 'react-native';
import data from './data';
import Categories from '../../Components/Categories';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Price,
  TitlePrice,
  Title,
  ButtonAddCart,
  ImageStyle,
  Container,
  Description,
  ItemStyle,
  Pagination as Paginate,
  PaginationDot,
  PaginationDotContainer,
  PaginationIndicator,
  TextContainer,
  TickerText,
  ImageContainer,
} from './styles';

const {width} = Dimensions.get('window');
const DOT_SIZE = 40;

const Item = ({imageUri, type, description, index, scrollX, price}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.7, 0, -width * 0.7],
  });

  return (
    <ItemStyle>
      <ImageContainer>
        <TickerText>{type}</TickerText>
        <ImageStyle
          source={imageUri}
          style={[
            {
              transform: [{scale}],
            },
          ]}
        />
        <Price>
          <TitlePrice>R$ {price}</TitlePrice>
        </Price>
      </ImageContainer>

      <TextContainer>
        <SafeAreaView style={{marginTop: width * 0.56}}>
          <Title>Igredientes</Title>
          <Categories />
          <Title style={{marginTop: 20}}>Descrição</Title>
          <Description
            style={[
              {
                transform: [
                  {
                    translateX: translateXDescription,
                  },
                ],
              },
            ]}>
            {description}
          </Description>
        </SafeAreaView>
      </TextContainer>
    </ItemStyle>
  );
};

const AddCart = () => {
  return (
    <ButtonAddCart>
      <Icon name="add" size={32} color="#fff" />
    </ButtonAddCart>
  );
};

const Pagination = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <Paginate>
      <PaginationIndicator
        style={[
          {
            transform: [{translateX}],
          },
        ]}
      />
      {data.map(item => {
        return (
          <PaginationDotContainer key={item.key}>
            <PaginationDot />
          </PaginationDotContainer>
        );
      })}
    </Paginate>
  );
};

export default function Products() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <StatusBar style="auto" hidden />
      <Animated.FlatList
        keyExtractor={item => item.key}
        data={data}
        renderItem={({item, index}) => (
          <Item {...item} index={index} scrollX={scrollX} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      />
      <AddCart />
      <Pagination scrollX={scrollX} />
    </Container>
  );
}
