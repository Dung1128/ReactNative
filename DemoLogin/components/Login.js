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
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      pass:''
    }
  }

  redirect(routeName){

    }
  getEmail(event){
    this.setState({email:event.nativeEvent.text})
  }

  getPass(event){
    this.setState({pass:event.nativeEvent.text})
  }

  check(routeName){
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(this.state.email =="")
    {
       alert("Email can't be blank");
    }else if(!pattern.test(this.state.email)){
       alert("Email is invalid");
    } else if(this.state.pass =="" || this.state.pass.length<8) {
        alert("Password can't be blank and length >=8");
    }
    else {
      this.props.navigator.push({
        name: routeName,
        passProps: {
          em:this.state.email,
          pass:this.state.pass
        }
      })
    }

  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.title}>
          <Text style={Style.txtTit}> LOGIN
          </Text>
        </View>
        <View style={Style.input}>
          <TextInput style={Style.txtInput}  autoFocus  ={true} placeholder="Email" onChange={(event)=>{this.getEmail(event)}}/>
          <TextInput style={Style.txtInput}  secureTextEntry = {true} placeholder="Password" onChange={(event)=>{this.getPass(event)}}/>
        </View>
        <View style={Style.login}>
          <TouchableOpacity style={Style.btnLogin} onPress={this.check.bind(this,'logout')}>
            <Text style={Style.txtButton}> LOGIN
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
