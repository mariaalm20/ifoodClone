import styled from 'styled-components/native';
import * as colors from '../../Themes/Colors';

export const ContainerLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerRight = styled.View`
  padding-right: 10px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-family: 'RedHatDisplay-Medium';
`;
