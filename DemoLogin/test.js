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
const Login = require('./components/Login.js');
const Home = require('./components/Home.js');
class DemoLogin extends Component{
  // renderScene(route, navigator){
  //     switch (route.name) {
  //       case 'login': return(<Login btnLogin={()=>{
  //                   navigator.push({name:'logout'});
  //                 }}
  //                 />);
  //
  //       case 'logout': return(<Home clickMe={()=>{
  //                   navigator.pop({name:'login'});
  //                 }}
  //                 />);
  //     }
  //   }

  render() {
    return (
      // <Navigator
      //   initialRoute={{name:'login'}}
      //   renderScene={this.renderScene}
      // />
        <View>
        <Text>dfghjk
        </Text>
        </View>
    );
  }
}

module.exports = DemoLogin;
