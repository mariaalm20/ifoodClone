/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Text} from 'react-native';
import {TabBar} from 'react-native-tab-view';

const CustomTabBar: typeof TabBar = props => {
  return (
    <>
      <StatusBar />
      <TabBar
        getAccessibilityLabel={({route: {accessibilityLabel}}) => {
          accessibilityLabel;
        }}
        activeColor="#EA1D2C"
        indicatorStyle={{backgroundColor: '#EA1D2C'}}
        style={{backgroundColor: '#ffff'}}
        renderLabel={({route: {title}}) =>
          title && (
            <Text
              accessible
              numberOfLines={1}
              style={{color: '#A6A29F', fontSize: 18}}>
              {title}
            </Text>
          )
        }
        {...props}
      />
    </>
  );
};

export default CustomTabBar;
