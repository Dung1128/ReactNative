import React, {Component} from 'react';
import {Text, View,
  Navigator,
} from 'react-native';
import List from '../components/List.js';
import Detail from '../components/Detail.js';
import AddSV from '../components/addSV.js';
export default class App extends Component{

  renderScene(route, navigator){
    switch(route.name){
      case 'listS': return(
        <List/>
      );

      case 'detail': return(
        <Detail/>
      );
      case 'add': return(
        <AddSV/>
      );
    }
  }
  render(){
    return(
      <Navigator
            initialRoute={{name: 'listS'}}
            renderScene={this.renderScene}
          />
    );
  }
}
