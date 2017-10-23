import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import FontsHome from '../views/fonts_home';
import FontsDetails from '../views/fonts_detail';

const FontsTabView = ({ navigation }) => (
  <FontsHome banner="Fonts" navigation={navigation} />
);

const FontsDetailTabView = ({ navigation }) => (
  <FontsDetails banner="Fonts Detail" navigation={navigation} />
);

const FontsTab = StackNavigator({
  Home: {
    screen: FontsTabView,
    path: '/',
    navigationOptions: () => ({
     title: (
      <Image source={require('./logo.png')} style={{  height: 20,width: 74}}/>),
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),headerRight: (
        <Icon
          name="location-pin"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10,paddingRight:10 }}
          
        />
      ),
    }),
  },
  Detail: {
    screen: FontsDetailTabView,
    path: 'fonts_detail',
    navigationOptions: {
      title: 'Fonts Detail',
    },
  },
});

export default FontsTab;
