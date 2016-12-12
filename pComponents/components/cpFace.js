import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,  Card, CardItem, Thumbnail, Text, Button, Icon,View } from 'native-base';
import { Image,WebView } from 'react-native';
export default class cpFace extends Component {

  constructor(){
    super();
  }

  navigate(routeName){
    this.props.navigator.pop({
      name: routeName
    })
  }

    render() {
      return (
        <Container>
        <Header>
          <Text> Facebook
          </Text>
        </Header>
          <Content style={{padding:20, flex: 1}}>
            <View style={{flex:2}}>
              <Button info onPress={this.navigate.bind(this,'root')}>
                 Previous
                 <Icon name='ios-arrow-back' />
               </Button>
            </View>
            <View style={{padding:20, flex: 5}}>
              <WebView
                  source={{uri:'https://www.facebook.com/'}}
                  javaScriptEnabledAndroid={true}
                  startInLoadingState={true}
                  automaticallyAdjustContentInsets={false}
                  style={{marginTop: 20}}
                />
            </View>
          </Content>

        </Container>
      );
    }
}
