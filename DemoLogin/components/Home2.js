import React,{Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Style from '../src/Style.js';
export default class Home2 extends Component{

  constructor(props){
    super(props);
    this.state={
      email: this.props.em,
      pass:this.props.pass
    }
  }

  redirect(routeName){
      this.props.navigator.pop({
        name: routeName,
        passProps: {

        }
      })
    }


  render() {
    return (
      <View style={Style.container}>
        <View style={Style.title}>
          <Text style={Style.txtTit}> LOGOUT
          </Text>
        </View>
        <View style={Style.input}>
            <Text> Email: {this.state.email} - Password: {this.state.pass}
            </Text>
        </View>
        <View style={Style.login}>
          <TouchableOpacity style={Style.btnLogin}  onPress={this.redirect.bind(this,'logout')}>
            <Text style={Style.txtButton}> logout
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
