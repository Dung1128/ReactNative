import React, {Component} from 'react';
import {Text,
  View,
  ListView,
  Image,
  StyleSheet
} from 'react-native';

const REQUEST_URL = 'http://ntdung.esy.es/api/listSV.php'

export default class List extends Component{

  constructor(props){
    super(props);
    this.state={
      dataSource: new ListView.DataSource({
        rowHasChanged:(r1,r2)=>r1!=r2
      }),
      loaded:false
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  async fetchData() {
    try {
      let response = await fetch(REQUEST_URL);
      let responseJson = await response.json();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson.result),
        loaded:true
      });
    } catch(error) {
      console.error(error);
    }
  }

  _renderRow(row){
    return(
      <View style={Style.item}>
        <View style={Style.image}>
          <Image style={{width:75, height:75}}
            source={require('../images/naruto.png')}
            />
        </View>
        <View style={Style.info}>
          <Text>
            Họ và tên: {row.sName}
          </Text>
          <Text>
            Email: {row.sEmail}
          </Text>
          <Text>
            Email: {row.sAddress}
          </Text>
        </View>
        <View style={Style.btn}>

        </View>
      </View>
    );
  }

  render(){
    return(
      <View>
        <View style={{alignItems:'center', justifyContent:'center', paddingTop:20}}>
          <Text style={{fontWeight:'bold', fontSize:25}}>
            Danh sách sinh viên
          </Text>
        </View>
        <ListView style={{paddingTop:20}}
          dataSource = {this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>

    );
  }
}

var Style = StyleSheet.create({
  item:{
    padding:10,
    flexDirection:'row'
  },
  image:{
    flex:1
  },
  info:{
    flex:3,
    paddingLeft: 20
  },
  btn:{
    flex:0.5,
    backgroundColor:'yellow'
  }
});
