import Expo from 'expo';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
  Platform,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Icon,
  List,
  ListItem,
  Avatar,
  SearchBar,
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
    name: 'dr. Gerry',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Simpanan Wajib',
  },
  {
    name: 'dr. Rasyid',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
    subtitle: 'Pinjaman',
  },
  {
    name: 'dr. Dimas bayu',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
    subtitle: 'Pulsa Simpati 0812787387',
  },
  {
    name: 'dr. Dimas wijaya',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Token Listrik PLN',
  },
  {
    name: 'dr. Mulyadi',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
    subtitle: 'Token Listrik PLN',
  },
   {
    name: 'dr. Peri Ganteng',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
    subtitle: 'Token Listrik PLN',
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
    const buttons = ['Button1', 'Button2'];
    const { selectedIndex } = this.state;

    return (
      
      <ScrollView>
        
        {this.renderFormsSearchBars()}
        <List containerStyle={{marginTop: 0}}>
          {list2.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              onPress={log}
              title={l.name}
               containerStyle={{height: 80}}
               rightTitle='Available'
                rightTitleStyle={{color: 'green'}}
            />
          ))}
        </List>
        
        
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
    backgroundColor: 'orange',
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
  },bgImage: {
    flex: 1,
    width: null, height: null,
    resizeMode: 'stretch',
  },
});

export default Icons;
