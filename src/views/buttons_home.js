import Expo from 'expo';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Icon,
  List,
  ListItem,
  Avatar
} from 'react-native-elements';

import colors from 'HSColors';

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'thot leader',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
  },
  {
    name: 'jsa',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
  },
  {
    name: 'katy friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
  },
];

const log = () => console.log('this is an example method');

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO',
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer',
  },
  {
    name: 'Melissa Jones',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
  },
];

class Icons extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      selectedIndex: 0,
      value: 0.5,
      dataSource: ds.cloneWithRows(list1),
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{ name: rowData.icon }}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    const buttons = ['Button1', 'Button2'];
    const { selectedIndex } = this.state;

    return (
     
      <ScrollView>
        <View style={styles.headerContainer}>
          <Icon color="white" name="ticket" type="entypo" size={62} />
          <Text style={styles.heading}>Active Booking</Text>
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
        
          <Card>
            <View style={{margin: 0, flex: 1}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Avatar
                  large
                  rounded
                  title="101"
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
                <Text style={{ color: 'green' }}>10 October 2017</Text>
               <Text style={{ color: 'black' }}>dr. Gerry Rasyid</Text>
                 <Text style={{ color: 'black' }}>Dimas Wijaya</Text>
                <Text style={{ color: 'green' }}>Currrently No 80</Text>
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
                  title="2"
                  onPress={() => console.log('Works!')}
                  containerStyle={{margin: 0, backgroundColor: 'green'}}
                  activeOpacity={0.7}
                  size={80}
                />
              <View
                  style={{
                    flex: 1,
                    marginLeft: 20,
                  }}
                >
                <Text style={{ color: 'green' }}>10 October 2017</Text>
               <Text style={{ color: 'black' }}>Apotik</Text>
                 <Text style={{ color: 'black' }}>Dimas Wijaya</Text>
                <Text style={{ color: 'green' }}>Currrently No 1</Text>
                </View>
                 </View>
                 </View>
           </Card>
       
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FF5722',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
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
   bgImage: {
    flex: 1,
    width: null, height: null,
    resizeMode: 'stretch',
  },
});

export default Icons;
