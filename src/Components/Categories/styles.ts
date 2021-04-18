import styled from 'styled-components/native';

interface IMarket {
  isMarket: boolean;
}
export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 10px;
`;

export const CategoryImage = styled.Image<IMarket>`
  width: ${props => (props.isMarket ? 80 : 85)};
  height: ${props => (props.isMarket ? 55 : 65)};
`;

export const Title = styled.Text`
  color: #a6a29f;
  font-size: 12px;
  margin-top: 8px;
  font-family: 'RedHatDisplay-Medium';
`;
