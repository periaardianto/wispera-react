import Expo from 'expo';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Home from './src/drawer/home';
import Emergency from './src/drawer/emergency';
import SwipeDecker from './src/drawer/swipe_decker';
import Ratings from './src/drawer/ratings';
import Pricing from './src/drawer/pricing';
import Playground from './src/drawer/playground';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
    <Avatar
                  large
                  rounded
                  source={
                    require('./src/images/avatar1.jpg')
                  }/>
     
    </View>
    <DrawerItems {...props} />
  </View>
);

const MainRoot = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home,
    },
    Emergency: {
      path: '/emergency',
      screen: Emergency,
    },
    Ratings: {
      path: '/ratings',
      screen: Ratings,
    },
    Pricing: {
      path: '/pricing',
      screen: Pricing,
    }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
  }
);

Expo.registerRootComponent(MainRoot);
