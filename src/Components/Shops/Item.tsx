import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  ContainerInfo,
  ContentLeft,
  ContentRight,
  InfoProduct,
  InfoShop,
  ContainerAvaliation,
  Title,
  Subtitle,
  LogoShop,
  Separator,
  ContainerLogo,
} from './styles';

interface IShop {
  key: number;
  title: number;
  avaliation: number;
  category: string;
  distance: number;
  time: string;
  price: number;
  image: ImageSourcePropType;
}

const Item: React.FC<IShop> = ({
  title,
  avaliation,
  category,
  distance,
  key,
  time,
  price,
  image,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Products');
  };

  return (
    <Container onPress={() => handlePress()} key={key}>
      <ContentRight>
        <ContainerLogo>
          <LogoShop source={image} />
        </ContainerLogo>
        <ContainerInfo>
          <Title isList>{title}</Title>
          <InfoShop>
            <ContainerAvaliation>
              <Icon name="star" color="#FFB761" />
              {/* eslint-disable-next-line prettier/prettier*/}
              <Subtitle isAvaliation>{' '} {avaliation}</Subtitle>
            </ContainerAvaliation>
            <Separator name="ios-ellipse" color="#A6A29F" size={5} />
            <Subtitle>{category}</Subtitle>
            <Separator name="ios-ellipse" color="#A6A29F" size={5} />
            <Subtitle>{distance} km</Subtitle>
          </InfoShop>
          <InfoProduct>
            <Subtitle>{time} min</Subtitle>
            <Separator name="ios-ellipse" color="#A6A29F" size={5} />
            <Subtitle>R$ {price}</Subtitle>
          </InfoProduct>
        </ContainerInfo>
      </ContentRight>
      <ContentLeft>
        <Icon name="heart-outline" size={20} color="#A6A29F" />
      </ContentLeft>
    </Container>
  );
};

export default Item;
