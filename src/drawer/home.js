import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsTab from '../tabs/buttons';
import ListsTab from '../tabs/scan';
import ScanTab from '../tabs/forms';
import FormsTab from '../tabs/lists';
import FontsTab from '../tabs/fonts';

import socialColors from 'HSSocialColors';

const Home = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Booking',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ticket' : 'ticket'}
            size={30}
            type="entypo"
            color={tintColor}
          />
        ),
      },
    },
        FormsTab: {
      screen: FormsTab,
      path: '/lists',
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="chat"
            size={30}
             type="entypo"
            color={tintColor}
          />
        ),
      },
    },
    
    ScanTab: {
      screen: ScanTab,
      path: '/forms',
      navigationOptions: {
        tabBarLabel: '  ',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            raised
            name="add-to-queue"
            size={30}
            type="material"
            color="white"
            backgroundColor="#FF5722"
          />
        ),
      },
    },
    ListsTab: {
      screen: ListsTab,
      path: '/scan',
      navigationOptions: {
        tabBarLabel: 'Market',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="shopping-cart" size={30} type="entypo" color={tintColor}   />
        ),
      },
    },
    FontsTab: {
      screen: FontsTab,
      path: '/fonts',
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'account-circle' : 'account-circle'}
            size={30}
            type="material"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'ButtonsTab',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

Home.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material-commnity"
      color={tintColor}
    />
  ),
};

export default Home;
