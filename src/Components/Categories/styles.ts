import styled from 'styled-components/native';
import * as colors from '../../Themes/Colors';

interface IMarket {
  isMarket: boolean;
}
export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const CategoryImage = styled.Image<IMarket>`
  width: ${props => (props.isMarket ? 80 : 85)};
  height: ${props => (props.isMarket ? 55 : 65)};
`;

export const Title = styled.Text`
  font-family: 'RedHatDisplay-Medium';
  font-size: 12px;
  margin-top: 8px;
  color: ${colors.textPrimary};
`;
