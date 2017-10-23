import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform,Image } from 'react-native';
import colors from 'HSColors';

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  SearchBar,
  Card,
   List,
  ListItem,
  Avatar,
  Icon,
} from 'react-native-elements';

class Scan extends Component {

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
    const { navigation } = this.props;
    return (
       
      <ScrollView
       
        keyboardShouldPersistTaps="always"
      >
        
        {this.renderFormsSearchBars()}

         <Card style={{padding:0, marginLeft:15,marginRight:15,marginTop:15,flex: 1,borderWidth: 1,}}>
          <Image style={styles.bgImage} source={require('./tabungan.png')}>
            <View style={{height:120,padding:0,margin: 0, flex: 1}}>
            <View style={{ padding:0,margin:0,flexDirection: 'row', justifyContent: 'flex-start'}}>
              
                
               <Text style={{ color: 'black',fontWeight: 'bold',marginLeft:10,marginTop:80 }}>Program tabungan melahirkan</Text>
                <Text style={{ color: 'black',fontWeight: 'bold',marginLeft:10, marginTop:0 }}>Rp. 200.000/ bulan</Text>
               
               
                 </View>
                 </View></Image>
           </Card>
           



          <View style={[styles.socialRow, { marginVertical: 20 }]}>
            <View ><Icon
              onPress={() => navigation.navigate('Icons_Detail')}
              type="font-awesome"
              color="#e14329"
              name="medkit"
               size={53}

            /><Text >Obat-obatan</Text></View>
            <View><Icon
              onPress={() => console.log('hello')}
              type="entypo"
              color="#02b875"
              name="tools"
               size={48}
            /><Text>  Alat kesehatan</Text></View>
            <View><Icon
              onPress={() => console.log('hello')}
              color="#000000"
              name="v-card"
              type="entypo"
                size={50}
            /><Text> Asuransi</Text></View>
            <View><Icon
             size={50}
              color="#6441A5"
              name="emoticon"
              type="material-community"
              onPress={() => console.log('hello')}
            /><Text> Lain-lain</Text></View>
            
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
    backgroundColor: colors.secondary2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  labelContainerStyle: {
    marginTop: 8,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
   socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },bgImage: {
    flex: 1,
    width: null, height: null,
    margin:0,padding:0
  },
});

export default Scan;
