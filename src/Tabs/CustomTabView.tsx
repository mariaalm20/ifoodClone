import React from 'react';
import {TabView} from 'react-native-tab-view';
import CustomTabBar from './CustomTabBar';

const CustomTabView: typeof TabView = props => (
  <TabView
    renderTabBar={tabBarProps => <CustomTabBar {...tabBarProps} />}
    {...props}
  />
);

export default CustomTabView;
