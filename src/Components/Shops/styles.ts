import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
  isAvaliation?: boolean;
  isList?: boolean;
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInfo = styled.View`
  margin-left: 20px;
`;

export const ContentRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerLogo = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-style: solid;
  border-width: 1px;
  border-color: #eee;
`;

export const LogoShop = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

export const ContentLeft = styled.View``;

export const InfoShop = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoProduct = styled(InfoShop)`
  margin-top: 6px;
`;

export const ContainerAvaliation = styled(InfoShop)`
  align-items: center;
`;

export const Title = styled.Text<IProps>`
  color: #3f3e3e;
  font-size: ${props => (props.isList ? 16 : 18)};
  font-family: ${props =>
    props.isList ? 'RedHatDisplay-Medium' : 'RedHatDisplay-Bold'};
  margin-left: ${props => (props.isList ? 0 : 12)};
  margin-top: ${props => (props.isList ? 0 : 12)};
`;

export const Subtitle = styled.Text<IProps>`
  color: ${props => (props.isAvaliation ? '#FFB761' : '#A6A29F')};
  font-size: 13px;
  font-family: 'RedHatDisplay-Medium';
`;

export const Separator = styled(Ionicons)`
  margin-right: 6px;
  margin-left: 6px;
`;
