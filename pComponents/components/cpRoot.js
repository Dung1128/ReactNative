import React, { Component } from 'react';
import { Container,
          Header,
          Title,
          Content,
          Footer,
          FooterTab,
          Button,
          Icon,Text,
          View,
          Fab } from 'native-base';

export default class pComponents extends Component {


  redirect(routeName){
    this.props.navigator.push({
      name: routeName,
      passProps: {
      }
    })
  }

    render() {
      return (
        <Container>
        <Header>
          <Text> Components
          </Text>
        </Header>
          <Content style={{padding:20}}>
            <View style={{padding:10}}>
              <Button primary onPress={this.redirect.bind(this,'card')}> Card View
              </Button>
            </View>
            <View style={{padding:10}}>
              <Button primary onPress={this.redirect.bind(this,'check')}> Check Box </Button>
            </View>
            <View style={{padding:10}}>
              <Button primary onPress={this.redirect.bind(this,'search')}> Search </Button>
            </View>
            <View style={{padding:10}}>
              <Button primary onPress={this.redirect.bind(this,'thumb')}> Thumbnail </Button>
            </View>
            <View style={{padding:10}}>
              <Button primary onPress={this.redirect.bind(this,'fab')}> Fabs </Button>
            </View>

          </Content>
        </Container>
      );
    }
}
