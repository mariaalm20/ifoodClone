/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Text} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import * as colors from '../../Themes/Colors';

const CustomTabBar: typeof TabBar = props => {
  return (
    <>
      <StatusBar />
      <TabBar
        getAccessibilityLabel={({route: {accessibilityLabel}}) => {
          accessibilityLabel;
        }}
        activeColor={colors.primary}
        indicatorStyle={{backgroundColor: colors.primary}}
        style={{backgroundColor: colors.white}}
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
