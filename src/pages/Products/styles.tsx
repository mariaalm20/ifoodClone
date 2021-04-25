import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {Animated} from 'react-native';
import * as colors from '../../Themes/Colors';

const {width} = Dimensions.get('window');

const DOT_SIZE = 40;
const TICKER_HEIGHT = 24;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

export const ItemStyle = styled.View``;

export const ImageContainer = styled.View`
  background-color: ${colors.primary};
  width: ${width};
  height: ${width * 0.6};
  border-bottom-left-radius: 130;
  border-bottom-right-radius: 130;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const ImageStyle = styled(Animated.Image)`
  width: ${width * 0.5};
  height: ${width * 0.5};
  position: absolute;
  top: ${width * 0.3};
`;

export const TextContainer = styled.View`
  align-self: flex-start;
  flex: 1;
  justify-content: center;
  margin-left: 16px;
`;

export const Description = styled(Animated.Text)`
  color: #ccc;
  width: ${width * 0.9};
  margin-left: 10;
  line-height: ${16 * 1.5};
  font-size: 16px;
`;

export const Pagination = styled.View`
  bottom: 10;
  height: ${DOT_SIZE};
  flex-direction: row;
`;

export const PaginationDot = styled.View`
  width: ${DOT_SIZE * 0.3};
  height: ${DOT_SIZE * 0.3};
  border-radius: ${DOT_SIZE * 0.2};
  background-color: ${colors.primary};
`;

export const PaginationDotContainer = styled.View`
  width: ${DOT_SIZE};
  align-items: center;
  justify-content: center;
`;

export const PaginationIndicator = styled(Animated.View)`
  width: ${DOT_SIZE};
  height: ${DOT_SIZE};
  border-color: ${colors.primary};
  border-width: 2;
  border-radius: ${DOT_SIZE / 2};
  position: absolute;
`;

export const NameProduct = styled.Text`
  color: ${colors.light};
  font-size: ${TICKER_HEIGHT};
  font-weight: bold;
  top: 50;
`;

export const Title = styled.Text`
  color: ${colors.grey};
  font-family: 'RedHatDisplay-Bold';
  font-size: 18px;
  margin-left: 10px;
`;

export const TitleDescription = styled(Title)`
  margin-top: 20px;
`;

export const Price = styled.View`
  position: absolute;
  top: ${width * 0.8};
  background-color: ${colors.primary};
  width: ${width * 0.3};
  height: ${width * 0.1};
  border-style: solid;
  border-color: ${colors.lightGrey};
  border-width: 2px;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 4px;
  padding-bottom: 4px;
  justify-content: center;
  align-items: center;
  elevation: 6;
`;

export const TitlePrice = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-family: 'RedHatDisplay-Bold';
`;

export const ButtonAddCart = styled.TouchableOpacity`
  background-color: ${colors.primary};
  width: ${width * 0.15};
  height: ${width * 0.15};
  border-radius: ${width * 0.1};
  align-self: flex-end;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  elevation: 8;
`;
