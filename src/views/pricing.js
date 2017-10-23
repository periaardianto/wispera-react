import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import colors from 'HSColors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { PricingCard, Text } from 'react-native-elements';

class Pricing extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.hero}>
          <Icon color="white" name="help" size={62} />
          <Text style={styles.heading}>Help</Text>
        </View>
       
      </ScrollView>
    );
  }
}

Pricing.navigationOptions = {
  title: 'Help',
};

const styles = StyleSheet.create({
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pricing;
