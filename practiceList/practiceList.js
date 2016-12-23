
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  ListView,
  Dimensions
} from 'react-native';

const ACCESS_TOKEN = 'access_token';
const REQUEST_URL='http://ntdung.esy.es/api/listSV.php'
import App from './components/App.js';
import List from './components/List.js';
import Detail from './components/Detail.js';
class practiceList extends Component {


  render() {
    return (
      <App/>
    );
  }
}

var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width;

const style = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      padding:30
    },
    id: {
      fontSize: 20,
      marginTop: 8,
      color: 'red'
    },
    Name: {
      color: '#48bbec'
    },
    listView: {
      flex: 1
    },
    title: {
      color:'#48bbec',
      fontSize: 30,
      marginBottom:20
    },
    text: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      width:300,
      height:50,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    textButton: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }
});

module.exports = practiceList;
