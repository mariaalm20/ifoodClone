import styled from 'styled-components/native';
import * as colors from '../../Themes/Colors';

export const Container = styled.View`
  border-style: solid;
  border-radius: 28;
  border-width: 1px;
  border-color: ${colors.lightGrey};
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: rgba(63, 52, 61, 0.7);
  font-family: 'RedHatDisplay-Medium';
`;
