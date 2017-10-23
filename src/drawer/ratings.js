import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Ratings from '../views/ratings';

const RatingsDrawerItem = StackNavigator({
  Ratings: {
    screen: Ratings,
       navigationOptions: ({ navigation }) => ({
      title: 'Setting',
      headerLeft: (
        <Icon
          name="close"
          size={30}
          type="Evil"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.dispatch({ type: 'Navigation/BACK' })}
        />
      ),
    }),
  },
});

RatingsDrawerItem.navigationOptions = {
  drawerLabel: 'Setting',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="settings"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="feather"
      color={tintColor}
    />
  ),
};

export default RatingsDrawerItem;
