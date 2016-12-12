import React, { Component } from 'react';
import { Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button, Icon,
  Text,View
} from 'native-base';

import {
  Navigator
} from 'react-native';

import CpRoot from './components/cpRoot.js';
import CpCardView from './components/cpCardView.js';
import CpCheckBox from './components/cpCheckBox.js';
import CpSearch from './components/cpSearch.js';
import CpThumbnail from './components/cpThumbnail.js';
import CpFab from './components/cpFab.js';
import CpCall from './components/cpCall.js';
import CpFace from './components/cpFace.js';
import CpEmail from './components/cpEmail.js';

class pComponents extends Component {

  renderScene(route, navigator){
    if(route.name == 'root'){
      return <CpRoot navigator = {navigator} />
    }
    if(route.name == 'card'){
      return <CpCardView navigator = {navigator} />
    }
    if(route.name == 'check'){
      return <CpCheckBox navigator = {navigator} />
    }
    if(route.name == 'search'){
      return <CpSearch navigator = {navigator} />
    }
    if(route.name == 'thumb'){
      return <CpThumbnail navigator = {navigator} />
    }
    if(route.name == 'fab'){
      return <CpFab navigator = {navigator} />
    }
    if(route.name == 'call'){
      return <CpCall navigator = {navigator} />
    }
    if(route.name == 'facebook'){
      return <CpFace navigator = {navigator} />
    }
    if(route.name == 'email'){
      return <CpEmail navigator = {navigator} />
    }
  }

    render() {
      return (
          <Navigator
            initialRoute={{name: 'root'}}
            renderScene={this.renderScene.bind(this)}/>
        );
    }
}

module.exports = pComponents;
