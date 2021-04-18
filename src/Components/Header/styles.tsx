import styled from 'styled-components/native';
import {Colors} from '../../Themes';

interface IColor {
  color: typeof Colors;
}
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<IColor>`
  color: #000;
  font-size: 16px;
  font-family: 'RedHatDisplay-Medium';
`;
