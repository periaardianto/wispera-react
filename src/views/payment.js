import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform,Image } from 'react-native';
import colors from 'HSColors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  SearchBar,
  List,
  ListItem,
  Avatar,
} from 'react-native-elements';
const log = () => console.log('this is an example method');
const list2 = [
  {
    name: 'Asuransi',
    avatar_url: 'credit-card',
    type:'feather',
    subtitle: 'Menerima 100 lebih asuransi',
    active:'Active',
    color:'#e14329',
  },
  {
    name: 'BPJS Kesehatan',
    type:'material-community',
    avatar_url: 'medical-bag',
    subtitle: 'Menerima BPJS Kesehatan',
    active:' ',
     color:'#02b875',
  },
  {
    name: 'Kartu Kredit',
    type:'entypo',
    avatar_url: 'credit-card',
    subtitle: 'Kartu kredit',
    active:' ',
    color:'#6441A5',
  },
  {
    name: 'ATM/Bank Transfer',
    type:'material-community',
    avatar_url: 'bank',
    subtitle: 'Transfer ke virtual account',
    active:' ',
    color:'#673AB7',
  },
  {
    name: 'Klikbca',
    type:'entypo',
    avatar_url: 'mouse',
    subtitle: 'menggunakan Token Klikbca',
    active:' ',
    color:'#03A9F4',
  },
  {
    name: 'BCA Klikpay',
    type:'material-community',
    avatar_url: 'mouse',
    subtitle: ' ',
    active:' ',
    color:'#8BC34A',
  },
   {
    name: 'Mandiri clickpay',
    type:'font-awesome',
    avatar_url: 'mouse-pointer',
    subtitle: ' ',
    active:' ',
    color:'#009688',
  },
];

class Payment extends Component {
  renderFormsSearchBars() {
    if (Platform.OS === 'ios') {
      return (
        <View>
           <View style={{ marginTop: 0, marginBottom: 0 }}>
            <SearchBar
              lightTheme
              clearIcon
              textInputRef="textInputRef"
              placeholder="Type Here..."
            />
          </View>
        </View>
      );
    }
  }
  render() {
    return (
      
      <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.headingContainer}>
          <Icon color="white" name="payment" type="material" size={62} />
          <Text style={styles.heading}>Active Bill: Rp. 5.000.000</Text>
        </View>
        {this.renderFormsSearchBars()}
         <List containerStyle={{marginTop: 0}}>
          {list2.map((l, i) => (
            <ListItem
              
              leftIcon={{ name: l.avatar_url, type:l.type,color:l.color }}
              key={i}
              onPress={log}
              title={l.name}
              subtitle={l.subtitle}
               containerStyle={{height: 80}}
               rightTitle={l.active}
                rightTitleStyle={{color: 'red'}}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary2,
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

export default Payment;
