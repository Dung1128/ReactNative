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
      code:'',
      message:'',
      id:'',
      email:'',
      pass:'',
      error:'',
    }
  }

  getEmail(event){
    this.setState({email:event.nativeEvent.text})
  }

  getPass(event){
    this.setState({pass:event.nativeEvent.text})
  }

  redirect(routeName){
    this.props.navigator.push({
      name: routeName,
      passProps: {
        em:this.state.email,
        pass:this.state.pass
      }
    })
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


  async onLoginPressed(){

    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(this.state.email =="")
    {
       alert("Email can't be blank");
    }else if(!pattern.test(this.state.email)){
       alert("Email is invalid");
    } else if(this.state.pass =="" || this.state.pass.length<8) {
        alert("Password can't be blank and length >=8");
    }else{

              let formdata = new FormData();
              formdata.append("userName", this.state.email);
              formdata.append("passWord", this.state.pass);
              console.log(this.state.email + this.state.pass);
              try {
                let response = await fetch('http://ntdung.esy.es/php/login.php', {
                  method: 'post',
                  headers: {
                  'Content-Type': 'multipart/form-data',
                  },
                  body: formdata

                });
                let res = await response.text();
                var jsonResponse = JSON.parse(res);
                this.setState({
                  code: jsonResponse['code'],
                   message: jsonResponse['message'],
                   result: jsonResponse['result'],
                   id: jsonResponse['result']['id'],
                   errors: jsonResponse['message'],
                   email: jsonResponse['result']['userName'],
                   pass: jsonResponse['result']['passWord'],
                });

                console.log(this.state.message);

                if (response.status >= 200 && response.status < 300 && jsonResponse['code']==0) {
                    this.redirect('logout');

                } else {
                    //Handle error
                    alert(this.state.message);

                    let error = this.state.message;
                    throw error;
                }
              } catch(error) {
                  this.setState({error: error});
                  console.log("error " + error);
                 alert("Username or Password is wrong!");
                  this.setState({showProgress: false});
              }
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
          <TouchableOpacity style={Style.btnLogin} onPress={this.onLoginPressed.bind(this,'logout')}>
            <Text style={Style.txtButton}> LOGIN
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
