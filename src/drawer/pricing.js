import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Pricing from '../views/pricing';

const PricingDrawerItem = StackNavigator({
  Pricing: {
    screen: Pricing,
    navigationOptions: ({ navigation }) => ({
      title: 'Help',
      headerLeft: (
        <Icon
          name="close"
          size={30}
          type="evil"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.dispatch({ type: 'Navigation/BACK' })}
        />
      ),
    }),
  },
});

PricingDrawerItem.navigationOptions = {
  drawerLabel: 'Help',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="help"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      
      color={tintColor}
    />
  ),
};

export default PricingDrawerItem;
