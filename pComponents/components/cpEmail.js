import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,  Card, CardItem, Thumbnail, Text, Button, Icon,View } from 'native-base';
import { Image } from 'react-native';
export default class cpEmail extends Component {

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
          <Text> Email
          </Text>
        </Header>
          <Content style={{padding:20}}>
            <View>
              <Button info onPress={this.navigate.bind(this,'root')}>
                 Previous
                 <Icon name='ios-arrow-back' />
               </Button>
            </View>
            <View style={{padding:20}}>
              <Text style={{fontSize: 20, fontWeight:'bold'}}> Tab Email ....
              </Text>
            </View>
          </Content>

        </Container>
      );
    }
}
