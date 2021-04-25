/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import ProductsScreen from './pages/Products';
import {HeaderLeft, HeaderRight} from './Components';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen name="Products"  options={{
            title: 'Produtos',
            headerShown: false,
          }} component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
