import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ListsHome from '../views/lists_home';
import ListsDetails from '../views/lists_detail';

const ListsTabView = ({ navigation }) => (
  <ListsHome banner="Lists" navigation={navigation} />
);

const ListsDetailTabView = ({ navigation }) => (
  <ListsDetails banner="Lists Detail" navigation={navigation} />
);

const ListsTab = StackNavigator({
  Home: {
    screen: ListsTabView,
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
  Lists_Detail: {
    screen: ListsDetailTabView,
    path: 'lists_detail',
    navigationOptions: {
      title: 'Lists Detail',
    },
  },
});

export default ListsTab;
