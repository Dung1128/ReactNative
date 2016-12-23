import React, {Component} from 'react';
import { Container, Content, Button, View,Header,Text,Icon,Title } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  NativeModules,
  Dimensions,
  Slider,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default class addSV extends Component{

  constructor(props){
    super(props);
    this.state={
      sName:'',
      sEmail:'',
      sAddress:'',
      message:'',
      error:'',
      code:''
    }
  }
  // transparent onPress={this.navigate.bind(this,'root')}
    navigate(routeName){
    this.props.navigator.pop({
      name: routeName
    })
  }

  getName(event){
  this.setState({sName:event.nativeEvent.text})
}
  getEmail(event){
    this.setState({sEmail:event.nativeEvent.text})
  }
  getAddress(event){
    this.setState({sAddress:event.nativeEvent.text})
  }


  async addSV(){

    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(this.state.sName.toString() =="")
    {
       alert("Name can't be blank");
    }else if(this.state.sEmail =="") {
        alert("Email can't be blank");
    }else if(!pattern.test(this.state.sEmail)){
       alert("Email is invalid");
    } else if(this.state.sAddress =="") {
        alert("Address can't be blank");
      }
        else{
              let formdata = new FormData();
              formdata.append("sName", this.state.sName);
              formdata.append("sEmail", this.state.sEmail);
              formdata.append("sAddress", this.state.sAddress);
              console.log(this.state.sName + this.state.sEmail + this.state.sAddress);
              try {
                let response = await fetch('http://ntdung.esy.es/api/addSV.php', {
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
                  errors: jsonResponse['message'],
                });
                alert(this.state.message);

              } catch(error) {
                  this.setState({error: error});
                  console.log("error " + error);
                 alert("wrong!");
                  this.setState({showProgress: false});
              }
        }
  }

  render(){
    return(
      <View>
          <Header>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>
              <Title>Add student</Title>
            // <MenuContext>
            //     <Menu>
            //       <MenuTrigger>
            //         <Button transparent>
            //           <Icon name='ios-menu'/>
            //         </Button>
            //       </MenuTrigger>
            //
            //       <MenuOptions>
            //         <MenuOption value={1} text='One' />
            //         <MenuOption value={2}>
            //           <Text style={{color: 'red'}}>Two</Text>
            //         </MenuOption>
            //         <MenuOption value={3} disabled={true} text='Three' />
            //       </MenuOptions>
            //
            //     </Menu>
            //   </MenuContext>
              <Button transparent>
                <Icon name='ios-menu'/>
              </Button>

          </Header>

          <View style={Style.content}>
            <View style={{flexDirection:'row'}}>
              <Text style={Style.txt}>Full Name
              </Text>
                <TextInput autoFocus={true} style={Style.txtInput} onChange={(event)=>{this.getName(event)}}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={Style.txt}>Email
              </Text>
                <TextInput placeholder='example@....' style={Style.txtInput} onChange={(event)=>{this.getEmail(event)}}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={Style.txt}>Address
              </Text>
                <TextInput style={Style.txtInput} onChange={(event)=>{this.getAddress(event)}}/>
            </View>

            <View style={{flexDirection:'row', justifyContent:'center',paddingTop:15}}>
              <Button primary style={{marginRight:20}} onPress={()=>this.addSV()}> OK </Button>
              <Button warning> Cancle </Button>
            </View>

          </View>

      </View>
    );
  }
}

const Style = StyleSheet.create({
  content:{
    padding:20
  },
  txt:{
    flex:1,
    paddingTop:15,
    fontWeight:'bold'
  },
  txtInput:{
    borderRadius:5,
    flex:3,
    margin:5
  }
});
