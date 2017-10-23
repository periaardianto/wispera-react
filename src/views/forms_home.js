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

class Forms extends Component {

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
          <Image style={styles.bgImage} source={require('./bg.png')}>
            <View style={{padding:0,margin: 0, flex: 1}}>
            <View style={{ padding:0,margin:0,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Icon
              reverse
              color="red"
              size={35}
              name="touch-app"
              onPress={() => navigation.navigate('Emergency')}
            />
              <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                  }}
                >
                
               <Text style={{ color: 'black',fontWeight: 'bold' }}>Emergency Button</Text>
                
                </View>
                 </View>
                 </View></Image>
           </Card>
           <Card>
            <View style={{margin: 0, flex: 1}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Avatar
                  large
                  rounded
                   source={{
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                  onPress={() => console.log('Works!')}
                  containerStyle={{margin: 0, backgroundColor: 'red'}}
                  activeOpacity={0.7}
                  size={80}
                />
              <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                  }}
                >
                
               <Text style={{ color: 'black' }}>dr. Gerry Rasyid</Text>
                 <Text style={{ color: 'black' }}>Kebidanan</Text>
                <Text style={{ color: 'green' }}>08:00-17:00</Text>
                </View>
                 </View>
                 </View>
           </Card>

            <Card>
            <View style={{margin: 0, flex: 1}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Avatar
                  large
                  rounded
                   source={{
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
                  }}
                  onPress={() => console.log('Works!')}
                  containerStyle={{margin: 0, backgroundColor: 'red'}}
                  activeOpacity={0.7}
                  size={80}
                />
              <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                  }}
                >
                
               <Text style={{ color: 'black' }}>dr. Dimas Gemblung</Text>
                 <Text style={{ color: 'black' }}>Kelamin</Text>
                <Text style={{ color: 'green' }}>08:00-17:00</Text>
                </View>
                 </View>
                 </View>
           </Card>


          <View style={[styles.socialRow, { marginVertical: 20 }]}>
            <View ><Icon
              onPress={() => navigation.navigate('Icons_Detail')}
              type="font-awesome"
              color="#e14329"
              name="female"
               size={50}

            /><Text >Kebidanan</Text></View>
            <View><Icon
              onPress={() => console.log('hello')}
              type="material"
              color="#02b875"
              name="child-care"
               size={50}
            /><Text>  Anak</Text></View>
            <View><Icon
              onPress={() => console.log('hello')}
              color="#000000"
              name="medical-bag"
              type="material-community"
                size={50}
            /><Text> Dalam</Text></View>
            <View><Icon
             size={50}
              color="#6441A5"
              name="emoticon"
              type="material-community"
              onPress={() => console.log('hello')}
            /><Text> Gigi</Text></View>
            
          </View>
          <View style={[styles.socialRow, { marginVertical: 20 }]}>
            <View><Icon
              name="scissors"
              color="#673AB7"
              size={50}
              type="entypo"
              onPress={() => console.log('hello')}
            /><Text>Bedah</Text></View>
            <View><Icon
              name="male-symbol"
              color="#03A9F4"
               size={50}
                 type="foundation"
              onPress={() => console.log('hello')}
            /><Text>Kelamin</Text></View>
            <View><Icon
              color="#009688"
              name="heart"
               type="entypo"
               size={50}
              onPress={() => console.log('hello')}
            /><Text>Jantung</Text></View>
            <View><Icon
              color="#8BC34A"
              name="line-graph"
              size={50}
              type="entypo"
              onPress={() => console.log('hello')}
            /><Text>Saraf</Text></View>
            
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

export default Forms;
