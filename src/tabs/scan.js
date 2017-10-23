import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ScanHome from '../views/scan_home';
import ScanDetails from '../views/scan_details';

const ScanTabView = ({ navigation }) => <ScanHome navigation={navigation} />;

const ScanDetailTabView = ({ navigation }) => (
  <ScanDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const ScanTab = StackNavigator({
  Forms: {
    screen: ScanTabView,
    path: '/',
    navigationOptions: {
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
    },
  },
  Scan_Detail: {
    screen: ScanDetailTabView,
    path: '/scan_detail',
    navigationOptions: {
      title: 'Scan QR',
    },
  },
});

export default ScanTab;
