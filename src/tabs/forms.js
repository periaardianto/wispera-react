import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import FormsHome from '../views/forms_home';
import FormsDetails from '../views/forms_details';

const FormsTabView = ({ navigation }) => <FormsHome navigation={navigation} />;

const FormsDetailTabView = ({ navigation }) => (
  <FormsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const FormsTab = StackNavigator({
  Forms: {
    screen: FormsTabView,
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
  Forms_Detail: {
    screen: FormsDetailTabView,
    path: '/forms_detail',
    navigationOptions: {
      title: 'Forms Detail',
    },
  },
});

export default FormsTab;
