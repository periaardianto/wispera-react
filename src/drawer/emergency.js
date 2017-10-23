import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Emergency from '../views/emergency';

const EmergencyDrawerItem = StackNavigator({
  Emergency: {
    screen: Emergency,
       navigationOptions: ({ navigation }) => ({
      title: 'Emergency',
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

EmergencyDrawerItem.navigationOptions = {
  drawerLabel: 'Emergency',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="touch-app"
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

export default EmergencyDrawerItem;
