import React,{Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Navigator
} from 'react-native';
// declare components
// Login = require('./components/Login.js')
// Home = require('./components/Home.js')
import Login from './components/Login.js';
import Home2 from './components/Home2.js';
class DemoLogin extends Component{
  renderScene(route, navigator){
    if(route.name == 'login'){
      return <Login navigator = {navigator} />
    }
    if(route.name == 'logout'){
      return <Home2 navigator = {navigator} {...route.passProps} />
    }

  }

  render() {
    return (
      <Navigator
          initialRoute={{name: 'login'}}
          renderScene={this.renderScene.bind(this)}
        />
    );
  }
}

module.exports = DemoLogin;
