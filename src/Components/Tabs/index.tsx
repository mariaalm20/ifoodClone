import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import CustomTabView from './CustomTabView';
import Restaurante from './RestaurantesTab';
import Mercados from './MercadosTab';
import Products from '../../pages/Products';

const routes = [
  {
    key: 'restaurantes',
    title: 'Restaurantes',
    accessibilityLabel: 'Equipes',
  },
  {
    key: 'mercados',
    title: 'Mercados',
    accessibilityLabel: 'Favoritos',
  },
];

const renderScene = SceneMap({
  restaurantes: Restaurante,
  mercados: Mercados,
});

const TabViewExample = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  return (
    <CustomTabView
      navigationState={{
        index,
        routes,
      }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      initialLayout={{width: layout.width}}
    />
  );
};

export default TabViewExample;
