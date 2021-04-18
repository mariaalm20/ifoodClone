import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {Animated} from 'react-native';
const {width} = Dimensions.get('window');

const DOT_SIZE = 40;
const TICKER_HEIGHT = 24;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const ItemStyle = styled.View`
  width: ${width};
  height: 700;
  align-items: center;
  border-bottom-left-radius: 200;
`;

export const ImageContainer = styled.View`
  width: ${width};
  height: ${width * 0.6};
  background-color: #ea1d2c;
  border-bottom-left-radius: 130;
  border-bottom-right-radius: 130;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

export const ImageStyle = styled(Animated.Image)`
  width: ${width * 0.5};
  height: ${width * 0.5};
  position: absolute;
  top: ${width * 0.3};
`;

export const pricess = styled.View`
  height: width * 0.5;
  position: absolute;
  top: width;
`;

export const TextContainer = styled.View`
  align-self: flex-start;
  justify-content: center;
  margin-left: 16;
  flex: 1;
`;

export const Description = styled(Animated.Text)`
  color: #ccc;
  font-weight: 600;
  text-align: left;
  width: ${width * 0.9};
  margin-left: 10;
  font-size: 16;
  line-height: ${16 * 1.5};
`;

export const Pagination = styled.View`
  bottom: 10;
  flex-direction: row;
  height: ${DOT_SIZE};
`;

export const PaginationDot = styled.View`
  width: ${DOT_SIZE * 0.3};
  height: ${DOT_SIZE * 0.3};
  border-radius: ${DOT_SIZE * 0.2};
  background-color: #ea1d2c;
`;

export const PaginationDotContainer = styled.View`
  width: ${DOT_SIZE};
  align-items: center;
  justify-content: center;
`;

export const PaginationIndicator = styled(Animated.View)`
  width: ${DOT_SIZE};
  height: ${DOT_SIZE};
  border-radius: ${DOT_SIZE / 2};
  border-width: 2;
  border-color: #ea1d2c;
  position: absolute;
`;

export const TickerText = styled.Text`
  color: #f2f2f2;
  justify-content: center;
  font-size: ${TICKER_HEIGHT};
  line-height: ${TICKER_HEIGHT};
  font-weight: bold;
  font-family: 'RedHatDisplay-Medium';
  top: 50;
`;

export const Title = styled.Text`
  color: #3f3e3e;
  font-size: 18;
  font-family: 'RedHatDisplay-Bold';
  margin-left: 10px;
`;

export const Price = styled.View`
  position: absolute;
  top: ${width * 0.8};
  height: ${width * 0.1};
  border-style: solid;
  border-width: 1px;
  border-color: #eeee;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #ea1d2c;
  margin-right: 10px;
  elevation: 6;
`;

export const TitlePrice = styled.Text`
  font-size: 18px;
  color: #f2f2f2;
  font-family: 'RedHatDisplay-Bold';
`;

export const ButtonAddCart = styled.TouchableOpacity`
  width: ${width * 0.15};
  height: ${width * 0.15};
  background-color: #ea1d2c;
  align-self: flex-end;
  margin-right: 10px;
  border-radius: ${width * 0.1};
  elevation: 8;
  align-items: center;
  justify-content: center;
`;
