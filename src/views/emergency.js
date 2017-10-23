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

class Emergency extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
       <View style={styles.headerContainer}>
          <Icon color="white" name="plus-box" type="material-community" size={62} />
          <Text style={styles.heading}>Emergency Button</Text>
           <View
                  style={{
                    flex: 1,
                       flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                <Text style={{color:'white'}}>RSIA YPK Mandiri</Text>
          <Icon style={{marginLeft: 5}} color="white" name="location-pin" type="entypo" size={15} /></View>
        </View>
         <Card style={{padding:0, marginLeft:15,marginRight:15,marginTop:15,flex: 1,borderWidth: 1,}}>
          <Image style={styles.bgImage} source={require('./bg.png')}>
            <View style={{padding:0,margin: 0, flex: 1}}>
            <View style={{ padding:0,margin:0,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Icon
              reverse
              color="red"
              size={35}
              name="phone"
              onPress={() => navigation.navigate('Emergency')}
            />
              <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                  }}
                >
                
               <Text style={{ color: 'black',fontWeight: 'bold' }}>Call RS</Text>
                
                </View>
                 </View>
                 </View></Image>
           </Card>

           <Card style={{padding:0, marginLeft:15,marginRight:15,marginTop:15,flex: 1,borderWidth: 1,}}>
          <Image style={styles.bgImage} source={require('./bg.png')}>
            <View style={{padding:0,margin: 0, flex: 1}}>
            <View style={{ padding:0,margin:0,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Icon
              reverse
              color="red"
              size={35}
              name="chat"
              onPress={() => navigation.navigate('Emergency')}
            />
              <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                  }}
                >
                
               <Text style={{ color: 'black',fontWeight: 'bold' }}>Chat with emergency officer</Text>
                
                </View>
                 </View>
                 </View></Image>
           </Card>
        <Card style={{padding:0, marginLeft:15,marginRight:15,marginTop:15,flex: 1,borderWidth: 1,}}>
          <Image style={styles.bgImage} source={require('./bg.png')}>
            <View style={{padding:0,margin: 0, flex: 1}}>
            <View style={{ padding:0,margin:0,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Icon
              reverse
              color="red"
              size={35}
              name="car-connected"
              type="material-community"
              onPress={() => navigation.navigate('Emergency')}
            />
              <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                  }}
                >
                
               <Text style={{ color: 'black',fontWeight: 'bold' }}>Request ambulance</Text>
                
                </View>
                 </View>
                 </View></Image>
           </Card>
      </ScrollView>
    );
  }
}

Emergency.navigationOptions = {
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
  },bgImage: {
    flex: 1,
    width: null, height: null,
    margin:0,padding:0
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'red',
  },
});

export default Emergency;
