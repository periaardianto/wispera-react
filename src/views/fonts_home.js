import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform,AppRegistry,Image } from 'react-native';
import colors from 'HSColors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';
import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  SearchBar,
} from 'react-native-elements';

class Fonts extends Component {

  render() {
    return ( 
      <ScrollView
        style={{ backgroundColor: 'white' }}
       
      >
        <View style={styles.headingContainer}>
          
           <QRCode
          value='123456789'
          size={100}
          
          fgColor='white'/>
          <Text style={styles.heading}>123456789: John Doe</Text>
          
        </View>
        
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#02b875',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  labelContainerStyle: {
    marginTop: 8,
  },bgImage: {
    flex: 1,
    width: null, height: null,
    resizeMode: 'stretch',
  },
});
AppRegistry.registerComponent('Fonts', () => Fonts);
export default Fonts;
